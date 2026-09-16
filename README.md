# WITH.

WITH. is a South African personal safety network concept designed around a simple principle: safety should start before the emergency.

This repository is the canonical home for the WITH. product, website, mobile interface prototype, safety architecture, brand system, and backend reference implementation.

## Current status

Research and prototype stage. WITH. is not currently an emergency service, security company, or substitute for SAPS, EMS, or other emergency services.

## Canonical documents

- `docs/BRAND-GUIDE.md` — complete master brand system: name, meaning, mission, vision, positioning, slogan/tagline hierarchy, voice, messaging, visual identity, photography, typography, product language, partnerships, AI boundaries, campaigns and governance
- `docs/WITHHELP.md` — product source of truth
- `docs/MOBILE-BACKEND-ARCHITECTURE.md` — mobile, offline, backend and incident architecture
- `docs/PILOT-ECONOMICS-AND-OPERATIONS.md` — pilot model, economics, validation and operating assumptions
- `docs/BRAND-WEBSITE-MOBILE-UX.md` — website and mobile UX implementation guidance

## Repository structure

- `api/` — website and mobile prototype serverless routes
- `docs/` — brand, product, resilience, economics, UX and mobile/backend architecture
- `supabase/` — waitlist schema and Edge Function source
- `vercel.json` — production routing

## Product surfaces

- `/` — public website
- `/mission` — mission
- `/how-it-works` — protection system
- `/assistance-points` — Assistance Point model
- `/organisations` — employer, campus, bank, insurer, property and responder model
- `/trust` — privacy, AI boundaries and anti-abuse principles
- `/join` — research/waitlist intake
- `/app` — clickable mobile interface prototype

## Core rule

No single vendor, device, contact, responder, or network path should be capable of breaking the entire safety loop.
