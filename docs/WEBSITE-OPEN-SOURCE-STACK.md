# WITH. Website Open Source Stack

This repository owns the public website, brand system, concept storytelling and future network visualisations.

The website must explain the idea clearly without implying that live coverage or operational Assistance Points already exist.

## Recommended projects

### MapLibre GL JS

Repository: https://github.com/maplibre/maplibre-gl-js

Use for:
- illustrative Assistance Point maps
- simulated Johannesburg pilot areas
- conceptual journey and corridor maps
- future live map layers when real data exists

Rule: until operational data exists, every map must be labelled as a concept, illustration, pilot scenario or simulated coverage.

### Turf.js

Repository: https://github.com/Turfjs/turf

Use for:
- coverage buffers
- walking radius calculations
- illustrative Assistance Point overlap
- route and corridor geometry
- future spatial analysis

Turf provides the geospatial calculation layer. MapLibre provides the map rendering layer.

### Apache ECharts

Repository: https://github.com/apache/echarts

Use for:
- how coverage could grow
- network adoption stories
- partner participation diagrams
- pilot metrics
- system performance charts once real data exists

Concept charts must not use fabricated real-world metrics. Use clearly labelled illustrative values when demonstrating a model.

### Mermaid

Repository: https://github.com/mermaid-js/mermaid

Use for:
- protection loop diagrams
- failure and fallback flows
- architecture diagrams
- documentation diagrams
- simple system explainers

Mermaid is preferred for diagrams that should stay version-controlled as text.

### XYFlow / React Flow

Repository: https://github.com/xyflow/xyflow

Use selectively for:
- interactive network explainers
- user → Trusted Circle → Assistance Point → response relationships
- partner ecosystem visualisations
- interactive no-single-point-of-failure stories

Do not use it simply because a diagram can be interactive. Static clarity is better than unnecessary interaction.

## Website visual priority

Build these first:

1. Illustrative network map
2. How the network grows
3. Protection loop
4. One failure should not end the chain
5. Assistance Point concept

See `docs/INFOGRAPHIC-CONCEPT-DIRECTION.md` for the full creative direction.

## What stays out of the website repo

The website repo should not own:
- React Native app architecture
- native device permissions
- mobile background location implementation
- app state persistence
- native notification handling
- mobile E2E test infrastructure

Those belong to `Phuturedigital/withhelp-app`.

## Shared visual contract

The canonical machine-readable brand contract lives at:

`shared/with-brand-contract.json`

The mobile repository mirrors this file. The website repository is the source of truth because it contains the master brand guide and public brand system.
