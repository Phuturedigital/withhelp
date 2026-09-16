# WITH. Pilot, Economics and Operations

## Purpose

This document captures the lean validation plan, operating model, cost principles and commercial logic for WITH.

The objective is not to launch nationally as fast as possible. The objective is to prove that the protection loop creates real value and can operate reliably enough to deserve scale.

## Pilot geography

Start in one dense Johannesburg corridor rather than across South Africa.

A Sandton / Rosebank style pilot area is useful because it can combine:

- office workers
- students
- ride hailing
- walking between parking and venues
- malls
- pharmacies
- petrol stations
- hotels
- apartment buildings
- private security presence

The exact corridor should be selected only after partner availability and user interviews.

## Pilot size

Working target:

- 100 to 300 invited users
- 20 to 50 verified Assistance Points
- one professional response partner
- one mobile app build
- smartwatch support only if it does not delay the phone product

## Three validation questions

1. Will real people voluntarily start Guardian or Safety Countdown sessions?
2. Will 20 to 50 businesses join and consistently follow the Assistance Point procedure?
3. Can one professional response partner reliably receive, acknowledge and act on an incident?

If any of those fail, additional AI, custom hardware or broader geographic scale does not solve the core problem.

## Required pilot scenarios

### Normal use

- morning commute
- evening commute
- walking to a car
- ride hailing
- own car
- public transport
- someone else driving
- short countdown
- successful arrival

### Degraded conditions

- weak mobile data
- temporary network loss
- low battery
- location permission issue
- push notification delay
- phone and watch separation
- route deviation
- unexpected stop
- missed arrival
- missed check in

### Incident simulations

- manual SOS
- no response to safety check
- phone offline after anomaly
- Trusted Circle member unavailable
- response API timeout
- no provider acknowledgement
- Assistance Point arrival
- invalid or expired Assistance Point QR
- false alarm
- duress cancellation simulation

No live pilot should deliberately expose participants to danger.

## North star

**Protected journeys successfully completed.**

## Supporting metrics

### Adoption

- invited users who activate
- weekly protected users
- sessions per protected user
- Guardian start rate
- Countdown start rate
- repeat use within 30 days

### Reliability

- session completion rate
- heartbeat delivery rate
- average offline queue depth
- push delivery success
- false escalation rate
- missed escalation rate
- battery impact

### Response

- incident delivery time
- acknowledgement time
- responder assignment time
- time to responder en route
- time to responder arrival
- user located rate
- incident resolution rate

### Assistance Points

- active locations
- status accuracy
- training completion
- QR arrival success
- staff procedure compliance
- failed handoffs
- locations removed from verification

### Trust

- privacy concern rate
- opt out rate
- permission drop off
- Trusted Circle acceptance rate
- users who disable sharing after first session

## Kill criteria

Reconsider, redesign or stop the current approach if:

- users do not voluntarily start protection sessions
- users view the app as too invasive
- battery drain is unacceptable
- false alarms create alert fatigue
- Assistance Point status is frequently wrong
- businesses cannot follow a short procedure reliably
- response partner acknowledgement is unreliable
- professional response cost makes the model structurally unaffordable
- regulation makes the chosen operating model unviable
- there is no material benefit above simpler existing safety apps

## Core access principle

Core protection target: **R0 to the individual user**.

Core safety should include:

- Guardian
- Safety Countdown
- SOS
- Trusted Circle
- readiness preflight
- Private Risk basics
- Assistance Points
- Emergency Identification Pack
- basic community conditions
- emergency information

Critical protection features should not disappear because a user does not have money in a specific month.

## Funding model

The primary commercial thesis is B2B2C sponsorship.

Potential sponsors:

- employers
- universities
- banks
- insurers
- property groups
- residential estates
- retail precincts
- transport organisations
- municipalities where appropriate

Example working hypothesis:

```text
10,000 sponsored people × R12 per person per month = R120,000 monthly revenue
```

This is a commercial hypothesis, not a published price.

## Optional professional response

Professional response should be a separately validated variable cost.

Possible structures:

- user pays full optional response fee
- organisation sponsors full response fee
- blended subsidy
- response provider offers wholesale rate
- insurer or bank funds the response layer

Example only:

```text
Actual response economics: R45 / protected person
User contribution: R19
Organisation contribution: R26
```

Do not publish a response price until a real registered provider has confirmed coverage and economics.

## Consumer supporter tier

A small optional supporter or family convenience tier may exist later, but it must not lock critical safety behind payment.

Potential non critical paid conveniences:

- expanded family administration
- longer non incident history controlled by user
- convenience reports
- household management
- additional non critical personalisation

