---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fish-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other fish, frozen

## 1. Scope and Applicability

This rule covers processor-gate frozen whole finfish in the residual category CPC 21219, including uneviscerated or eviscerated fish with or without heads. Declare species, wild or farmed origin, head and gut state, freezing method, glaze, packaging, and storage duration. The rule covers reception through freezing, optional gutting and glazing, packing, and on-site frozen storage. Upstream fishing or aquaculture is represented by the received raw-fish input and its linked upstream dataset. Transport after the processor gate, retail, cooking, and disposal are outside this foreground boundary. [un-cpc-3-2025; fao-cxs-36-1981; fao-cac-rcp-52-2012]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fish-frozen |
| classification_refs | CPC 3.0 21219, residual other fish, frozen [un-cpc-3-2025] |
| covered_products | Frozen whole finfish not assigned to CPC 21211–21216; uneviscerated or eviscerated, with or without head |
| excluded_products | Live, fresh or chilled fish; frozen fillets, fish meat, livers and roes; named frozen-fish subclasses 21211–21216 [un-cpc-3-2025] |
| representative_product | Frozen whole residual-category finfish at processor gate, net fish mass excluding glaze and packaging |
| production_route | Raw whole-fish reception, optional gutting, quick freezing, optional glazing, packing and frozen storage |
| market_state | Frozen whole fish; species, origin, presentation and glaze declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen whole finfish in the residual other-fish category at processor gate |
| How much | 1 kg net fish mass, excluding glaze and packaging |
| How well | Product frozen and held at or colder than −18 °C at the thermal centre after stabilization for quick-frozen product; record the actual standard applied [fao-cxs-36-1981] |
| How long or cycle | One production lot through processor-gate release; declare on-site frozen storage duration |
| reference_flow_link | frozen_other_fish |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other fish, frozen |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; wild or farmed origin; whole/head/gut presentation; frozen temperature and method; glaze present and mass; packaging; on-site frozen storage duration; geographic and technological scope |

The reference quantity is measured net fish mass, excluding any protective ice glaze and packaging. Weigh a representative deglazed lot or use traceable net-content records reconciled to the production lot. [fao-cxs-36-1981; fao-cac-rcp-52-2012]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | frozen_other_fish | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net fish mass, excluding glaze and packaging, using `cp_output_mass`; this is the 1 kg denominator. |
| input_normalization | all inventory rows | Row-specific property | row-specific | Record each exchange per production lot and divide by accepted net fish mass in kg using `normalize_lot`; preserve its original numerator unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received raw whole fish at processor intake; record species, source, fresh/chilled/frozen condition and measured mass |
| starting_condition_role | Foreground starting input with upstream fish-production burden linked |
| product_classification_scope | Residual frozen whole fish CPC 21219; upstream raw fish retains its own origin and state classification |
| recursive_input_rule | If already frozen fish is reprocessed, disclose its incoming state and link its upstream product dataset once; do not model it again as newly landed raw fish. |
| upstream_dataset_requirement | Link representative wild-catch or aquaculture and inbound transport datasets for received fish; disclose unavailable links. |
| disclosure | Report species mix, source route, head/gut state, glaze, packaging, freezer technology, storage duration and any excluded exchanges. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground scope | Include reception, optional gutting, freezing, optional glazing, packing and on-site frozen storage until product release. | fao-cac-rcp-52-2012 |
| boundary_upstream | raw_whole_fish | Link the actual received-fish upstream route and avoid double counting upstream production. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fish_freezing | Whole-fish reception, freezing, packing and storage | required | All covered lots | Foreground production | Per 1 kg accepted net frozen fish mass |

### Process: Whole-fish reception, freezing, packing and storage (`fish_freezing`)

#### Inputs

##### Product flows

###### Received raw whole fish (`raw_whole_fish`)

Received raw whole fish crosses the foreground boundary as one product input.

- Selected flow: Fresh or chilled whole fish in the residual species scope
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted fish entering the process per production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_fish`
- Sources: `fao-cac-rcp-52-2012`

###### Tap water for optional glazing (`glazing_tap_water`)

Tap water for optional glazing crosses the foreground boundary as one product input. Include only when glazing with tap water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measure potable tap water supplied for glaze per lot; zero only when glazing is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glazing_water`
- Sources: `fao-cxs-36-1981`

###### Electricity for freezing and on-site storage (`freezing_electricity`)

Electricity for freezing and on-site storage crosses the foreground boundary as one product input.

- Selected flow: Alternating current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measure attributable electricity for freezing, packing and frozen storage over the lot storage interval.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `fao-cac-rcp-52-2012`

###### Polyethylene packaging film (`polyethylene_film`)

Polyethylene packaging film crosses the foreground boundary as one product input. Include only when polyethylene film route.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Weigh film consumed in packaging the accepted lot; use another atomic row for a different resin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_film`
- Sources: `fao-cxs-36-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen other whole fish (`frozen_other_fish`)

Accepted frozen whole-fish output is the reference product at processor gate. Exclude glaze and packaging from its net mass.

- Selected flow: Other fish, frozen
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `fao-cxs-36-1981`

##### Waste flows

###### Fish viscera from optional gutting (`fish_viscera`)

Record segregated fish viscera removed during gutting as one waste output; this row applies only when gutting occurs.

