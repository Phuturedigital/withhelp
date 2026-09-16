-- WITH. research and waitlist database schema.
-- This database is intentionally separate from future production safety telemetry.

create schema if not exists extensions;
create schema if not exists with_app;

create extension if not exists citext with schema extensions;

create or replace function with_app.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  email extensions.citext not null unique,
  first_name text not null,
  last_name text,
  phone text,
  city text,
  role text not null,
  message text,
  consent boolean not null default false,
  source text not null default 'website',
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint waitlist_email_valid check (email::text ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  constraint waitlist_first_name_len check (char_length(first_name) between 1 and 100),
  constraint waitlist_last_name_len check (last_name is null or char_length(last_name) <= 100),
  constraint waitlist_phone_len check (phone is null or char_length(phone) <= 40),
  constraint waitlist_city_len check (city is null or char_length(city) <= 120),
  constraint waitlist_role_len check (char_length(role) between 1 and 120),
  constraint waitlist_message_len check (message is null or char_length(message) <= 2000),
  constraint waitlist_consent_required check (consent = true)
);

alter table public.waitlist_submissions enable row level security;

-- The browser must never read or write this table directly.
revoke all on table public.waitlist_submissions from anon, authenticated;

create index if not exists waitlist_submissions_created_at_idx
  on public.waitlist_submissions (created_at desc);

create index if not exists waitlist_submissions_role_idx
  on public.waitlist_submissions (role);

drop trigger if exists waitlist_touch_updated_at on public.waitlist_submissions;
create trigger waitlist_touch_updated_at
before update on public.waitlist_submissions
for each row execute function with_app.touch_updated_at();
