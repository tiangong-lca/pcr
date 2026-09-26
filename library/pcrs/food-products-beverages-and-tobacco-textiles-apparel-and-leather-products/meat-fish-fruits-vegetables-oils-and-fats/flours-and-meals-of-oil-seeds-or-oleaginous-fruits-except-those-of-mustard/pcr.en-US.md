---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-and-meals-of-oil-seeds-or-oleaginous-fruits-except-those-of-mustard
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flours and meals of oil seeds or oleaginous fruits, except those of mustard

## 1. Scope and Applicability

This candidate rule covers the production of dry, milled flour or coarse meal from a declared non-mustard oilseed or oleaginous fruit at the factory gate. The documented representative is soybean flour, made either from whole dehulled beans or from edible defatted soybean flakes. The product must be deliberately prepared and sold as flour or meal. Oil-cake and extraction residues sold as such, mustard flour, isolated protein, formulated feed and unrelated vegetable flour are excluded. CPC 3.0 places oil-cake residues in 21910 and this flour/meal category in 21920 (`unsd-cpc-3-2025`). The Iowa State University manufacturing report distinguishes full-fat flour from dehulled beans and flour milled from defatted white flakes (`isu-soy-processing-2018`).

Each dataset declares botanical species, flour versus coarse meal, full-fat versus defatted state, heat treatment, milling specification and accepted moisture. The six concrete inventory rows below describe the soybean representative. Another species requires a reviewed species-specific row extension with its own atomic flow identities and measured records before this candidate method is used for that variant. No fixed yield or energy benchmark is inferred from the report's process description.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-and-meals-of-oil-seeds-or-oleaginous-fruits-except-those-of-mustard |
| classification_refs | CPC 3.0 21920 (`unsd-cpc-3-2025`) |
| covered_products | Dry flour and coarse meal intentionally milled from non-mustard oilseeds or oleaginous fruits; soybean is the documented representative. |
| excluded_products | Mustard flour; oil-cake and solid oil-extraction residues marketed as residues; protein concentrate or isolate; blended feed; other vegetable flours. |
| representative_product | Soybean flour, full-fat or prepared from edible defatted flakes. |
| production_route | Whole-bean dehulling and milling, or receipt of prepared edible defatted flakes and milling; record conditioning and drying only where actually performed (`isu-soy-processing-2018`). |
| market_state | Dry, market-ready bulk flour or meal at the producer gate, before downstream use or transport. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry market-ready flour or meal from a declared non-mustard oilseed; soybean flour is the representative foreground product. |
| How much | 1 kg accepted finished product. |
| How well | Declare species, fat state, heat-treatment state, grind specification, moisture and food/feed grade for the actual lot. |
| How long or cycle | One production campaign up to factory-gate acceptance. |
| reference_flow_link | `finished_soy_flour` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Soybean flour |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; flour or coarse meal; full-fat or defatted state; heat treatment; grind specification; accepted moisture; product grade; facility and campaign |