## Assistance Point economics

Basic Assistance Point participation should be free during network formation to maximise density.

Commercial products for organisations can include:

- multi site dashboard
- training administration
- verification audits
- operational SLA
- aggregate network analytics
- sponsorship
- API integration
- incident handoff reporting

Never sell individual passerby or movement data to an Assistance Point.

## Infrastructure cost principle

The phone should do work locally when safe and practical.

Avoid:

```text
GPS point → server → decision
GPS point → server → decision
GPS point → server → decision
```

Prefer:

```text
Phone GPS
  → local route comparison
  → local state
  → lightweight heartbeat
  → server durable state
```

This improves privacy, battery, latency and software economics.

## Early cloud planning targets

Historic working estimates used during concept planning suggested:

- pilot cloud floor can remain relatively low compared with human operations
- target software COGS under roughly R2 per active user early
- target software COGS under roughly R1 per active user at scale

These are engineering targets, not guaranteed production costs.

The biggest unknown cost is professional physical response, not GPS or database storage.

## Messaging costs

Routine messaging should prefer push notification.

SMS can be expensive at South African A2P rates and should be reserved for emergency or fallback use unless local pricing changes materially.

WhatsApp can support important Trusted Circle communication where platform policy and API capability allow it.

## Maps cost strategy

Do not call a routing API for every GPS update.

Recommended pattern:

1. calculate expected route
2. store route geometry on device
3. perform local route proximity checks
4. request recalculation only when necessary

This limits cost and external dependency.

## Response operating model

WITH. should not launch by building its own national responder fleet.

Preferred early model:

```text
WITH.
  → registered professional response partner
  → private security or medical escalation
  → police / EMS where required
```

The system should track response as states rather than assuming a dispatch API call equals physical help.

## Existing public emergency routes

The product should continue to surface existing South African emergency options where appropriate, including:

- 112 from a mobile phone for emergency assistance
- 10111 for SAPS emergency assistance
- GBV Command Centre support

These services remain independent of WITH.

## Recovery operations

After immediate physical safety, recovery can involve:

- medical support
- psychosocial support
- trauma counselling
- police reporting
- legal guidance
- protection order information
- shelter or safe accommodation referral
- missing person assistance
- evidence timeline export

WITH. should orchestrate access to existing qualified services rather than pretending to replace them.

## Missing person support

A missing person workflow can prepare an authorised assistance pack containing only appropriate information such as:

- recent photo
- full name
- description
- vehicle where applicable
- authorised emergency contacts
- last verified movement
- last known location
- active journey context

The pack remains encrypted and unavailable during normal use.

## Assistance Point operating procedure

Training should be short and operational.

Staff do not become responders.

Procedure:

1. acknowledge
2. move the person to a visible staffed area
3. do not confront a suspected offender
4. trigger professional response if required
5. remain with the person until handoff or confirmed resolution
6. record an outcome code

Repeated procedure failure can remove active verification.

## Community alerts

Public community messaging should remain broad and privacy preserving.

Example:

> Verified safety incident nearby. Avoid this block temporarily.

Do not expose:

- victim identity
- exact live incident pin to the public
- responder positions
- suspect identity without lawful basis
- information likely to enable stalking or vigilantism

## Commercial validation before scale

Before national expansion, confirm:

- repeatable acquisition channel
- onboarding completion
- Guardian activation
- Assistance Point recruitment
- response provider economics
- incident acknowledgement SLA
- support burden
- privacy expectations
- legal structure
- retention policy
- unit economics
- sponsor willingness to pay

## Stage gates

### Stage 0 complete when

- problem interviews show repeated need
- legal and regulatory operating assumptions are reviewed
- one professional response partner is willing to test integration
- Assistance Point procedure is accepted by pilot businesses

### Stage 1 complete when

- phone app completes protected sessions reliably
- Trusted Circle notifications work
- incident state survives phone loss
- one response partner acknowledges test incidents
- Assistance Points can maintain accurate status
- pilot users return voluntarily

### Stage 2 complete when

- offline reconciliation is proven
- false alarm rate is controlled
- stronger watch support is reliable
- response fallback paths exist
- operational tooling handles real pilot volume

### Stage 3 complete when

- network data improves routing or safety operations without exposing individuals
- sponsor reporting creates real B2B value
- regional expansion is operationally repeatable

## Moat

The moat is not the panic button.

Potential defensibility comes from the combination of:

- Guardian behaviour network
- Assistance Point distribution
- professional response integrations
- response performance history
- privacy and anti abuse infrastructure
- route and corridor intelligence
- institutional integrations
- operational trust

Hardware can be added later. It should not be mistaken for the core network.
