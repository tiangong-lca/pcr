---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.chamois-leather-patent-leather-and-patent-laminated-leather-metallized-leather
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chamois leather; patent leather and patent laminated leather; metallized leather

## 1. Scope and Applicability

This rule covers saleable animal-hide chamois, patent, patent laminated, and metallized leather at the factory gate. Declare each actual production route separately. Synthetic leather, plastic sheets, ordinary leather, and downstream leather articles are outside this boundary. Product identity follows CPC 3.0 and official leather classification guidance [un-cpc-2025; eu-jrc-tanning-2013].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.chamois-leather-patent-leather-and-patent-laminated-leather-metallized-leather |
| classification_refs | CPC 3.0 29110, identity context only; no accepted mapping implied |
| covered_products | animal-hide chamois leather; patent and patent laminated leather; metallized leather |
| excluded_products | synthetic leather; ordinary leather; composition leather; finished footwear and bags |
| representative_product | accepted finished animal-hide chamois leather at factory gate |
| production_route | oil tannage; lacquer coating; preformed plastic film lamination; metallic foil transfer, each as declared |
| market_state | accepted saleable finished leather including actual coating mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | specialty animal-hide leather for further fabrication |
| How much | 1 kg |
| How well | declared chamois, patent, patent laminated, or metallized route and leather state |
| How long or cycle | one factory-gate acceptance; no use lifetime assigned |
| reference_flow_link | finished_leather |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished specialty animal-hide leather |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal origin; substrate tanning state; exact finished route; coating or film polymer; film thickness; metal type; accepted moisture state; factory-gate scope |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_leather | Mass | kg | Verify accepted finished net mass using a calibrated scale or traceable weighing record, excluding transport packaging; report every exchange per 1 kg reference flow. |
| `area_to_mass` | leather or film recorded by area | Mass | kg | Convert area records to mass only with measured areal mass and moisture state for the same lot; retain original area and conversion evidence. |

## 5. System Boundary

The foreground boundary starts with receipt of animal-hide substrate and ends with acceptance of finished leather at the factory gate. Hide acquisition, upstream tanning, energy supply, and waste treatment require traceable upstream datasets; expand the foreground if those operations occur at the reporting site [eu-jrc-tanning-2013].

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received identified animal-hide split or tanned animal-hide leather |
| starting_condition_role | foreground material input with upstream production in linked datasets |
| product_classification_scope | animal-hide specialty finished leather within CPC 29110 |
| recursive_input_rule | if purchased same-category finished leather is reworked, disclose its input mass and existing finished share separately |
| upstream_dataset_requirement | compatible animal-hide, upstream tanning, oil, varnish, film, foil, electricity and waste-treatment datasets |
| disclosure | received state, route, factory gate, upstream gaps, and separate output quantities by product type |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all routes | Separate chamois, patent, laminated and metallized lots; include only atomic exchanges that actually occur. | `un-cpc-2025`, `eu-jrc-tanning-2013` |
| `boundary_coating` | surface routes | Record actual coating, film or foil applied to leather, retained in product, lost as scrap or emitted; verify the declared finishing route from production records. | `eu-jrc-tanning-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| substrate_receipt | Animal-hide substrate receipt | required | all routes | foreground input verification | per 1 kg reference flow |
| chamois_tannage | Oil tannage and washing | conditional | chamois route only | foreground oil tannage | per 1 kg reference flow |
| surface_finishing | Coating, lamination or metallic foil transfer | conditional | patent, laminated or metallized route only | foreground finishing | per 1 kg reference flow |
| grading_dispatch | Grading and factory-gate acceptance | required | all routes | foreground acceptance | per 1 kg reference flow |

### Process: Animal-hide substrate receipt (`substrate_receipt`)

#### Inputs

##### Product flows

###### Sheepskin split substrate (`sheepskin_split`)

Record only when the declared condition holds: Chamois route only; received split must be traceable to animal hide. Obtain quantity from same-lot primary records.

- Selected flow: Tanned sheepskin split
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate`
- Sources: `eu-jrc-tanning-2013`

