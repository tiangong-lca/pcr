---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.bed-linen-table-linen-toilet-linen-and-kitchen-linen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bed linen, table linen, toilet linen and kitchen linen

## 1. Scope and Applicability

This rule covers unstuffed made-up bed sheets and pillowcases, tablecloths and napkins, towels and comparable toilet or kitchen linen. It models the conversion of purchased, finished textile fabric into accepted dry linen articles at the factory gate. The declared starting condition is finished fabric ready for cutting; its fibre production, spinning, weaving or knitting, and fabric wet processing require linked upstream datasets. The reference route is woven cotton fabric cut, sewn, inspected and packed. Other fibres and knit routes require a declared material and route profile and corresponding upstream datasets; do not silently substitute the cotton input. Stuffed quilts, pillows, curtains, apparel and cleaning cloths outside this household-linen category are excluded. Distribution, use laundering and end-of-life are outside this gate-to-gate foreground profile. Product distinctions follow `unsd-cpc3-2025`; cut-and-sew process typology is supported by `epa-textiles-2008`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.bed-linen-table-linen-toilet-linen-and-kitchen-linen` |
| classification_refs | CPC 3.0 27120; classification reference only, not a positive mapping decision |
| covered_products | Unstuffed bed, table, toilet and kitchen linen made from textile fabric |
| excluded_products | Stuffed bedding, curtains, apparel, floor cloths and standalone fabric |
| representative_product | Unstuffed woven-cotton bed sheet |
| production_route | Purchased finished woven cotton fabric; dry cutting, sewing, inspection and packaging |
| market_state | Accepted dry finished article at factory gate; net product mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished unstuffed linen article for bed, table, toilet or kitchen use |
| How much | 1 kg net accepted dry finished linen article |
| How well | Declare article type, fibre composition, fabric construction and finishing state; accepted to the producer's stated specification |
| How long or cycle | One factory-gate delivery; service life is outside this production reference |
| reference_flow_link | `finished_linen_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished unstuffed household linen article; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article type; fibre composition; woven or knitted fabric; fabric finishing state; factory-gate packaging state; geography; production period |