The reference product UUID is unresolved because no directly reviewed candidate unambiguously identifies the required flour state and category. The mass property and unit group are public state-code-100 identities observed with the flow candidates; they do not resolve the product flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_soy_flour` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted, net finished flour or meal without transport packaging on a calibrated scale; use its campaign mass as the denominator for all reported exchanges. |
| `energy_basis` | `purchased_electricity`, `purchased_steam_heat` | Energy | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; do not mix purchased steam heat with on-site fuel combustion or count the same heat twice. |

## 5. System Boundary

Cradle-to-factory-gate reporting includes upstream supply of purchased soybean material, electricity and delivered steam heat and the on-site dehulling, conditioning, drying and milling that actually occur. The documented foreground starts at the incoming whole soybeans or prepared defatted flakes. If the latter are purchased, their upstream oil-extraction burdens belong to the supplier dataset and must not be silently assigned to the flour mill. Packaging, distribution, use and end-of-life are outside this bulk-product boundary. The process route and all excluded stages are disclosed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Incoming whole soybeans for the full-fat route, or edible defatted soybean flakes for the defatted route; record supplier, state and origin. |
| starting_condition_role | Purchased product input to the foreground flour-preparation process. |
| product_classification_scope | CPC 3.0 21920 finished flour/meal; separately purchased inputs retain their own product identities. |
| recursive_input_rule | If finished flour of this same category is remilled, record its purchased mass as a distinct input with a nonrecursive supplier dataset and disclose the remilling share. |
| upstream_dataset_requirement | Supply datasets must cover the declared incoming material state and purchased utilities without double counting on-site operations. |
| disclosure | Publish route, starting material, geographic supply context, facility operations, allocation and any excluded stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_state` | finished product | Include only intentionally prepared flour or coarse meal of a non-mustard oilseed; exclude oil-cake residues and mustard flour. | `unsd-cpc-3-2025` |
| `boundary_route` | incoming material and foreground process | Declare whether whole-bean preparation or prepared defatted-flake milling applies; include only operations actually performed at the site and link the purchased input to its upstream dataset. | `isu-soy-processing-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `soy_flour_preparation` | Soybean flour or coarse-meal preparation | required | Every documented soybean representative dataset; route-specific exchanges apply as stated in their cards. | Foreground dehulling where performed, conditioning, drying and milling. | 1 kg accepted finished soybean flour or meal. |

### Process: Soybean flour or coarse-meal preparation (`soy_flour_preparation`)

#### Inputs

##### Product flows

###### Whole soybean input (`whole_soybeans_input`)

Record whole soybeans only when the facility makes full-fat flour or meal from whole beans. The incoming mass is weighed before any on-site dehulling or conditioning.

- Selected flow: Soybean (whole, non-mustard oilseed; UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed incoming soybean mass divided by accepted finished flour mass for the same campaign; applicable only to the whole-bean route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_mass`
- Sources: `isu-soy-processing-2018`

###### Defatted soybean flakes input (`defatted_soy_flakes_input`)

Record purchased edible defatted soybean flakes only for the defatted-flour route. The supplier product is not the finished flour and must carry its own upstream dataset.

