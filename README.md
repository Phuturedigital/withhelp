# WITH.

WITH. is a South African personal safety network concept designed around a simple principle: safety should start before the emergency.

This repository is the canonical home for the **website, public brand system, concept storytelling, partner/research surfaces and brand contract**.

The production mobile application lives separately at:

https://github.com/Phuturedigital/withhelp-app

The repositories stay separate in code and deployment, but share one product language, visual system and trust model.

## Current status

Research and prototype stage. WITH. is not currently an emergency service, security company, or substitute for SAPS, EMS, or other emergency services.

## Canonical documents

- `docs/BRAND-GUIDE.md` — master brand system: name, mission, vision, positioning, slogan/tagline hierarchy, voice, messaging, visual identity, photography, typography, product language, partnerships, campaigns and governance
- `docs/INFOGRAPHIC-CONCEPT-DIRECTION.md` — concept maps, network growth visuals, Assistance Point demonstrations, coverage storytelling, diagram rules and conceptual disclaimers
- `docs/WEBSITE-OPEN-SOURCE-STACK.md` — website-specific recommendations: MapLibre GL JS, Turf, ECharts, Mermaid and XYFlow
- `docs/CROSS-REPO-DESIGN-CONTRACT.md` — rules keeping the website and mobile app visually aligned while remaining separate
- `docs/WITHHELP.md` — product source of truth
- `docs/MOBILE-BACKEND-ARCHITECTURE.md` — mobile, offline, backend and incident architecture reference
- `docs/PILOT-ECONOMICS-AND-OPERATIONS.md` — pilot model, economics, validation and operating assumptions
- `docs/BRAND-WEBSITE-MOBILE-UX.md` — website and mobile UX implementation guidance

## Shared brand contract

Canonical machine-readable contract:

`shared/with-brand-contract.json`

The mobile repository mirrors this file. The app repository contains a GitHub Actions check that detects when its copy no longer matches this canonical version.

## Repository structure

- `api/` — public website and marketing/demo routes
- `docs/` — brand, product, concept visualization, resilience, economics, UX and architecture
- `shared/` — canonical cross-repo brand contract
- `supabase/` — waitlist schema and Edge Function source
- `vercel.json` — website production routing

## Website surfaces

- `/` — public website
- `/mission` — mission
- `/how-it-works` — protection system
- `/assistance-points` — Assistance Point concept model
- `/organisations` — employer, campus, bank, insurer, property and responder model
- `/trust` — privacy, AI boundaries and anti-abuse principles
- `/join` — research/waitlist intake
- `/app` — marketing/demo mobile concept only; production app code lives in `withhelp-app`

## Repository boundary

This repository should own:

- public brand and messaging
- concept infographics
- illustrative network maps
- website interaction
- partner and pilot storytelling
- research/waitlist intake

It should not become the production mobile codebase.

## Core rule

No single vendor, device, contact, responder, or network path should be capable of breaking the entire safety loop.
