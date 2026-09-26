---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-carpets-and-textile-floor-coverings-including-those-of-felt
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other carpets and textile floor coverings (including those of felt)

## 1. Scope and Applicability

This rule covers a finished textile floor covering in the residual category, represented here by needle-felt flooring made from polyester staple fibre. Declare the actual fibre, bonding and backing configuration. The verified CPC headings place knotted, woven, and tufted coverings in separate categories; those products are excluded. Felt supplied as unfinished textile material, plastic floor covering, installation, use and end-of-life are outside this factory-gate product rule. The needle-felt process and optional backing are supported by `ec-jrc-textiles-bref-2023`; the classification boundary is supported by `unsd-cpc3-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.other-carpets-and-textile-floor-coverings-including-those-of-felt |
| classification_refs | CPC 3.0 27290, residual finished carpets and textile floor coverings including felt; `unsd-cpc3-2025` |
| covered_products | Finished needle-felt textile floor coverings and other residual finished textile floor coverings only when their route is separately declared. |
| excluded_products | Knotted CPC 27210, woven CPC 27220, tufted CPC 27230 floor coverings; unfinished felt; plastic-only flooring; installation and use. |
| representative_product | Accepted, cut-to-sale polyester needle-felt floor covering. |
| production_route | Purchased polyester staple fibre; web formation and needle punching; conditional binder or textile backing; cutting and inspection. |
| market_state | Dry, finished, accepted floor covering at the factory gate, without transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished textile floor covering providing a usable textile walking surface. |
| How much | 1 kg of accepted finished product. |
| How well | Declared fibre composition, backing, coating, dimensions and acceptance specification. |
| How long or cycle | One accepted production lot at the factory gate; no service lifetime is assumed. |
| reference_flow_link | `finished_covering` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished polyester needle-felt textile floor covering; Tiangong UUID unresolved. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Fibre composition; needled structure; backing and binder status; dry or conditioned mass state; lot and site; cut size or roll form; declared gate. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_covering` | Mass | kg | Weigh accepted dry finished floor covering without transport packaging using `cp_finished_mass`; normalize all applicable foreground exchanges to the accepted finished mass in the same lot. |
| `electricity_energy` | `needle_electricity` | Net calorific value | MJ | Preserve the selected Tiangong energy property. Convert metered kWh to MJ using 1 kWh = 3.6 MJ and retain the meter reading and conversion. |
| `binder_wet_mass` | `sb_latex_binder` | Mass | kg | Record purchased aqueous dispersion wet mass and separately disclose measured or supplier-stated solids fraction; do not substitute dry polymer mass for wet input mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased polyester staple fibre and any purchased binder or backing enter the declared factory operations. |
| starting_condition_role | Foreground gate for web forming, needling, applicable bonding/backing, cutting and inspection. |
| product_classification_scope | Finished residual textile floor covering; distinguish CPC 27290 from CPC 27210, 27220 and 27230. |
| recursive_input_rule | If finished floor covering of the same category is bought as an input, disclose its mass and supplier dataset separately; do not reclassify it as virgin fibre. |
| upstream_dataset_requirement | Link upstream datasets for purchased fibre, binder, backing and electricity; report their geography and technology separately from foreground operations. |
| disclosure | Declare included operations, site, lot dates, fibre composition, backing/binder state, product net mass and omitted stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all processes | Include web forming, needling, applicable bonding/backing and cutting through accepted dry factory-gate output; disclose any omitted operation. | `ec-jrc-textiles-bref-2023` |
| `boundary_category` | reference product | Exclude knotted, woven and tufted finished floor coverings from this residual product identity. | `unsd-cpc3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `needle_form` | Web formation and needle punching | required | Every represented needle-felt lot. | Foreground textile formation. | per 1 kg accepted finished floor covering |
| `back_finish` | Binder and textile backing | conditional | Only when an aqueous styrene-butadiene binder or polyester nonwoven backing is actually applied; record each exchange separately. | Foreground reinforcement. | per 1 kg accepted finished floor covering |
| `cut_accept` | Cutting and acceptance | required | Every represented lot. | Foreground finishing and reference output. | per 1 kg accepted finished floor covering |

Internal web transfers between these operations are not separately counted as purchased inputs or final outputs. Other fibre, binder, backing and waste compositions require their own atomic rows and identity review before a dataset claims coverage.

### Process: Web formation and needle punching (`needle_form`)

#### Inputs

##### Product flows

###### Polyester staple fibre feed (`polyester_fibre`)

Include purchased uncarded polyester short fibre fed to the web and needle line; record supplier state and lot mass.

- Selected flow: Polyester short fiber `03377e13-45a0-4774-9cc8-37c8c60523f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect net fibre issued to the lot and divide by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre`
- Sources: `ec-jrc-textiles-bref-2023`

###### Purchased electricity for needle line (`needle_electricity`)

Include electricity delivered to web formation and needle punching; retain the site's metered supply mix as metadata.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect attributable metered kWh, multiply by 3.6 MJ/kWh, and divide by accepted finished product mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Binder and textile backing (`back_finish`)

#### Inputs

##### Product flows

###### Aqueous styrene-butadiene latex binder (`sb_latex_binder`)

Include only if the declared route applies this chemically specified wet binder; do not infer it from a generic coating label.

- Selected flow: Aqueous styrene-butadiene latex dispersion; Tiangong UUID unresolved.
- Flow property / unit: Mass / kg wet dispersion
- Amount rule: Collect weighed wet dispersion issued to the lot, divide by accepted finished product mass, and report solids fraction separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_binder`
- Sources: `ec-jrc-textiles-bref-2023`

###### Polyester nonwoven textile backing (`polyester_backing`)

Include only when this specific backing is attached to the needle-felt floor covering.

