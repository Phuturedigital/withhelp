# WITH. implementation checklist

This checklist translates the canonical product, brand, UX, architecture and pilot documents into build status. A checked item means it exists in the current launch preview, not that a production safety guarantee has been validated.

## Website and brand

- [x] Primary brand line and pre-launch service boundary are visible.
- [x] Multi-page information architecture covers mission, product logic, Assistance Points, organisations, trust and launch intake.
- [x] Calm cream, near-black, coral and lime visual system follows the brand guide.
- [x] Photography shows ordinary movement rather than fear-based imagery.
- [x] Interactive mobile UI is embedded on the homepage and remains in the same browser tab.
- [x] Full-screen `/app` preview remains available through same-tab navigation.
- [x] Every website route includes an icon-led explanatory diagram.
- [x] Ask WITH. interrupts immediate-danger language with existing emergency resources.
- [x] Fragmented infrastructure and WITH. coordination are explained visually.
- [x] Protection is shown across before, during and after stages.
- [x] Failure paths explain how the safety chain can continue.
- [x] Assistance Point maps are prominently labelled as illustrative.
- [x] Network growth begins with personal value and avoids fabricated metrics.
- [x] Organisation roles explain where employers, campuses, financial institutions, properties, retailers and responders fit.
- [x] Business privacy distinguishes aggregate programme insight from prohibited individual surveillance.
- [x] The organisation pilot journey explains discovery through expansion.
- [x] MapLibre GL JS renders the map and Turf.js generates illustrative reach geometry.
- [x] CSS and HTML handle simple nonnumeric diagrams without unnecessary dependencies.
- [ ] Use Apache ECharts only when real or explicitly illustrative quantitative data needs charting.
- [ ] Use XYFlow only when interaction materially improves a network explanation.
- [x] Add a mobile navigation menu with 48px controls for all website pages.
- [x] Add accessible names and autocomplete hints to launch form fields.
- [x] Keep diagrams, app preview and long page headings contained at 320px.
- [x] Credit WITH. as a PhutureDigital project across website and app surfaces.
- [ ] Run a production accessibility audit against WCAG 2.2 AA.

## Cross-platform mobile app

Source repository: [Phuturedigital/withhelp-app](https://github.com/Phuturedigital/withhelp-app)

- [x] One Expo React Native TypeScript codebase targets Android, iOS and web.
- [x] First-use onboarding explains protection, location purpose and Trusted Circle boundaries.
- [x] Home answers readiness, protection action and nearby-help questions.
- [x] Start protection offers journey, ride, short moment and Private Risk contexts.
- [x] Guardian active state shows destination, arrival, connection, heartbeat, Trusted Circle and nearby help.
- [x] Safety Countdown supports completion and adding five minutes.
- [x] Private Risk remains visually quiet and user activated.
- [x] Assistance Points use `OPEN + STAFFED`, not `SAFE`.
- [x] Trusted Circle sharing rules are visible.
- [x] Readiness distinguishes required dependencies from the optional watch.
- [x] SOS uses press and hold and remains reachable without dominating the interface.
- [x] Preview language states that tracking, dispatch and emergency response connect at launch.
- [ ] Persist onboarding and local session state in encrypted device storage.
- [ ] Implement screen-reader and device-level haptic testing on iOS and Android.

## Connected alpha

- [ ] Create a separate production safety database environment.
- [ ] Add authentication, device registration and Trusted Circle invitations.
- [ ] Add durable safety sessions, immutable event IDs and monotonic sequence numbers.
- [ ] Implement idempotent heartbeat and incident APIs behind a safety API boundary.
- [ ] Add an encrypted offline event queue and canonical-state reconciliation.
- [ ] Add APNs and FCM delivery with explicit delivery and acknowledgement states.
- [ ] Integrate route generation while keeping routine route checks on device.
- [ ] Implement least privilege, RLS, short-lived credentials and sensitive-access auditing.

## Pilot readiness

- [ ] Test every failure domain listed in `MOBILE-BACKEND-ARCHITECTURE.md`.
- [ ] Validate one Johannesburg pilot corridor with 100-300 invited users.
- [ ] Verify 20-50 Assistance Points and their staff procedures.
- [ ] Contract and test one registered professional response partner.
- [ ] Measure protected journeys completed, reliability, response, Assistance Point and trust metrics.
- [ ] Stop or redesign against the documented kill criteria when the basic loop is not reliable.