###### Tanned leather substrate (`tanned_base_leather`)

Record only when the declared condition holds: Patent, laminated, or metallized route only; disclose animal origin and tanning state. Obtain quantity from same-lot primary records.

- Selected flow: Tanned animal-hide leather
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_substrate`
- Sources: `un-cpc-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Oil tannage and washing (`chamois_tannage`)

#### Inputs

##### Product flows

###### Oil tanning input (`cod_oil`)

Record only when the declared condition holds: Chamois route using cod oil; alternative oils require separately identified atomic rows. Obtain quantity from same-lot primary records.

- Selected flow: Cod oil
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tannage`
- Sources: `eu-jrc-tanning-2013`

###### Post-tanning washing alkali (`sodium_carbonate`)

Record only when the declared condition holds: Only where sodium carbonate is actually used in washing. Obtain quantity from same-lot primary records.

- Selected flow: Sodium carbonate `6827e314-666a-4786-ac60-00770c61678b`
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tannage`
- Sources: `eu-jrc-tanning-2013`

###### Washing water supply (`process_water`)

Record only when the declared condition holds: Only where washing water crosses the facility boundary. Obtain quantity from same-lot primary records.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-jrc-tanning-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Oil-tannage wastewater (`tannery_wastewater`)

Record only when the declared condition holds: Record the effluent sent to on-site or external treatment; disclose oil and COD load if measured. Obtain quantity from same-lot primary records.

- Selected flow: Oil-tannage process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `eu-jrc-tanning-2013`

##### Elementary flows

### Process: Coating, lamination or metallic foil transfer (`surface_finishing`)

#### Inputs

##### Product flows

###### Patent coating varnish (`acrylic_varnish`)

Record only when the declared condition holds: Only a declared acrylic-varnish patent-leather formulation; other coatings need own atomic rows. Obtain quantity from same-lot primary records.

- Selected flow: Acrylic varnish `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`
- Sources: `eu-jrc-tanning-2013`

###### Patent lamination film (`preformed_plastic_film`)

Record only when the declared condition holds: Only a PVC-film laminated route; record film chemistry and thickness. Obtain quantity from same-lot primary records.

- Selected flow: Preformed PVC film
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`
- Sources: `eu-jrc-tanning-2013`

###### Metallized foil transfer input (`aluminium_foil`)

Record only when the declared condition holds: Only an aluminium-foil transfer route; account for transfer losses separately. Obtain quantity from same-lot primary records.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`
- Sources: `us-patent-foil-transfer-2022`

###### Purchased electrical energy (`alternating_current`)

Record only when the declared condition holds: Where finishing equipment uses purchased alternating current; meter and disclose grid supply. Obtain quantity from same-lot primary records.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-jrc-tanning-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Solvent emission to air (`butyl_acetate_air`)

Record only when the declared condition holds: Only if the coating contains n-butyl-acetate and measured or balanced losses reach air; compartment is unspecified air. Obtain quantity from same-lot primary records.