- Selected flow: Polyester nonwoven textile backing; Tiangong UUID unresolved.
- Flow property / unit: Mass / kg
- Amount rule: Collect weighed backing issued to the lot and divide by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing`
- Sources: `ec-jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cutting and acceptance (`cut_accept`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished needle-felt floor covering (`finished_covering`)

Record only accepted dry finished floor covering leaving the declared factory gate.

- Selected flow: Finished polyester needle-felt textile floor covering; Tiangong UUID unresolved.
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_mass`
- Sources: `unsd-cpc3-2025`

##### Waste flows

###### Clean segregated PET trim (`clean_pet_trim`)

Include only clean, uncoated, mono-material polyester cutting trim; mixed or binder-coated trim needs a different reviewed waste identity.

- Selected flow: Waste Polyethylene terephthalate `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect weighed clean PET trim from the lot and divide by accepted finished product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trim`
- Sources: `ec-jrc-textiles-bref-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_meter` | shared utilities | Prefer separately metered electricity for the needle-felt line; if a shared meter is used, disclose the physical allocation driver and supporting production records. | `ec-jrc-textiles-bref-2023` |
| `allocation_review` | co-products | Record any marketable co-product separately. If it shares indivisible inputs and no measured physical driver is justified, flag the lot for methodology review instead of inventing a fixed allocation fraction. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finished_mass` | `cut_accept` | `finished_covering` | calibrated scale and acceptance log | lot id; fibre and backing configuration; accepted dry net mass; rejected mass | Weigh accepted finished floor covering on a calibrated scale after conditioning; exclude transport packaging and reconcile accepted rolls or pieces. | kg | each lot | production period | declared factory | accepted dry net mass per lot; all rows divided by this mass | calibration certificate; acceptance log |
| `cp_fibre` | `needle_form` | `polyester_fibre` | issue and return records | lot id; fibre mass issued; unused mass returned | Reconcile supplier delivery, issue and return weights for the same lot. | kg | each lot | production period | declared factory | per 1 kg reference flow | weigh tickets; stock reconciliation |
| `cp_electricity` | `needle_form` | `needle_electricity` | electricity meter log | meter id; start and end kWh; line allocation driver; lot id | Read calibrated meter or documented shared-meter allocation over the matching lot interval. | kWh | each lot | production period | declared factory | per 1 kg reference flow | meter logs; allocation worksheet |
| `cp_binder` | `back_finish` | `sb_latex_binder` | batch issue record | lot id; wet binder mass; solids fraction; returns | Weigh net aqueous dispersion issued; obtain solids fraction from batch test or supplier specification. | kg | each backed lot | production period | declared factory | per 1 kg reference flow | batch sheet; supplier or test record |
| `cp_backing` | `back_finish` | `polyester_backing` | backing issue record | lot id; backing mass issued; returns | Weigh net polyester nonwoven backing issued to the lot. | kg | each backed lot | production period | declared factory | per 1 kg reference flow | weigh tickets; batch sheet |
| `cp_trim` | `cut_accept` | `clean_pet_trim` | segregated trim log | lot id; clean PET trim mass; contamination check | Weigh clean mono-material PET trim separately from coated or mixed trim. | kg | each lot | production period | declared factory | per 1 kg reference flow | waste weigh ticket; segregation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | For each applicable exchange, divide lot quantity by accepted dry net finished mass for the same configuration and reporting interval; retain the unrounded numerator and denominator. | lot exchange; accepted dry net mass; `cp_finished_mass` | exchange per 1 kg reference flow |  |
| `electricity_energy` | `needle_electricity` | MJ = metered kWh × 3.6; then apply `normalize_lot` to the converted lot energy. | attributable kWh; `cp_electricity`; accepted dry net mass | MJ per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all rows | Match site, lot, reporting dates and actual route to the accepted reference product. | lot genealogy and process log |
| `dq_mass` | fibre, backing, binder, trim and product | Reconcile input, accepted output and rejects; explain moisture change, residues and any unrepresented stream. | mass reconciliation and scale calibration |
| `dq_identity` | UUID-bearing rows | Check selected flow identity against actual product or waste state; retain supplier composition and electricity geography. | supplier specifications; direct flow identity record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_covering` | Require one accepted dry net mass denominator in kg for the same site, lot and configuration as all normalized rows. |  |
| `validate_route` | `back_finish` | Include binder and backing rows only when the corresponding physical exchange occurred; report each conditional state. | `ec-jrc-textiles-bref-2023` |
| `validate_waste` | `clean_pet_trim` | Use the PET waste identity only for segregated clean mono-material PET; otherwise leave this row inapplicable and review a different atomic waste flow. |  |
| `validate_identity` | `finished_covering`, `sb_latex_binder`, `polyester_backing` | Do not publish a dataset with an unresolved selected flow UUID; resolve each applicable row by direct public identity review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production package, eligible for reviewed secondary or background dataset projection. |
| downstream_use | Process and lifecycle model construction for the declared needle-felt floor-covering configuration. |
| allowed_use | Use for a compatible finished textile floor covering with matching fibre, backing, binder, geography and gate. |
| excluded_use | Do not apply to knotted, woven, tufted, unfinished felt, plastic-only flooring, installation, use or disposal. |
| required_metadata | Product configuration; site and time; dry mass protocol; material composition; backing and binder status; electricity geography and allocation driver. |
| required_quality_disclosure | UUID gaps, material and energy records, mass balance, conditional rows, omitted processes and uncertainty. |
| update_trigger | New product route, binder or backing composition, flow identity, factory technology or material foreground evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | UN Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Residual category identity and exclusion of adjacent carpet categories. |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023, sections 2.5.3.2 and 2.10.2, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Needle-felt process and conditional textile backing; no numeric transfer. |
