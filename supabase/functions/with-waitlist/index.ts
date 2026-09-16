const allowedOrigins = new Set([
  'https://withhelp.co.za',
  'https://www.withhelp.co.za',
  'https://withhelp.vercel.app',
  'https://previews.phuturedigital.co.za',
  'http://localhost:3000',
]);

const allowedRoles = new Set([
  'Individual or potential user',
  'Business or Assistance Point',
  'Employer',
  'University or campus',
  'Bank or insurer',
  'Property group',
  'Security or response provider',
  'GBV, NGO or community organisation',
  'Research, government or other',
  'Public sector, policy or other',
]);

function corsHeaders(origin: string | null) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    'Vary': 'Origin',
  };
  if (origin && allowedOrigins.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  return headers;
}

function json(body: unknown, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(origin),
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function clean(value: unknown, max: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get('Origin');

  if (req.method === 'OPTIONS') {
    if (origin && !allowedOrigins.has(origin)) return new Response(null, { status: 403 });
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, origin);
  if (origin && !allowedOrigins.has(origin)) return json({ error: 'Origin not allowed' }, 403, origin);

  const contentLength = Number(req.headers.get('content-length') || '0');
  if (contentLength > 16_384) return json({ error: 'Request too large' }, 413, origin);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: 'Invalid request' }, 400, origin);
  }

  // Honeypot. Return success so automated spam does not learn how filtering works.
  if (clean(body.website, 200)) return json({ ok: true }, 200, origin);

  const firstName = clean(body.first_name, 100);
  const lastName = clean(body.last_name, 100) || null;
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40) || null;
  const city = clean(body.city, 120) || null;
  const role = clean(body.role, 120);
  const message = clean(body.message, 2000) || null;
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'yes' || body.consent === 'on';

  if (!firstName || !email || !role || !consent) return json({ error: 'Please complete the required fields' }, 400, origin);
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) return json({ error: 'Please enter a valid email address' }, 400, origin);
  if (!allowedRoles.has(role)) return json({ error: 'Please choose a valid participation type' }, 400, origin);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const secretJson = Deno.env.get('SUPABASE_SECRET_KEYS');
  const legacyServiceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  let secretKey = legacyServiceRole || '';

  if (secretJson) {
    try {
      secretKey = JSON.parse(secretJson)?.default || secretKey;
    } catch {
      // Legacy fallback remains available during Supabase key migration.
    }
  }

  if (!supabaseUrl || !secretKey) {
    console.error('WITH waitlist: missing Supabase backend credentials');
    return json({ error: 'Service unavailable' }, 503, origin);
  }

  const expiresAt = new Date();
  expiresAt.setUTCMonth(expiresAt.getUTCMonth() + 24);

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    city,
    role,
    message,
    consent: true,
    consented_at: new Date().toISOString(),
    privacy_notice_version: '2026-09-16',
    expires_at: expiresAt.toISOString(),
    source: 'with-website',
    user_agent: clean(req.headers.get('user-agent'), 500) || null,
  };

  const dbResponse = await fetch(`${supabaseUrl}/rest/v1/waitlist_submissions?on_conflict=email`, {
    method: 'POST',
    headers: {
      'apikey': secretKey,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!dbResponse.ok) {
    console.error('WITH waitlist database error', dbResponse.status, await dbResponse.text());
    return json({ error: 'Could not save your information' }, 500, origin);
  }

  return json({ ok: true }, 201, origin);
});