- Selected flow: n-butyl-acetate `4d9a8790-3ddd-11dd-97df-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `eu-jrc-tanning-2013`

### Process: Grading and factory-gate acceptance (`grading_dispatch`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable finished specialty leather (`finished_leather`)

Record only when the declared condition holds: Report one declared route and accepted dispatch state; do not aggregate unlike routes without separate quantities. Obtain quantity from same-lot primary records.

- Selected flow: Finished specialty animal-hide leather
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `un-cpc-2025`

##### Waste flows

###### Trimming scrap (`leather_cuttings`)

Record only when the declared condition holds: Record actual cutting scrap by route and treatment destination. Obtain quantity from same-lot primary records.

- Selected flow: Finished leather trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: Measure same-lot exchange quantity and report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `eu-jrc-tanning-2013`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all routes | First subdivide by route, lot and process; do not pool oil-tannage, coating and lamination inputs. | `eu-jrc-tanning-2013` |
| `allocation_mass` | shared inputs without separate meters | Allocate shared inputs only using traceable accepted product mass or equipment-time records and disclose the causal basis; do not offset waste flows by treatment credits. | `eu-jrc-tanning-2013` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_substrate | substrate_receipt | substrate mass | receiving and supplier records | lot; species; input state; net mass | weigh or reconcile supplier weighbridge ticket | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_tannage | chamois_tannage | oil and alkali mass | batch dosing logs | lot; material name; dose mass | reconcile dosing and purchase records | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_water | chamois_tannage | washing water | meter records | meter id; opening; closing; lot | read calibrated water meter | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_wastewater | chamois_tannage | tannery effluent | effluent tank and discharge records | lot; discharge mass; treatment route | weigh tank or use calibrated flowmeter with density conversion | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_finish | surface_finishing | coating film and foil mass | coating and transfer records | lot; material identity; gross use; return; scrap | reconcile issue and return weights | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_electricity | surface_finishing | alternating current | submeter records | meter id; kWh; lot; grid source | read electricity submeter and convert kWh to MJ by 3.6 | MJ | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_emission | surface_finishing | n-butyl-acetate air release | solvent balance or emission test | lot; formulation; solvent input; retained; recovered; emitted | use measured stack result or documented solvent mass balance | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_product | grading_dispatch | accepted finished mass | acceptance and scale records | lot; route; accepted net mass; rejects | weigh accepted leather on calibrated scale excluding transport packing | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |
| cp_scrap | grading_dispatch | leather trimming scrap | scrap weighing and transfer tickets | lot; scrap mass; destination | weigh separately by route and destination | kg | each lot | all accepted lots in reporting period | reporting site | per 1 kg reference flow | calibration and primary records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | Divide attributable lot exchange by accepted finished net mass in kg; report per 1 kg reference flow. | lot exchange; accepted finished net mass; cp_product | quantity per 1 kg reference flow |  |
| electricity_conversion | alternating_current | Convert recorded kWh to MJ using 1 kWh = 3.6 MJ. | kWh; cp_electricity | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all lots | Declare animal substrate, finished route and coating chemistry by lot. | supplier declaration; batch record |
| dq_balance | all lots | Reconcile input, accepted output, scrap and effluent mass without hiding route losses. | weighing and discharge records |
| dq_time | all measured exchanges | Use one stated reporting period and disclose missing meters, estimates and data age. | meter logs; invoices |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | all lots | Verify finished output is 1 kg accepted leather per 1 kg reference flow and route is declared. | `un-cpc-2025` |
| `validate_chemistry` | coating or oil routes | Verify actual oil, varnish, film, foil, water and solvent rows against production records; absent routes must not carry quantities. | `eu-jrc-tanning-2013` |
| `validate_releases` | all lots | Reconcile wastewater, cutting scrap and solvent release with waste tickets and emission records. | `eu-jrc-tanning-2013` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | leather datasets with matching route, animal-hide substrate and factory-gate state |
| excluded_use | direct proxy for synthetic leather, plastic film or downstream articles |
| required_metadata | route; animal origin; substrate state; coating and film chemistry; metal; reporting period; site; accepted net mass |
| required_quality_disclosure | UUID gaps; upstream datasets; missing meters; allocation and route output amounts |
| update_trigger | material change in substrate, route, formulation, site or measurement method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product identity and neighboring category boundary |
| eu-jrc-tanning-2013 | official_guidance | European Commission JRC, Best Available Techniques (BAT) Reference Document for the Tanning of Hides and Skins (2013), https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | oil tannage, washing, finishing emissions and process decomposition |
| us-patent-foil-transfer-2022 | literature | US20220194276A1, Encapsulated foil leather transfer, https://patents.google.com/patent/US20220194276A1/en | conditional aluminium foil transfer route only |
