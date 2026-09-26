---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.gloves-shawls-scarves-veils-ties-cravats-and-other-made-up-clothing-accessories-knitted-9984ae4f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gloves, shawls, scarves, veils, ties, cravats and other made-up clothing accessories, knitted or crocheted; knitted or crocheted parts of garments or of clothing accessories

## 1. Scope and Applicability

This rule covers made-up gloves, shawls, scarves, veils, ties, cravats, other clothing accessories whose defining textile construction is knitted or crocheted, and knitted or crocheted garment or accessory parts sold as standalone products. The boundary ends at the accepted factory-gate product. Each data package declares its actual article, fibre composition, knit technology, purchased-fabric or on-site knitting route, finishing, joining, and packaging. Nonknitted articles and complete garments use their own category rules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.gloves-shawls-scarves-veils-ties-cravats-and-other-made-up-clothing-accessories-knitted-9984ae4f |
| classification_refs | CPC 3.0: 28229 (`un-cpc-3-2025`) |
| covered_products | Made-up knitted or crocheted clothing accessories; independently sold knitted or crocheted garment and accessory parts |
| excluded_products | Complete knitted garments; baby-specific accessories; headgear; nonknitted textile accessories; leather, rubber or plastics accessories; parts consumed internally to make another final garment |
| representative_product | Knitted cotton scarf or knitted cotton part; representative material route for the foreground cards only |
| production_route | On-site knitting from yarn, or cutting and joining purchased knitted fabric; include processes for the actual route |
| market_state | Accepted made-up accessory or standalone part at factory gate, net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared made-up knitted or crocheted accessory or standalone part |
| How much | 1 kg accepted net product mass |
| How well | Meets the declared fibre, size, function, and acceptance specification |
| How long or cycle | One factory-gate delivery; service life is product-specific and outside this production reference |
| reference_flow_link | finished_accessory_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted knitted or crocheted clothing accessory or garment part at factory gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article identity; fibre composition; standalone part status; knit/crochet technology; net product mass; acceptance specification; production route; facility and reporting period |

A foreground package must declare each required qualifier; otherwise its reference flow is incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass_basis` | reference product and all inventory rows | Mass | kg | Normalize per 1 kg reference flow using accepted made-up product net mass; weigh without transport packaging and separate rejects from accepted output. |
| `electricity_conversion` | knitting_electricity_input, assembly_electricity_input | Energy | MJ | For a kWh meter reading apply the exact unit conversion 3.6 MJ/kWh; do not substitute distribution service or fuel calorific value for electricity delivered. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Yarn or already knitted fabric delivered to this foreground system; declare composition and upstream data per lot |
| starting_condition_role | Foreground measured input start; connect fibre, spinning, and prior finishing through matched upstream datasets |
| product_classification_scope | Made-up accessories or standalone parts within CPC 3.0 28229; do not substitute adjacent leaves |
| recursive_input_rule | Record a purchased same-category semifinished article as a separate input with its upstream boundary disclosed; avoid double counting on-site knitting |
| upstream_dataset_requirement | Choose upstream yarn, fabric, electricity, thread, and packaging data for actual composition, geography, technology, and delivered state |
| disclosure | Disclose included and omitted routes, materials, losses, outsourced steps, disposal destinations, and input-to-factory-gate coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all foreground processes | Include the actual knitting or purchased-fabric route, joining, and release; document omitted operations. | boras-knit-on-demand; ilo-garment-carbon-wp53 |
| `boundary_upstream` | all purchased product inputs | Connect composition- and geography-matched upstream datasets without counting the same process twice. | ilo-garment-carbon-wp53 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `knitting` | On-site knitting | `conditional` | Only when yarn is knitted on site | foreground formation | per 1 kg reference flow |
| `assembly` | Cutting and joining | `required` | Record actual joining for every article; document no cutting for fully fashioned output | foreground making-up | per 1 kg reference flow |
| `release` | Acceptance and release | `required` | All accepted made-up products | reference output | per 1 kg reference flow |

The cotton route below contains concrete foreground exchanges. Other fibres, finishing agents, or trims require separate atomic flows for their real material and process after UUID review; cotton rows are not proxies for them. Interprocess transfers are recorded as paired outputs and inputs and cancel in the aggregate.

### Process: On-site knitting (`knitting`)

#### Inputs

##### Product flows

###### Unsized cotton knitting yarn (`cotton_knitting_yarn_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Unsized cotton knitting yarn
- Flow property / unit: Mass / kg
- Amount rule: conditional: integrated cotton-yarn knitting route; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `boras-knit-on-demand`

