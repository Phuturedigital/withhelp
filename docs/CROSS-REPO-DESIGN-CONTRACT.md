# WITH. Cross Repository Design Contract

WITH. intentionally uses two separate repositories:

- `Phuturedigital/withhelp` — website, public brand, storytelling, concept visuals, partner and research surfaces
- `Phuturedigital/withhelp-app` — production mobile application, native interface, device integrations and safety interactions

They must remain separate in code ownership, deployment and release cadence, but they must not become separate brands.

## Source of truth

The website repository owns the canonical brand system:

- `docs/BRAND-GUIDE.md`
- `docs/INFOGRAPHIC-CONCEPT-DIRECTION.md`
- `shared/with-brand-contract.json`

The mobile repository mirrors `shared/with-brand-contract.json` and treats its version number as a compatibility contract.

## What must remain identical

Across website and app:

- brand name: `WITH.`
- primary tagline
- product feature names
- colour values
- semantic meaning of coral, lime, cream and black
- typography family and hierarchy philosophy
- tone of voice
- privacy language
- Assistance Point terminology
- concept disclosure rules
- protected / attention / incident / recovery state meaning

## What may differ

The website may use:
- editorial layouts
- larger expressive display type
- explanatory diagrams
- illustrative maps
- richer photography
- longer-form storytelling

The mobile app may use:
- larger touch targets
- denser operational status information
- haptics
- native sheets and navigation
- device permissions
- native map interactions
- highly constrained incident-state copy

Different interaction patterns are acceptable. Different brand meaning is not.

## State mapping

### Everyday
Website: calm explanation and ordinary-life photography.
Mobile: cream default interface with minimal urgency.

### Protected
Website: lime used to explain successful protection state.
Mobile: lime means active/ready/confirmed, often against near-black for focus.

### Attention
Website: coral draws attention to an important concept or warning.
Mobile: coral means action required, degraded protection or escalation potential.

### Incident
Website: explain the flow without sensationalism.
Mobile: reduce copy, maximize clarity, keep SOS and incident state unmistakable.

### Recovery
Website: explain care and support pathways.
Mobile: factual next steps and handoff support.

## Product language contract

Use consistently:
- Guardian
- Safety Countdown
- Private Risk
- Trusted Circle
- Assistance Point
- SOS

Do not introduce alternate names in one repo without updating the contract first.

## Concept versus operational data

Website concept visuals must clearly say when they are illustrative.

The app must never display concept data as though it is live operational coverage.

When the project transitions from concept to pilot, data provenance must be explicit:

- Illustrative
- Pilot
- Verified operational

## Change process

When changing brand fundamentals:

1. Update `Phuturedigital/withhelp/docs/BRAND-GUIDE.md`.
2. Update `Phuturedigital/withhelp/shared/with-brand-contract.json` and increment `contractVersion`.
3. Mirror the same JSON file into `Phuturedigital/withhelp-app/shared/with-brand-contract.json`.
4. Update affected website and app components.
5. Review both surfaces side by side before release.

## Review checklist

Before merging a major website or mobile UI change, verify:

- Does this still look unmistakably like WITH.?
- Do coral and lime mean the same thing on both surfaces?
- Are feature names identical?
- Is privacy language consistent?
- Is this calm when life is normal?
- Is this focused when protection is active?
- Is this unambiguous during an incident?
- Are concept visuals explicitly labelled?
- Does the mobile experience remain usable under stress?
- Does the website sell the idea without overstating current capability?

## Principle

Separate codebases. One product system. One visual language. One trust model.
