---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-mammals-fresh-chilled-or-frozen-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Edible offal of mammals, fresh, chilled or frozen, n.e.c.

## 1. Scope and Applicability

This rule covers post-mortem accepted edible offal of residual mammalian species, sorted, washed and, when needed, chilled or frozen before dispatch. Declare species, organ, market state and actual route by lot. Traceable upstream datasets must supply slaughter and livestock burdens.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-mammals-fresh-chilled-or-frozen-n-e-c |
| classification_refs | CPC 3.0: 21159 |
| covered_products | Fresh, chilled or frozen edible offal of camelids, other unlisted ruminants, equines, rabbits and hares, and other unlisted mammals |
| excluded_products | Cattle, buffalo, pig, sheep and goat offal; poultry, reptile and other non-mammal offal; inedible offal; salted, dried, smoked or otherwise prepared products |
| representative_product | Fresh camel liver, illustrative only; actual species and organ must be declared |
| production_route | Post-mortem edible acceptance, sorting, washing, any required chilling or freezing, and dispatch |
| market_state | Fresh, chilled or frozen; each dataset declares its actual state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted edible offal of a residual mammalian species |
| How much | 1 kg |
| How well | At the declared edible quality, organ and temperature state |
| How long or cycle | One dispatch lot at the plant gate; no service life |
| reference_flow_link | finished_offal |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Edible offal of mammals, fresh, chilled or frozen, n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; organ; fresh/chilled/frozen state; post-mortem acceptance; site and period; upstream dataset and its allocation method |

No exact public reference-product UUID is confirmed for this residual class. Keep product-flow identity unresolved in the data package until an exact public flow is verified.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Reference product is net accepted edible mass from the same lot; weigh under `cp_output` and normalize per 1 kg accepted dispatch. |
| `electricity_conversion` | electricity | Net calorific value | MJ | Convert metered kWh to selected-flow MJ using 1 kWh = 3.6 MJ; preserve raw kWh records. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | From receipt after post-mortem edible acceptance through product dispatch; include sorting, washing, cold conditioning and attributable waste. | cpc30-notes; fao-animal-food-2009 |
| upstream_link | incoming_offal | Link traceable slaughter and livestock upstream datasets to incoming offal and disclose their allocation method. |  |
| exclude_downstream | foreground | Retail, cooking and consumer use are outside this plant-gate boundary. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unwashed offal accepted as edible after post-mortem inspection, with its source slaughter operation |
| starting_condition_role | Traceable incoming-material gate |
| product_classification_scope | CPC 3.0 21159, qualified by actual species, organ and state |
| recursive_input_rule | Record purchased same-category offal as a separate input linked to an upstream dataset; do not count it again as this process output |
| upstream_dataset_requirement | Traceable slaughter and livestock datasets with disclosed offal co-product allocation |
| disclosure | Disclose receipt state, species, organ, exclusions and upstream data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| offal_conditioning | Post-acceptance offal conditioning | required | all covered lots | Sorting, washing and necessary cold conditioning | per 1 kg accepted dispatched offal |

### Process: Post-acceptance offal conditioning (`offal_conditioning`)

#### Inputs

##### Product flows

###### Unwashed edible mammalian offal, fresh, n.e.c. (`incoming_offal`)

Record the weighed incoming edible offal lot before washing or trimming, with species and organ identified.