###### Purchased alternating-current electricity for knitting (`knitting_electricity_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Purchased alternating-current electricity for knitting
- Flow property / unit: Mass / MJ
- Amount rule: conditional: on-site knitting; meter and convert kWh to MJ at 3.6 MJ/kWh; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `boras-knit-on-demand`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished knitted cotton panel made on site (`knitted_cotton_panel_output`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Unfinished knitted cotton panel made on site
- Flow property / unit: Mass / kg
- Amount rule: conditional: integrated knitting; mass transferred to assembly; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `boras-knit-on-demand`

##### Waste flows

##### Elementary flows

### Process: Cutting and joining (`assembly`)

#### Inputs

##### Product flows

###### Unfinished knitted cotton panel transferred from knitting (`knitted_cotton_panel_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Unfinished knitted cotton panel transferred from knitting
- Flow property / unit: Mass / kg
- Amount rule: conditional: integrated knitting; equal to paired output; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `ilo-garment-carbon-wp53`

###### Purchased uncoated knitted cotton fabric (`purchased_knitted_cotton_fabric_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Purchased uncoated knitted cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: conditional: purchased-fabric cotton route; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ilo-garment-carbon-wp53`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: conditional: stitched assembly using polyester thread; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ilo-garment-carbon-wp53`

###### Purchased alternating-current electricity for assembly (`assembly_electricity_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Purchased alternating-current electricity for assembly
- Flow property / unit: Mass / MJ
- Amount rule: meter and convert kWh to MJ at 3.6 MJ/kWh; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ilo-garment-carbon-wp53`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted unpackaged knitted accessory or garment part (`assembled_accessory_output`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Accepted unpackaged knitted accessory or garment part
- Flow property / unit: Mass / kg
- Amount rule: measure accepted net product mass transferred to release; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `ilo-garment-carbon-wp53`

##### Waste flows

###### Clean knitted cotton cutting offcuts (`cotton_knit_offcuts_output`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Clean knitted cotton cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: conditional: cutting of cotton knit fabric; record actual recovery or disposal route; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ilo-garment-carbon-wp53`

##### Elementary flows

### Process: Acceptance and release (`release`)

#### Inputs

##### Product flows

###### Accepted unpackaged knitted accessory or garment part transferred to release (`assembled_accessory_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Accepted unpackaged knitted accessory or garment part transferred to release
- Flow property / unit: Mass / kg
- Amount rule: equal to paired assembly output; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer`
- Sources: `ilo-garment-carbon-wp53`

###### Low-density polyethylene packaging film (`ldpe_film_input`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: conditional: LDPE film is physically applied to sold product; measure actual records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ilo-garment-carbon-wp53`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted knitted or crocheted clothing accessory or garment part at factory gate (`finished_accessory_output`)

Record the actual exchange crossing this process boundary only under the stated condition; substantiate not applicable on other routes.

- Selected flow: Accepted knitted or crocheted clothing accessory or garment part at factory gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `ilo-garment-carbon-wp53`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance` | all processes | Reconcile input, accepted output, offcuts, rejects, and stock change by dry or net mass; report any residual, not as an invented flow. | ilo-garment-carbon-wp53 |
| `allocation_shared` | shared meters and lines | Partition shared measured electricity and material losses using documented machine time or measured output mass; disclose factor, period, and sensitivity. | ilo-garment-carbon-wp53 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | `assembly, knitting` | yarn, fabric, thread | weighing and issue logs | lot; composition; net issue mass; returns | weigh and reconcile with issue ledger | kg | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |
| `cp_energy` | `assembly, knitting` | purchased electricity | meter reading | meter; start and end; machine or process; output | exclude nonproduction use; convert kWh to MJ | MJ | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |
| `cp_transfer` | `knitting, assembly, release` | intermediate products | transfer weighings | lot; source; destination; net mass | weigh and reconcile paired inputs and outputs | kg | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |
| `cp_waste` | `assembly` | cotton offcuts | segregated weighing | lot; fibre; net mass; treatment destination | weigh separately and reconcile transfer note | kg | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |
| `cp_packaging` | `release` | polyethylene film | packaging issue records | film grade; net consumed mass; returns | measure net film applied to products | kg | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |
| `cp_reference` | `release` | accepted product | acceptance and weighing | article; composition; accepted net mass; packaging mass | weigh accepted product on calibrated scale; exclude packaging | kg | each lot and reporting period | same representative production period | actual site and line | per 1 kg reference flow | calibration, lot ledger, mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference` | all inventory rows | q_ref = attributable exchange amount in period / accepted net product mass (kg) in the same period; report per 1 kg reference flow. | exchange records; `cp_reference` | q_ref | `ilo-garment-carbon-wp53` |
| `paired_transfer` | knitted_cotton_panel_output, knitted_cotton_panel_input, assembled_accessory_output, assembled_accessory_input | Equal paired output and input for each intermediate lot; internal transfer is not an additional purchased input. | `cp_transfer` | reconciled transfer mass | `boras-knit-on-demand` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product rows | Record actual material, fibre fraction, knit state, and supply geography; do not present unresolved UUIDs as confirmed database flows. | lot specification and purchase record |
| `dq_coverage` | all processes | Use one consistent production period and disclose outsourced, unmetered, and not-applicable processes. | production ledger and process map |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_accessory_output | Require positive accepted net mass, the declared article qualifiers, and a 1 kg normalized output. | un-cpc-3-2025 |
| `validate_routes` | all inventory rows | Check route conditions, paired internal transfers, packaging exclusion from net product mass, and site-specific measured quantities. | boras-knit-on-demand; ilo-garment-carbon-wp53 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product-production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Modelling matching article, fibre composition, process route, and factory-gate boundary |
| excluded_use | Undifferentiated average for all knitted accessories without qualifiers; use or end-of-life models |
| required_metadata | article, fibre, route, site, region, period, output, packaging, outsourcing, waste destinations |
| required_quality_disclosure | unresolved UUIDs, uncovered materials or processes, allocation, mass-balance residual, and missing range evidence |
| update_trigger | Material change in article, fibre, technology, supply chain, or measurement records |

## 11. Data Sources

| source_id | title | type | reference | use |
| --- | --- | --- | --- | --- |
| `un-cpc-3-2025` | CPC Version 3.0 Structure, 30 June 2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification boundary |
| `boras-knit-on-demand` | Knit on Demand - mass customisation of knitted fashion products | `literature` | https://www.diva-portal.org/smash/get/diva2%3A870798/FULLTEXT01.pdf | qualitative flat-knitting, scarf, cut-and-sew and shaped-knitting process distinctions; section 4 and Figures 3-4; no cut-loss percentage adopted |
| `ilo-garment-carbon-wp53` | Taking climate action: Measuring carbon emissions in the garment sector in Asia, ILO Working Paper 53 | `literature` | https://webapps.ilo.org/static/english/intserv/working-papers/wp053/index.html | garment factory-gate boundary and cutting, sewing, packaging processes |
