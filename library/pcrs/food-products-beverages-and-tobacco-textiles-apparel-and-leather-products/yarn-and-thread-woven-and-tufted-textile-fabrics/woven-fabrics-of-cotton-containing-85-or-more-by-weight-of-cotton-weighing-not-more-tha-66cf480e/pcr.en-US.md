---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-not-more-tha-66cf480e
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing not more than 200 g/m2

## 1. Scope and Applicability

This PCR defines foreground data for greige, plain or other ordinary woven cotton fabric at the weaving gate. The accepted fabric contains at least 85% cotton by dry fibre mass and has an areal mass at or below 200 g/m2. Record actual weave, yarn and sizing route. Wet preparation, bleaching, dyeing, printing and finishing require a separate declared downstream dataset and are outside this greige gate. This narrower production state must not be represented as all finished products in CPC 26610.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-cotton-containing-85-or-more-by-weight-of-cotton-weighing-not-more-tha-66cf480e |
| classification_refs | CPC 3.0 26610; narrower greige production state |
| covered_products | Ordinary greige woven cotton fabric with cotton fraction ≥85% by dry fibre mass and areal mass ≤200 g/m2 |
| excluded_products | Heavier fabric, lower-cotton fabric, knitted fabric, terry and other special fabrics, and post-weaving wet-finished fabric |
| representative_product | Dry greige woven cotton fabric on a roll |
| production_route | Cotton yarn warping; conditional starch sizing; loom weaving |
| market_state | Accepted dry greige fabric before wet finishing and transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted greige woven cotton fabric |
| How much | 1 kg |
| How well | Cotton dry-fibre fraction ≥85%; areal mass ≤200 g/m2; disclose weave and sizing route |
| How long or cycle | One defined production batch at the weaving gate |
| reference_flow_link | fabric_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing not more than 200 g/m2 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cotton dry-fibre fraction; areal mass in g/m2; greige state; yarn grade; weave; sizing route; facility and batch |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use measured dry accepted greige fabric mass at the same weaving gate for the reference and every per-kg inventory denominator; exclude transport packaging. |
| `fabric_specification` | reference product | Mass and areal mass | kg; g/m2 | Test cotton fibre fraction on a dry-mass basis and areal mass for the accepted batch; reject batches outside ≥85% cotton or ≤200 g/m2. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground_boundary | Begin with purchased or transferred yarn entering warp preparation and end with accepted greige fabric and segregated loom scrap at the weaving gate. | `eu-jrc-textiles-bref-2023`; `un-cpc-3-structure-2025` |
| `sizing_route` | conditional_process | Include batch-specific water and corn starch only where aqueous corn-starch sizing is actually used; other sizing recipes require a separate atomic exchange review. | `eu-jrc-textiles-bref-2023` |
| `finishing_exclusion` | foreground_boundary | Do not credit or model downstream desizing, bleaching, dyeing, printing, finishing, use or end of life within this greige gate. | `eu-jrc-textiles-bref-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or transferred cotton yarn measured on a dry-mass basis at warp preparation |
| starting_condition_role | foreground input; its upstream yarn production remains a linked background dataset |
| product_classification_scope | Greige subset of CPC 3.0 26610, subject to cotton fraction and areal-mass tests |
| recursive_input_rule | If greige fabric of the same category is reintroduced, record it separately and disclose its upstream dataset; avoid recursive self-linking. |
| upstream_dataset_requirement | Use traceable upstream datasets for cotton yarn, water and electricity; disclose geography, technology and time. |
| disclosure | Record fabric state, batch, weave, measured cotton fraction, areal mass, yarn grade, sizing recipe and gate. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| weave_greige | Warp preparation, conditional sizing and loom weaving | required | all covered greige batches; sizing exchanges apply only when the recipe uses them | foreground fabric formation | per 1 kg accepted greige fabric |

### Process: Warp preparation, conditional sizing and loom weaving (`weave_greige`)

#### Inputs

##### Product flows

###### Cotton yarn supplied for warp and weft (`cotton_yarn_input`)

Purchased cotton yarn enters warp preparation and weaving; collect its batch dry mass.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass / kg
- Amount rule: Record accepted dry yarn mass issued to the batch, including yarn that becomes measured loom scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `eu-jrc-textiles-bref-2023`

###### Industrial production water for starch sizing (`industrial_water_input`)

Industrial production water enters the starch-sizing solution only on the declared sizing route.

- Selected flow: Production water for industrial use `72dcdee6-846a-455a-95d1-942aa7ad3730`
- Flow property / unit: Mass / kg
- Amount rule: When aqueous starch sizing is used, record water delivered to the sizing preparation for the batch; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `eu-jrc-textiles-bref-2023`

###### Corn starch sizing agent (`corn_starch_input`)

Dry corn starch enters the sizing solution only when the declared recipe uses it.

- Selected flow: Corn starch
- Flow property / unit: Mass / kg
- Amount rule: When corn-starch sizing is used, record dry corn starch issued to the batch; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `eu-jrc-textiles-bref-2023`

###### Alternating-current electricity used by warping, sizing and weaving (`grid_electricity_input`)

Grid alternating-current electricity powers warp preparation, sizing and loom operation.

- Selected flow: Alternating-current grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to the batch across warping, sizing and loom operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows

###### Accepted greige woven cotton fabric (`fabric_output`)

Accepted dry greige fabric leaves the weaving gate before wet finishing.

- Selected flow: Woven fabrics of cotton, containing 85% or more by weight of cotton, weighing not more than 200 g/m2
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `eu-jrc-textiles-bref-2023`

##### Waste flows

###### Clean cotton loom selvage and yarn scrap (`loom_cotton_scrap_output`)

Segregated clean cotton selvage and yarn scrap leave the weaving process as waste.

- Selected flow: Clean cotton loom selvage and yarn scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated clean cotton selvage and yarn scrap leaving the batch; record zero only when verified absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `eu-jrc-textiles-bref-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground_burden_allocation | Measure yarn, sizing materials, electricity and accepted output by batch or machine group before allocation. | `eu-jrc-textiles-bref-2023` |
| `allocation_shared` | shared_operations | For shared equipment, allocate measured common electricity by recorded machine operating time for the batch; disclose the measured total and allocation shares. |  |
| `scrap_no_credit` | loom_cotton_scrap_output | Report separated scrap mass. Do not apply an avoided-product credit unless a separately documented downstream recovery model is included. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | weave_greige | accepted output | weighing and test | batch id; accepted dry kg; cotton fraction; g/m2; weave; gate | Weigh accepted dry fabric on calibrated scale; test composition and areal mass; exclude transport packaging. | kg | each batch | representative production period | same weaving site | per 1 kg reference flow | scale calibration; test certificates; batch acceptance |
| cp_material | weave_greige | yarn; sizing water; corn starch | issue and meter records | batch id; dry yarn kg; water kg; dry starch kg; recipe | Reconcile issued materials to batch and measured returns; weigh or meter each atomic material separately. | kg | each batch | same batches as output | same weaving site | per 1 kg reference flow | inventory reconciliation; calibrated meters |
| cp_energy | weave_greige | grid electricity | meter record | batch id; kWh; equipment hours; shared-meter share | Read dedicated meter or allocate common metered kWh by recorded machine operating hours. | kWh | each batch | same batches as output | same weaving site | per 1 kg reference flow | meter calibration; operating logs |
| cp_scrap | weave_greige | clean cotton selvage and yarn scrap | segregated waste weighing | batch id; scrap kg; destination | Weigh clean cotton loom scrap separately from contaminated or mixed waste. | kg | each batch | same batches as output | same weaving site | per 1 kg reference flow | weighbridge ticket; segregation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_normalization` | all inventory rows | For each applicable recorded exchange, divide attributable batch quantity by accepted dry greige fabric mass of the same batch. | attributable batch exchange; accepted dry fabric kg; cp_product | exchange per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | all inventory rows | Use matching batch, site, period and gate for denominator and numerator; disclose meter allocation. | batch records; scale and meter calibration |
| `dq_route` | fabric_output; corn_starch_input; industrial_water_input | Retain composition, areal-mass tests and sizing recipe; mark conditional inputs not applicable only when route records verify absence. | test certificates; production recipe |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_class` | fabric_output | Reject any accepted batch outside ≥85% cotton dry-fibre mass fraction or >200 g/m2 areal mass. | `un-cpc-3-structure-2025` |
| `validate_balance` | all inventory rows | Require positive accepted dry fabric mass and reconcile yarn issued, fabric accepted and measured cotton scrap; explain residuals. |  |
| `validate_route` | corn_starch_input; industrial_water_input | Check sizing recipe and conditional input applicability against batch production records. | `eu-jrc-textiles-bref-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset after documented foreground collection and review |
| downstream_use | process or lifecyclemodel for greige fabric at the weaving gate |
| allowed_use | Greige cotton woven fabric satisfying the measured class qualifiers |
| excluded_use | Wet-finished fabric or a substitute for the whole CPC 26610 product category |
| required_metadata | facility; geography; period; batch; weave; yarn grade; sizing recipe; cotton fraction; areal mass; output gate |
| required_quality_disclosure | unresolved UUIDs and empirical range needs; meter allocation; mass-balance residuals; upstream dataset choices |
| update_trigger | change in fabric state, yarn mix, sizing route, loom technology or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification and class limits |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023, §§2.5.1.1–2.5.1.3, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | warping, sizing and weaving process decomposition; not a quantity benchmark |