- Selected flow: Unwashed edible mammalian offal, fresh, n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount under `cp_incoming`; normalize per 1 kg accepted dispatched offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming`
- Sources: `cpc30-notes`

###### Tap water (`tap_water`)

Meter tap water used for offal washing and equipment sanitation; separate other facility uses.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Collect actual amount under `cp_water`; normalize per 1 kg accepted dispatched offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `fao-animal-food-2009`

###### Electricity (`electricity`)

Record attributable electricity for handling and cold conditioning, with metered kWh converted to MJ.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual amount under `cp_electricity`; normalize per 1 kg accepted dispatched offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `fao-animal-food-2009`

#### Outputs

##### Product flows

###### Edible offal of mammals, fresh, chilled or frozen, n.e.c. (`finished_offal`)

Weigh accepted edible offal at the declared fresh, chilled, or frozen dispatch state.

- Selected flow: Edible offal of mammals, fresh, chilled or frozen, n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `cpc30-notes`; `fao-animal-food-2009`

##### Waste flows

###### Rejected edible mammalian offal from sorting (`rejected_offal`)

Weigh the rejected offal stream separately from accepted product and other slaughter waste.

- Selected flow: Rejected edible mammalian offal from sorting
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount under `cp_reject`; normalize per 1 kg accepted dispatched offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject`
- Sources: `fao-animal-food-2009`

###### Wastewater from cleaning (`cleaning_effluent`)

Measure cleaning effluent delivered to treatment, excluding uncontaminated runoff and sanitary sewage.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual amount under `cp_effluent`; normalize per 1 kg accepted dispatched offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `fao-animal-food-2009`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| separate_lots | foreground | Prefer separately metered lots and equipment; do not pool species, organs or market states without disclosure. |  |
| shared_utilities | foreground | For unmetered shared washing and cold-conditioning inputs, allocate by processed wet mass of accepted lots in the same period; disclose denominator and coverage. |  |
| upstream_allocation | upstream | Carry through verified slaughter-dataset offal co-product allocation and disclose it; do not invent slaughter allocation factors. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_incoming | offal_conditioning | incoming_offal | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | kg | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |
| cp_water | offal_conditioning | tap_water | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | m3 | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |
| cp_electricity | offal_conditioning | electricity | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | MJ | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |
| cp_output | offal_conditioning | finished_offal | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | kg | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |
| cp_reject | offal_conditioning | rejected_offal | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | kg | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |
| cp_effluent | offal_conditioning | cleaning_effluent | lot or meter record | lot; species; organ; state; meter or scale reading; timestamp | Use traceable scale, flow meter or electricity meter; reconcile lot and separate meter boundary | kg | each lot and monthly aggregation | all accepted lots in reporting period | same-site processing line | per 1 kg reference flow | calibration, lot mass reconciliation and original meter logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | q_ref = q_period / m_accepted; q_period is measured period total for each row; m_accepted is accepted net product mass (kg) in the same period from `cp_output`. | q_period; m_accepted; cp_output | q_ref | |
| convert_electricity | electricity | MJ = kWh × 3.6; retain original electricity meter values. | kWh; cp_electricity | MJ | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_traceability | finished_offal | Record species, organ and fresh/chilled/frozen state for each lot. | receipt and dispatch lot records |
| meter_consistency | all inventory rows | Reconcile period, site, product denominator and meter calibration. | raw meter and calibration records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_offal | Reject datasets for separately classified species or salted, dried or smoked states. | cpc30-notes |
| validate_mass | all inventory rows | Normalize every row to accepted net product mass in the same period; retain original numerator and denominator. |  |
| validate_waste | cleaning_effluent | Record cleaning effluent ducted to drains and its treatment destination separately from other water outputs. | fao-animal-food-2009 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground package for residual mammalian offal conditioning |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Use in process or lifecycle models when species, organ, state, site and upstream allocation match |
| excluded_use | No generic proxy for cattle, pigs, sheep, poultry or prepared offal |
| required_metadata | species; organ; state; site; period; product mass; upstream slaughter dataset and allocation; measurement methods |
| required_quality_disclosure | unresolved product and incoming-flow UUIDs; missing empirical ranges; shared-utility allocation |
| update_trigger | Review when exact public flow identity, foreground lot data or comparable empirical ranges become available |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc30-notes | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | product classification boundary |
| fao-animal-food-2009 | official_guidance | FAO, Animal food production, second edition (2009), Code of Hygienic Practice for Meat, https://www.fao.org/4/i1111e/i1111e.pdf | hygiene, drainage and cold-chain process |