The product-flow UUID is unresolved. A foreground data package must declare every required qualifier and cannot claim a confirmed TianGong finished-linen flow until one is directly verified.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted dry articles excluding packaging; use that net mass as the common denominator for all inventory rows. |
| `lot_normalization` | all inventory rows | Mass or energy as stated on each row | kg or kWh | Divide attributable lot inputs and offcuts by the net accepted article mass in kg; retain the stated numerator unit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished woven fabric ready for cutting; declare fibre, construction and finishing state |
| starting_condition_role | Upstream product input to the cut-and-sew foreground process |
| product_classification_scope | Finished unstuffed bed, table, toilet and kitchen linen articles |
| recursive_input_rule | If an incoming article already meets this category, record it as a separately declared input with its own upstream dataset; do not count it again as newly manufactured output |
| upstream_dataset_requirement | Link a compatible fabric dataset that includes fibre, yarn, fabric formation and wet finishing where performed upstream |
| disclosure | Report the fabric starting condition, cut-and-sew site, product mix, packaging state and excluded stages |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fabric_entry` | purchased fabric | Include purchased finished fabric and its linked upstream production in the product system; the foreground begins at receipt of cutting-ready fabric. | `epa-textiles-2008` |
| `boundary_factory_gate` | finished linen | Include cutting, sewing, inspection, on-site electricity and attributable packaging through the factory gate. | `epa-textiles-2008` |
| `boundary_wet_process` | on-site wet processing | If washing, bleaching, dyeing or drying occurs on site, model its own atomic exchanges and disclose its separate process inventory before using this profile for that route. | `epa-textiles-2008` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `make_up_linen` | Fabric cutting, sewing, inspection and packing | `required` | All articles in scope | Foreground conversion | per 1 kg net accepted dry finished linen |

### Process: Fabric cutting, sewing, inspection and packing (`make_up_linen`)

#### Inputs

##### Product flows
###### Purchased woven cotton fabric (`cotton_fabric`)

Purchased cotton fabric crosses the foreground boundary as the primary material input.

- Selected flow: Cotton Fabric `f8292a12-0851-4ed8-9ff3-18d5f4d302ff`
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted incoming fabric for the represented cotton route; record fibre content and finishing state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Cotton sewing thread (`cotton_sewing_thread`)

Cotton sewing thread is incorporated into seams during assembly.

- Selected flow: Cotton sewing thread; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile cotton sewing thread issued to the lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Purchased grid electricity (`grid_electricity`)

Purchased grid electricity powers cutting, sewing and inspection equipment.

- Selected flow: Grid electricity; UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Read attributable sewing, cutting and inspection electricity from meter or reconciled bills.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Corrugated shipping box (`corrugated_box`)

Corrugated board boxes enter when the finished articles use this shipping package.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: When corrugated boxes are used, weigh boxes attributable to the lot; otherwise record not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished linen article (`finished_linen_output`)

The accepted dry finished article leaves the production boundary as the reference product.

- Selected flow: Finished unstuffed household linen article; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

###### Clean cotton fabric cutting offcuts (`cotton_cutting_offcuts`)

Clean cotton fabric offcuts leave the cutting step as a segregated waste stream.

- Selected flow: Clean cotton fabric cutting offcuts; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Segregate and weigh clean cotton fabric offcuts attributable to the represented lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_offcuts`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared production lines | First separate lot-specific cutting, sewing, power and material records by article type; document the subdivision. | `eu-pef-2021` |
| `allocation_physical` | remaining shared burdens | If subdivision is not possible, allocate shared conversion inputs by measured net accepted article mass when this physical relationship explains resource use; disclose rationale and sensitivity. | `eu-pef-2021` |
| `allocation_scrap` | cutting offcuts | Record offcut mass and fate separately. Do not assume a substitution credit without evidence of actual recovery and displaced product. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output_mass` | `make_up_linen` | accepted output | weighing record | article type; lot; accepted dry net mass; rejected mass; package tare | Calibrated scale; weigh accepted articles without packaging and reconcile dispatch and rejection records. | kg | each lot | reporting period | production site | per 1 kg reference flow | scale calibration and acceptance log |
| `cp_materials` | `make_up_linen` | fabric, thread and boxes | stores issue and weighing record | material identity; lot; issued kg; returned kg; package type | Weigh material issued less returned stock and reconcile stores records. | kg | each lot | reporting period | production site | per 1 kg reference flow | stock reconciliation and scale record |
| `cp_energy` | `make_up_linen` | purchased electricity | meter or invoice | meter id; opening and closing kWh; lot or line hours | Submeter preferred; reconcile site meter or invoice and documented line allocation. | kWh | each lot or month | reporting period | production site | per 1 kg reference flow | meter calibration or invoice and allocation worksheet |
| `cp_offcuts` | `make_up_linen` | clean cotton fabric offcuts | segregated waste weighing | lot; offcut kg; contamination; destination | Segregate clean offcuts and weigh before recovery or disposal. | kg | each lot | reporting period | production site | per 1 kg reference flow | weighbridge or scale log and transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | `cotton_fabric`; `cotton_sewing_thread`; `grid_electricity`; `corrugated_box`; `cotton_cutting_offcuts` | q_ref = attributable lot exchange quantity / accepted dry net linen mass in kg; retain the exchange numerator unit. | lot exchange; accepted dry net mass; `cp_output_mass` | exchange per 1 kg reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | State article type, fibre composition, fabric finish, material grade, package state and actual waste destination. | product specification and stock records |
| `dq_balance` | fabric and product mass | Reconcile issued fabric with accepted output, rejects and cutting offcuts; explain any remaining mass difference. | batch mass-balance worksheet |
| `dq_time` | all rows | Use one declared reporting period and disclose missing or estimated records. | dated meters, ledgers and acceptance records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_denominator` | all inventory rows | Confirm that each exchange is normalized by accepted dry net article mass, excluding packaging; require positive measured denominator. | |
| `validate_identity` | product and material flows | Check article category, input fabric state and declared fibre composition; an unresolved UUID must not be represented as a verified TianGong flow. | `unsd-cpc3-2025` |
| `validate_balance` | fabric cutting | Reconcile fabric input, accepted products, rejects and offcuts and explain material loss. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for made-up household linen |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness |
| allowed_use | Model declared article type and cut-and-sew route with compatible fabric upstream data |
| excluded_use | Do not claim a cradle-to-grave footprint, a product-life functional unit, or equivalence across unlike article types without further modelling |
| required_metadata | article type; fibre composition; fabric construction and finish; site; period; accepted mass; package state; fabric upstream dataset; unresolved UUID status |
| required_quality_disclosure | allocation method; meter coverage; material balance; missing records; offcut fate; geography and technology limits |
| update_trigger | changed fabric route, product mix, finishing site, electricity supply, packaging or validated flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product identity and neighbouring category distinctions |
| `epa-textiles-2008` | `official_guidance` | U.S. EPA, Quantifying Greenhouse Gas Emissions from Key Industrial Sectors in the United States, May 2008 working draft, https://archive.epa.gov/osem/sectors/web/pdf/greenhouse-report.pdf | textile cut-and-sew process typology; no amount benchmark |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations, Official Journal L 471 (30 December 2021), Annex I section 4.5, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | multifunctionality and allocation hierarchy |
