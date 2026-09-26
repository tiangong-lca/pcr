---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-crude
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Olive oil, crude

## 1. Scope and Applicability

This rule covers unrefined olive oil obtained directly from olive fruit by mechanical or other physical extraction at an olive mill. The foreground starts with received olives at the mill gate and ends with bulk oil after separation and any physical settling, centrifugation or filtration performed before transfer. Declare whether the output is edible virgin grade or lampante grade; this PCR does not assign a grade from inventory data. Refining, extraction of oil from pomace, blending with refined oil, retail packaging, orchard cultivation and downstream use are outside this foreground. These distinctions follow `cxs33-2015`, `ioc-trade-standard-2026` and `turkey-olive-lca-2023`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-crude |
| classification_refs | CPC 3.0 21671, Olive oil, crude (`unsd-cpc3-2025`) |
| covered_products | Bulk unrefined olive oil mechanically or physically extracted from olive fruit, including declared virgin and lampante grades before refining. |
| excluded_products | Refined olive oil; olive-pomace oil; blends with refined olive oil; solvent-extracted oil; packaged retail product. |
| representative_product | Bulk crude olive oil leaving the extraction mill before refining. |
| production_route | Fruit receipt, cleaning where applied, crushing, malaxation, phase separation and physical clarification where applied; declare press, two-phase or three-phase separation. |
| market_state | Unrefined bulk oil at mill gate; grade and filtration state declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Bulk unrefined olive oil from fruit extraction at the mill gate. |
| How much | 1 kg accepted crude olive oil. |
| How well | Grade, separation route, filtration state and water/impurity specification are declared from actual product records. |
| How long or cycle | One completed production campaign; inventory is normalized to its accepted oil output. |
| reference_flow_link | `crude_oil_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Olive oil, crude (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Fruit origin and campaign; mechanical extraction route; grade; filtration state; bulk transfer point; accepted net oil mass measurement. |

The reference product UUID remains unresolved. A dataset author must obtain an exact public crude-oil product flow before making a UUID-backed product-flow claim; a refined or pomace-oil flow is not a substitute.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `crude_oil_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or reconcile accepted net bulk oil mass at the declared mill-gate transfer point using `cp_oil_mass`; exclude container tare, rejected oil and oil sent for later refining from this reference output. |
| `campaign_normalization` | all inventory rows | Mass or row-specific energy/volume property | row-specific unit per 1 kg reference flow | Use the same campaign and accepted oil mass denominator for every included exchange; retain raw meter units and documented conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Olives physically received at the mill gate, with origin, mass, condition and campaign recorded. |
| starting_condition_role | Upstream agricultural input to the mill foreground. |
| product_classification_scope | Crude fruit-derived olive oil only; no refining, pomace-oil extraction or blended-oil production. |
| recursive_input_rule | If purchased crude olive oil enters the site, record it separately and do not count it as oil produced from the campaign's received olives. |
| upstream_dataset_requirement | Link the received olive input to an appropriate olive-fruit upstream dataset when a cradle-to-gate result is requested; disclose transport and orchard coverage separately. |
| disclosure | Declare fruit origin, separator route, washing, oil clarification, pomace disposition, wastewater handling and treatment boundaries. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate` | foreground_scope | Include fruit receipt, cleaning when used, crushing, malaxation, phase separation and physical oil clarification up to bulk transfer; exclude refining and pomace-oil extraction. | `cxs33-2015`, `turkey-olive-lca-2023` |
| `boundary_route_outputs` | route_outputs | Record pomace and segregated wastewater under the declared press, two-phase or three-phase route; absence of a separate wastewater stream requires route evidence. | `turkey-olive-lca-2023`, `argentina-water-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `olive_milling` | Integrated olive milling and physical extraction | required | All included mill routes; record actual separation technology and conditioning stages. | Foreground production from fruit receipt through bulk crude oil transfer. | per 1 kg reference flow |

### Process: Integrated olive milling and physical extraction (`olive_milling`)

#### Inputs

##### Product flows

###### Received olive fruit (`olives_input`)

