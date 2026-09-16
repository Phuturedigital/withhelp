-- Record consent evidence and enforce a defined review/deletion date.

alter table public.waitlist_submissions
  add column if not exists consented_at timestamptz,
  add column if not exists privacy_notice_version text,
  add column if not exists expires_at timestamptz;

update public.waitlist_submissions
set
  consented_at = coalesce(consented_at, created_at),
  privacy_notice_version = coalesce(privacy_notice_version, 'pre-2026-09-16'),
  expires_at = coalesce(expires_at, updated_at + interval '24 months')
where consented_at is null
   or privacy_notice_version is null
   or expires_at is null;

alter table public.waitlist_submissions
  alter column consented_at set default now(),
  alter column consented_at set not null,
  alter column privacy_notice_version set not null,
  alter column expires_at set default (now() + interval '24 months'),
  alter column expires_at set not null;

create index if not exists waitlist_submissions_expires_at_idx
  on public.waitlist_submissions (expires_at);

create or replace function with_app.delete_expired_waitlist_submissions()
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  deleted_count bigint;
begin
  delete from public.waitlist_submissions
  where expires_at <= now();

  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

revoke all on function with_app.delete_expired_waitlist_submissions() from public;

create extension if not exists pg_cron;

select cron.schedule(
  'delete-expired-with-waitlist',
  '17 2 * * *',
  $$select with_app.delete_expired_waitlist_submissions();$$
);