- Selected flow: Fish viscera
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated viscera per production lot; zero only if no gutting occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_viscera`
- Sources: `fao-cac-rcp-52-2012`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | jointly operated lines | First subdivide metered freezing and storage activities by line or lot where records permit. | fao-cac-rcp-52-2012 |
| allocation_shared | shared fish-processing inputs | If subdivision is unavailable, quantify a causal allocation using metered equipment time or another measured physical driver, disclose the driver and co-products, and seek review if no defensible driver exists. | |
| allocation_byproduct | fish_viscera | Record viscera as waste when disposed; if sold as a product, report its mass, destination and a separately justified allocation decision instead of silently assigning zero burden. | fao-cac-rcp-52-2012 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_raw_fish | fish_freezing | raw_whole_fish | receiving and scale records | lot; species; origin; raw mass; condition | Calibrated scale or reconciled intake records | kg | each lot | production campaign | processor gate | per 1 kg reference flow | scale calibration and intake tickets |
| cp_glazing_water | fish_freezing | glazing_tap_water | water meter and batch records | lot; potable-water mass; glazing status | Meter or weigh supplied tap water | kg | each glazing lot | production campaign | processor gate | per 1 kg reference flow | meter and potable-water records |
| cp_electricity | fish_freezing | freezing_electricity | electricity meter and freezer log | lot; meter readings; freezer run time; storage duration | Meter electricity and allocate shared draw by recorded operating time | MJ | each lot or campaign | reception to release | processor gate | per 1 kg reference flow | meter calibration and log |
| cp_film | fish_freezing | polyethylene_film | packaging issue records | lot; film resin; issued mass; returned mass | Weigh net polyethylene film issued to lot | kg | each lot | production campaign | processor gate | per 1 kg reference flow | resin specification and stock reconciliation |
| cp_output_mass | fish_freezing | frozen_other_fish | deglazed scale and release records | lot; species; presentation; gross mass; glaze mass; net fish mass | Weigh deglazed accepted fish or reconcile traceable net-content records | kg | each lot | release at processor gate | processor gate | per 1 kg reference flow | calibrated scale, deglazing and release records |
| cp_viscera | fish_freezing | fish_viscera | segregated waste scale records | lot; gutting status; viscera mass; destination | Weigh segregated viscera | kg | each gutted lot | production campaign | processor gate | per 1 kg reference flow | waste tickets and mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | q_ref = q_lot / m_net, where m_net is accepted net fish mass excluding glaze and packaging; retain each row's numerator unit. | q_lot; m_net; cp_output_mass | q_ref per 1 kg reference flow | fao-cxs-36-1981 |
| reconcile_mass | raw_whole_fish; frozen_other_fish; fish_viscera | Reconcile measured incoming fish with accepted net fish, viscera and documented process losses; investigate unexplained difference rather than assume zero. | cp_raw_fish; cp_output_mass; cp_viscera | mass-balance check | fao-cac-rcp-52-2012 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all lots | Record species, origin, head/gut state, packaging resin and product state. | intake, packaging and release records |
| dq_net_mass | frozen_other_fish | Separate glaze and packaging from fish net mass. | deglazing, scale and label records [fao-cxs-36-1981] |
| dq_cold_chain | frozen_other_fish | Retain freezing thermal-centre and cold-store temperature records with storage duration. | calibrated thermometer and freezer logs [fao-cac-rcp-52-2012] |
| dq_completeness | all inventory rows | Reconcile meters and material tickets to the same lot and report missing coverage. | lot reconciliation records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Reject a dataset that substitutes fillets, minced fish, liver, roe or a named frozen-fish subclass for residual whole fish. | un-cpc-3-2025 |
| validate_net_mass | frozen_other_fish | Check that reference mass is accepted fish mass excluding glaze and packaging and that all rows use the same 1 kg denominator. | fao-cxs-36-1981 |
| validate_routes | conditional rows | Require glazing-water records when glazed, viscera records when gutted, and a documented packaging film material when used. | fao-cac-rcp-52-2012 |
| validate_temperature | frozen_other_fish | For a quick-frozen claim, verify thermal-centre temperature at or colder than −18 °C after stabilization and disclose storage conditions. | fao-cxs-36-1981 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Processor-gate foreground data package for other frozen whole fish |
| downstream_use | Publish product flow, process and lifecyclemodel projections after dataset checks |
| allowed_use | Product-specific frozen whole-fish modelling with declared species, origin and technology |
| excluded_use | Generic fillets, minced fish, fish liver/roe or named frozen-fish subclass modelling |
| required_metadata | Species mix; source route; presentation; net mass; freezing method and temperature; glaze; packaging; storage duration; geography |
| required_quality_disclosure | Meter coverage, allocation, mass balance, missing flow UUIDs, missing ranges and upstream data links |
| update_trigger | Change in species mix, source route, freezing technology, packaging or storage regime |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | CPC Ver. 3.0 Explanatory Notes, 30 June 2025, section 21219; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product boundary and exclusions |
| fao-cxs-36-1981 | standard | Codex Standard for Quick Frozen Finfish, Uneviscerated and Eviscerated, CXS 36-1981, revised 1995, amended 2013; https://www.fao.org/input/download/standards/103/CXS_036e.pdf | Whole-fish state, freezing, net mass and glaze |
| fao-cac-rcp-52-2012 | official_guidance | Code of Practice for Fish and Fishery Products, second edition, 2012, sections 8.1 and 8.3; https://www.fao.org/4/i2382e/i2382e.pdf | Reception, freezing, glazing and cold-storage records |