Accepted olive fruit crosses the mill gate and is the physical feedstock for the recorded extraction campaign.
- Selected flow: Olives `b07470dd-3947-4e02-8058-11967225f927`
- Flow property / unit: Mass / kg
- Amount rule: Record net accepted fruit mass from weighbridge or intake records for the campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_olive_intake`

###### Mill process water (`mill_water`)

Supplied water crosses the mill boundary when washing or oil-separation operations use it.
- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Record supplied process water used for fruit washing, paste conditioning or oil separation; report zero only when meter and route records establish no use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`

###### Purchased mill electricity (`mill_electricity`)

Purchased alternating current crosses the site boundary to operate the integrated mill.
- Selected flow: Alternating current (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to the campaign, including cleaning, crushing, malaxation, separation and physical clarification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted crude olive oil (`crude_oil_output`)

Accepted unrefined oil leaves the mill in bulk form and defines the reference output.
- Selected flow: Olive oil, crude (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil_mass`

###### Pomace transferred as a product (`pomace_product`)

Residual olive paste leaves the mill as a documented material product for productive use.
- Selected flow: Olive pomace, olive mill solid residue `95c56835-2417-4ffa-8375-d0df138fd887`
- Flow property / unit: Mass / kg wet pomace
- Amount rule: Record wet pomace transferred for documented productive use; exclude the same material from `pomace_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pomace_transfer`

##### Waste flows

###### Pomace transferred as waste (`pomace_waste`)

Residual olive paste leaves the mill for waste management when it has no documented product destination.
- Selected flow: Olive pomace `d93812f9-63c9-4f5f-a3c2-adcd88482a5e`
- Flow property / unit: Mass / kg wet pomace
- Amount rule: Record wet pomace sent to waste management; exclude the same material from `pomace_product`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pomace_transfer`

###### Segregated untreated olive-mill wastewater (`mill_wastewater`)

Separately collected aqueous effluent leaves the mill before treatment where the declared route produces this stream.
- Selected flow: Olive mill wastewater, untreated (UUID unresolved)
- Flow property / unit: Volume / m3
- Amount rule: Measure separately collected fruit-washing or aqueous-separation effluent before treatment; record zero only if no segregated stream exists and route evidence supports it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_meter`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_disposition` | pomace_output | Distinguish pomace sold for productive use from pomace managed as waste using transfer evidence. Never count the same wet mass in both output rows. | `turkey-olive-lca-2023` |
| `allocation_method` | shared_milling_burdens | First subdivide separately metered operations. If oil and product pomace share inseparable burdens, declare the study's allocation method, mass basis and sensitivity; do not apply an unverified fixed fraction. | `turkey-olive-lca-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_olive_intake` | `olive_milling` | accepted olive input | weighbridge ticket | date; lot; origin; gross mass; tare; rejected mass | Reconcile incoming tickets and exclusions to the same campaign. | kg | each delivery | whole declared campaign | mill gate | per 1 kg reference flow | calibrated scale; ticket reconciliation |
| `cp_water_meter` | `olive_milling` | process water | meter or invoice | meter opening; closing; shared-use split; source | Record water mass from a calibrated mass meter, or convert metered volume using measured water density; document any allocation from shared supply. | kg | campaign | whole declared campaign | mill water supply | per 1 kg reference flow | meter calibration; supply record |
| `cp_electricity_meter` | `olive_milling` | purchased electricity | meter or invoice | kWh opening; closing; shared-use split; voltage | Read electricity meter and reconcile shared loads. | kWh | campaign | whole declared campaign | mill electricity supply | per 1 kg reference flow | meter record; invoice reconciliation |
| `cp_oil_mass` | `olive_milling` | accepted crude oil output | calibrated tank or scale | tank opening; closing; density if volume-based; tare; reject; grade; route | Weigh accepted net bulk oil or reconcile calibrated tank measurements and measured density at transfer. | kg | batch and campaign | whole declared campaign | mill-gate transfer | per 1 kg reference flow | calibration; transfer record; grade record |
| `cp_pomace_transfer` | `olive_milling` | pomace product or waste | transfer ticket | wet mass; recipient; purpose; route; moisture | Weigh wet pomace and classify each transfer by documented disposition. | kg | each transfer | whole declared campaign | mill gate | per 1 kg reference flow | tickets; recipient records; no double count |
| `cp_effluent_meter` | `olive_milling` | segregated untreated olive-mill effluent | meter or tank record | stream origin; opening; closing; route; treatment handoff | Meter or measure each segregated untreated stream before treatment handoff. | m3 | campaign | whole declared campaign | mill effluent outlet | per 1 kg reference flow | meter calibration; treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | all inventory rows | Divide each campaign exchange amount by the accepted crude olive oil mass of that same campaign; report per 1 kg reference flow. | campaign exchange; accepted oil mass; linked collection protocols | normalized exchange amount |  |
| `pomace_exclusivity` | `pomace_product`; `pomace_waste` | Classify each pomace transfer once by documented destination before aggregating the two output rows. | transfer tickets; recipient; disposition | separate product and waste wet masses | `turkey-olive-lca-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | campaign | Disclose separator type, washing, filtration, grade and pomace disposition; do not infer absent wastewater from a generic two-phase label. | equipment log; batch records; effluent records |
| `dq_balance` | campaign | Reconcile incoming fruit, oil, wet pomace and aqueous streams; disclose unmeasured moisture or losses without forcing an artificial closed mass balance. | weighbridge; tank; transfer and effluent records |
| `dq_temporal` | all inventory rows | Match numerator records to the same declared campaign and report missing meter or transfer coverage. | dated primary records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | Require accepted oil mass greater than zero, a disclosed unrefined state and an exact public crude-oil flow identity before UUID-backed publication. | `cxs33-2015`, `ioc-trade-standard-2026` |
| `validate_denominator` | inventory | Every included exchange uses the same accepted-oil campaign denominator; reconcile original units and prevent product/waste pomace double counting. | `turkey-olive-lca-2023` |
| `validate_route` | process_outputs | Confirm the declared separation route and observed water, pomace and effluent streams; unsupported zero effluent entries fail review. | `turkey-olive-lca-2023`, `argentina-water-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground mill-gate data package for unrefined fruit-derived olive oil. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and documented upstream links. |
| allowed_use | Model a declared mill route and grade with measured campaign inputs and outputs. |
| excluded_use | Do not represent refined oil, pomace oil, a retail pack, or universal olive-oil production intensity. |
| required_metadata | Site and period; fruit origin; extraction and clarification route; oil grade; accepted net oil mass; pomace disposition; water and wastewater treatment boundaries. |
| required_quality_disclosure | Meter and mass calibration; campaign completeness; missing flows; allocation method; unresolved UUIDs and range evidence. |
| update_trigger | Changed extraction route, product state, treatment boundary, data period or newly verified flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | UN Statistics Division, CPC Ver. 3.0 Structure, 30 Jun 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification title only; not methodology. |
| `cxs33-2015` | standard | Codex Alimentarius, Standard for Olive Oils and Olive-Pomace Oils, CXS 33-1981, revision 2015, https://www.fao.org/input/download/standards/88/CXS_033e_2015.pdf | Fruit-derived virgin-oil and pomace-oil identity. |
| `ioc-trade-standard-2026` | official_guidance | International Olive Council, Trade Standard Applying to Olive Oils and Olive Pomace Oils, COI/T.15/NC No. 3/Rev. 22 (June 2026), https://www.internationaloliveoil.org/wp-content/uploads/2026/09/TRADE-STANDARD-REV-22_EN.pdf | Virgin, lampante, refined and pomace-oil distinctions. |
| `turkey-olive-lca-2023` | literature | Agriculture 2023, 13(6), 1192, Life Cycle Assessment of Olive Oil Production in Turkey, a Territory with an Intensive Production Project, https://res.mdpi.com/d_attachment/agriculture/agriculture-13-01192/article_deploy/agriculture-13-01192.pdf | Turkey case: mill stages, two/three-phase routes, pomace and wastewater identity; no case intensity adopted. |
| `argentina-water-2024` | literature | Water 2024, 16(11), 1612, Wastewater and Grey Water Footprint Assessment of the Olive Oil Production Process in Northwest Argentina, https://res.mdpi.com/d_attachment/water/water-16-01612/article_deploy/water-16-01612.pdf | Counterexample to assuming two-phase milling eliminates all separate wastewater. |