- Selected flow: Defatted soybean flakes (edible intermediate; UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed incoming defatted-flake mass divided by accepted finished flour mass for the same campaign; applicable only to the defatted-flake route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_mass`
- Sources: `isu-soy-processing-2018`

###### Purchased electricity (`purchased_electricity`)

Record metered electricity used for the documented conditioning, drying and milling process; exclude separately metered upstream oil extraction.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Purchased electricity attributable to the campaign, converted from kWh to MJ and divided by accepted finished flour mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Purchased steam heat (`purchased_steam_heat`)

Record delivered steam heat only where a purchased steam supply is used for conditioning or drying. If heat is generated on-site, replace this exchange with individually identified fuel and emission rows in a reviewed extension.

- Selected flow: Steam heat (UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam heat divided by accepted finished flour mass; applicable only when purchased steam heat crosses the facility boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_heat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted soybean flour or coarse meal (`finished_soy_flour`)

Record only accepted dry finished product at the factory gate. This row is the representative reference product; no database flow UUID is asserted.

- Selected flow: Soybean flour
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `isu-soy-processing-2018`

##### Waste flows

###### Separated soybean hulls (`separated_soy_hulls`)

Record hulls removed during on-site dehulling as a distinct outgoing solid stream. Declare whether they are sold as a co-product or managed as waste; do not relabel them as oil-cake.

- Selected flow: Soybean hulls (separated solid; UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weighed outgoing soybean-hull mass divided by accepted finished flour mass; applicable only when dehulling occurs within this facility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull_mass`
- Sources: `isu-soy-processing-2018`

##### Elementary flows

## 7. Allocation and Co-product Handling

Separate measured dehulling, heat conditioning and milling operations where records permit. If marketable hulls leave the process, report their dry mass and destination and disclose the selected allocation principle and the value or physical relationship used. Do not allocate purchased-defatted-flake upstream extraction burdens again in this foreground process. No fixed economic or mass allocation factor is specified without foreground co-product evidence.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | foreground operations | Prefer subdivision using independently metered or weighed operations before allocating shared burdens. |  |
| `allocation_hulls` | marketable soybean hulls | If hulls are a saleable co-product, disclose the allocation method and measured product quantities; if disposed, treat them as waste and include the actual treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_mass` | `soy_flour_preparation` | `whole_soybeans_input` | receiving scale and lot record | lot ID; incoming net mass; moisture; species | Calibrated receiving scale, excluding vehicle and packaging tare. | kg | Each lot | Same production campaign as accepted output | Actual facility | per 1 kg reference flow | Scale calibration and lot reconciliation |
| `cp_flake_mass` | `soy_flour_preparation` | `defatted_soy_flakes_input` | receiving scale and supplier record | supplier; lot ID; incoming net mass; fat state | Calibrated receiving scale and supplier specification. | kg | Each lot | Same production campaign as accepted output | Actual facility | per 1 kg reference flow | Scale calibration and supplier specification |
| `cp_electricity` | `soy_flour_preparation` | `purchased_electricity` | meter reading or invoice | meter ID; start and end kWh; allocation share | Read calibrated meter or reconcile invoice to the documented process. | MJ | Each campaign | Same campaign as accepted output | Actual facility | per 1 kg reference flow | Meter calibration or invoice reconciliation |
| `cp_steam_heat` | `soy_flour_preparation` | `purchased_steam_heat` | delivered heat meter | meter ID; delivered heat MJ; allocation share | Read calibrated steam heat meter at the facility boundary. | MJ | Each campaign with purchased steam | Same campaign as accepted output | Actual facility | per 1 kg reference flow | Meter certificate and heat balance |
| `cp_product_mass` | `soy_flour_preparation` | `finished_soy_flour` | accepted product scale and quality record | lot ID; accepted net mass; moisture; grind specification | Weigh accepted unpackaged product on a calibrated scale. | kg | Each accepted lot | Same production campaign as inputs | Actual facility | per 1 kg reference flow | Scale calibration and acceptance record |
| `cp_hull_mass` | `soy_flour_preparation` | `separated_soy_hulls` | outgoing scale and destination record | hull mass; destination; sale or waste state | Weigh separated hulls before dispatch or treatment. | kg | Each hull removal | Same campaign as accepted output | Actual facility | per 1 kg reference flow | Scale calibration and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_campaign` | all inventory rows | Use one reconciled campaign and a single accepted-output denominator; report missing meter or lot coverage. | Batch ledger, meter readings and scale records |
| `dq_route` | product and input rows | Match the declared whole-bean or defatted-flake route and retain supplier product-state evidence. | Supplier specification and process log |
| `dq_mass` | mass-bearing rows | Reconcile incoming, accepted product, hull and documented moisture or other losses; investigate unexplained imbalance. | Weighing records and mass-balance worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Reject a dataset that omits species, flour/meal and fat-state qualifiers or uses oil-cake or mustard material as the reference product. | `unsd-cpc-3-2025` |
| `validate_denominator` | all inventory rows | Confirm that every reported exchange is normalized to the same accepted finished-product kg and that the reference output is 1 kg. |  |
| `validate_route` | whole soybeans and defatted flakes | Require the declared route and associated purchased input state; do not count the same upstream oil extraction twice. | `isu-soy-processing-2018` |
| `validate_evidence` | unresolved flow and range identities | Flag unconfirmed Tiangong flow UUIDs and missing independent empirical ranges for review before publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product dataset for dry oilseed flour or meal production. |
| downstream_use | Process and lifecyclemodel projections of the foreground data package. |
| allowed_use | A qualified soybean flour route with measured campaign inputs, output and flow identities. |
| excluded_use | Proxy use for mustard flour, oil-cake residues, other species without a reviewed extension, or unmeasured utility demand. |
| required_metadata | Species, incoming material state, route, fat state, heat treatment, grind specification, moisture, product grade, geography, year and co-product treatment. |
| required_quality_disclosure | Meter and scale coverage, missing-flow identities, unmeasured losses, range-evidence gaps and allocation decision. |
| update_trigger | Change in incoming material, milling or heating technology, supplier state, product grade or validated flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity and adjacent oil-cake distinction. |
| `isu-soy-processing-2018` | literature | Stanford and Keener, Iowa State University, Cedar Rapids Food and Bioprocessors Manufacturing Report, 2018, pp. 38 and 40, https://www.cals.iastate.edu/files/inline-files/2018-ISU-Report.pdf | Full-fat and defatted soybean flour process routes and flour, meal and hull product distinctions; no empirical inventory range inferred. |
