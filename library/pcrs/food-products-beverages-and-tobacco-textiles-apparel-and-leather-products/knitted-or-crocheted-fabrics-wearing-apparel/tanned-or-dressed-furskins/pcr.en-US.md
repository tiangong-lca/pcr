---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.tanned-or-dressed-furskins
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tanned or dressed furskins

## 1. Scope and Applicability

This PCR covers production of a saleable, hair-on furskin after tanning or dressing. It starts with preserved raw pelts and ends with accepted dressed skins at the dressing site gate. Alum or other declared tanning routes and oil application may be represented only with the chemicals and operations actually used. The hair remains attached; hair-off leather, raw undressed pelts, artificial fur, fur garments, fur articles and contract dressing services as a service product are outside this product identity. CPC 28310 distinguishes dressed furskins from articles of furskin (28320) and artificial fur (28330) [cpc30]. Process descriptions are supported by [fur-quality-2022], [fur-activated-water] and [fur-tanning-2020].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.tanned-or-dressed-furskins |
| classification_refs | CPC 3.0: 28310 [cpc30] |
| covered_products | Hair-on animal furskins sold after tanning, tawing or dressing. |
| excluded_products | Raw furskins; hair-off leather; artificial fur; garments and other assembled fur articles; dressing service sold without ownership of the skin. |
| representative_product | Conditioned, saleable hair-on dressed furskin at the dressing site gate. |
| production_route | Record actual preservation, soaking, fleshing, tanning or tawing, drying, and finishing steps; dyeing is conditional. |
| market_state | Finished, conditioned, hair-on skin before garment assembly. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished hair-on dressed furskin material suitable for further fabrication. |
| How much | 1 kg of accepted finished material. |
| How well | Hair retained and skin dressed to the declared specification and moisture condition. |
| How long or cycle | One completed dressing batch; no use-phase duration is claimed. |
| reference_flow_link | `finished_furskin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished hair-on dressed furskin |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species; hair-on state; dressing route; preservation state of input; dye status; accepted output moisture condition; site and production period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_furskin` | Mass | kg | Measure accepted conditioned net output mass using `cp_output`; exclude transport packaging. |
| `batch_normalization` | all inventory rows | Row-specific property | row-specific unit per kg | Divide attributable batch exchange by accepted finished output kg for the same batch; retain the original meter and weighbridge records. |
| `electricity_conversion` | `electricity` | Net calorific value | MJ | Convert metered kWh to MJ with the physical identity 1 kWh = 3.6 MJ; do not use a fuel heating value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Preserved raw hair-on pelts received at the dressing site; species and preservation condition declared. |
| starting_condition_role | Purchased or transferred raw material with its upstream production represented separately. |
| product_classification_scope | Dressed furskin product only; not assembled articles or service transactions. |
| recursive_input_rule | A purchased already-dressed furskin used for re-dressing remains a separately identified input with upstream burden; do not relabel it raw pelt or net it against output. |
| upstream_dataset_requirement | Link raw pelt, purchased chemicals, water, electricity, gas and waste treatment to state- and geography-appropriate upstream datasets. |
| disclosure | Declare site gate, route, included steps, outsourced work, dye status, direct fuel combustion and treatment boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_included` | foreground dressing | Include receipt, soaking, fleshing, tanning or tawing, drying and finishing operations that turn raw hair-on pelts into accepted dressed material. | `fur-quality-2022`; `fur-tanning-2020` |
| `boundary_conditional` | route-specific operations | Include dyeing, oil application, drum cleaning and on-site fuel combustion only when performed; report any omitted or outsourced stage. | `fur-quality-2022`; `fur-activated-water`; `fur-tanning-2020` |
| `boundary_upstream` | incoming raw pelt and supplies | Keep upstream raw-pelt production and supply processes linked as background datasets, without treating those activities as measured dressing foreground. | `cpc30` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dress_furskin` | Integrated pelt preparation, tanning or tawing, drying and finishing | required | Every accepted finished batch; conditional materials are recorded only when actually used. | foreground transformation | 1 kg accepted finished furskin |

### Process: Integrated fur dressing (`dress_furskin`)

The process includes site operations from raw-pelt receipt through conditioned finished output. Record separate stage meters where available; allocate shared site meters only with documented physical drivers. Its chemical routes are alternatives in the actual batch recipe, not a requirement to charge every listed chemical [fur-quality-2022; fur-activated-water; fur-tanning-2020].

#### Inputs

##### Product flows

###### Preserved hair-on raw furskin (`raw_pelt`)

all batches; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Preserved hair-on raw furskin
- Flow property / unit: Mass / kg
- Amount rule: Input mass of preserved pelts accepted into the batch; record preservation state and moisture condition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Process Water (`process_water`)

all wet-processing batches; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Meter or weigh water added to soaking, rinsing and tanning; allocate measured batch total.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Sodium chloride (`sodium_chloride`)

when sodium chloride is charged; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass / kg
- Amount rule: Weigh purchased sodium chloride actually charged to preservation, soaking or pickling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Potassium aluminum sulfate (`potassium_alum`)

only for alum-tawing route; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Potassium aluminum sulfate
- Flow property / unit: Mass / kg
- Amount rule: Weigh the declared potassium alum formulation charged to alum tawing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Fish Oil (`fish_oil`)

only when fish oil is used; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Fish Oil `dacba994-e061-44ed-940e-61f7820422c6`
- Flow property / unit: Mass / kg
- Amount rule: Weigh fish oil charged for oil tannage or lubrication; do not count other oils as this flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Alternating current (`electricity`)

when purchased electricity is used; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record metered alternating-current electricity attributable to dressing; convert kWh to MJ by 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### natural gas in the gaseous state (`natural_gas`)

only when on-site natural gas is used; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Record metered gaseous natural gas used for on-site process heat or drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Loose hardwood sawdust (`hardwood_sawdust`)

only when sawdust drum cleaning is used; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Loose hardwood sawdust
- Flow property / unit: Mass / kg
- Amount rule: Weigh fresh sawdust added to drum cleaning, excluding reused material until replenished.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

#### Outputs

##### Product flows

###### Finished hair-on dressed furskin (`finished_furskin`)

all accepted output; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Finished hair-on dressed furskin
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`

##### Waste flows

###### Pelt flesh and fat trimmings (`fleshing_waste`)

when fleshing removes tissue; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Pelt flesh and fat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately collected flesh-side trimmings leaving the foreground site.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Spent fur-dressing aqueous liquor (`spent_liquor`)

when wet processing discharges liquor; collect batch records and normalize to 1 kg accepted finished output except for the reference output itself.

- Selected flow: Spent fur-dressing aqueous liquor
- Flow property / unit: Mass / kg
- Amount rule: Measure discharged aqueous liquor before on-site treatment; do not combine with sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared operations | First subdivide separately metered or weighed operations and avoid allocation where measured stage records identify a product batch. | `ghg-product` |
| `allocation_shared` | unavoidable shared utilities | If subdivision is impossible, assign common electricity, fuel and water using a documented causal driver such as stage operating time and rated load; disclose driver, numerator, denominator and residual. Do not allocate by output mass when it would hide route-specific energy differences. | `ghg-product` |
| `allocation_outputs` | recoverable co-products | Keep saleable recovered material separate from waste and document any physical or economic allocation used; show both gross exchanges and allocated burdens. | `ghg-product` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `dress_furskin` | finished output | batch weigh record | batch id; species; route; accepted net mass; moisture condition | Weigh saleable conditioned skins on calibrated scale excluding packaging. | kg | each batch | representative production period | dressing site | per 1 kg reference flow | calibration and acceptance records |
| `cp_material` | `dress_furskin` | pelt and chemicals | goods receipt and batch issue | batch id; material identity; input state; issued mass; returns | Reconcile supplier and batch issue records with calibrated weighing. | kg | each batch | representative production period | dressing site | per 1 kg reference flow | invoices, inventory reconciliation and scale checks |
| `cp_water` | `dress_furskin` | process water | meter record | batch id; meter start/end; shared-use driver | Read calibrated water meter and document any batch allocation. | kg | each batch or meter period | representative production period | dressing site | per 1 kg reference flow | meter calibration and reconciliation |
| `cp_energy` | `dress_furskin` | electricity and gas | meter and fuel record | batch id; kWh; gas m3; operating time; shared-use driver | Read separate electricity and gas meters; document batch attribution and kWh-to-MJ conversion. | MJ; m3 | each batch or meter period | representative production period | dressing site | per 1 kg reference flow | meter bills and allocation worksheet |
| `cp_waste` | `dress_furskin` | tissue waste and spent liquor | dispatch or treatment record | batch id; material identity; measured mass; treatment route | Weigh or meter each distinct waste stream before on-site treatment or dispatch. | kg | each batch | representative production period | dressing site | per 1 kg reference flow | transfer note, meter and treatment log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = q_batch / m_finished; q_batch is the attributable batch exchange in its row unit; m_finished is accepted finished mass in kg for the same batch. | q_batch; m_finished; cp_output | exchange per 1 kg accepted finished furskin |  |
| `convert_electricity` | `electricity` | MJ = kWh × 3.6. | kWh; cp_energy | MJ of electricity input |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | each batch | Declare species, hair-on state, actual route, preservation and final moisture state; do not mix raw and dressed skins. | batch traveller and acceptance record |
| `dq_completeness` | each batch | Reconcile input, accepted output, rejected product and separately identified waste; explain missing streams and shared meters. | mass-balance worksheet and utility reconciliation |
| `dq_time` | reporting period | Report site, period, batch coverage, outsourcing and allocation drivers. | production register and supplier or contractor records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished output | Confirm `finished_furskin` is hair-on, dressed, conditioned and weighed net in kg; reject raw pelt or wet-blue intermediate as an unqualified reference flow. | `cpc30`; `fur-activated-water` |
| `validate_inventory` | inventory rows | Check each exchange has an atomic material identity, route applicability, attributable quantity, unit and collection evidence; unresolved UUIDs remain explicit. | `fur-quality-2022`; `fur-tanning-2020` |
| `validate_mass` | batch records | Confirm every normalized batch row uses the same accepted output mass denominator and that waste streams are not netted against input. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dressed-furskin production dataset. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication. |
| allowed_use | Declared hair-on furskin route and market state at the stated site and period. |
| excluded_use | Raw furskin, hair-off leather, artificial fur, garments, and unqualified proxy substitution. |
| required_metadata | Species; preservation; route; dye status; moisture condition; site; period; production volume; allocation basis. |
| required_quality_disclosure | Data gaps, unresolved UUIDs, conditional steps, meter coverage, batch yield, waste treatment and source age. |
| update_trigger | Material change in route, species mix, input state, energy supply or product specification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc30` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product identity and adjacent exclusions |
| `fur-quality-2022` | literature | Gaidău, Amanatidou and Tonea, Fur Skin – A Valuable Material, Considerations on Quality Assessment, Leather and Footwear Journal 22(2), 2022, https://revistapielarieincaltaminte.ro/revistapielarieincaltaminteresurse/en/fisiere/full/vol22-nr2/article5_vol22_issue2.pdf | Figure 1 identifies preparation, industrial wet processing, tanning, dyeing and finishing stages; qualitative only |
| `fur-activated-water` | literature | Danylkovych, Lishchuk and Romaniuk, Use of electrochemically activated aqueous solutions in the manufacture of fur materials, SpringerPlus 5:214, 2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC4771650/ | Rabbit and nutria fur soaking, degreasing, alum and chromium tanning, greasing and drying; experimental route only |
| `fur-tanning-2020` | literature | Yefimchuk et al., Multicriteria Compromise Optimization for Leather and Fur Skin Materials Tanning Technology, Leather and Footwear Journal 20(2), 2020, https://lib.lntu.edu.ua/sites/default/files/2021-01/article9_vol20_issue2.pdf | Rabbit fur wetting, pickling, tanning, greasing and drying sequence; experimental route only |
| `ghg-product` | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | allocation avoidance and disclosure method; applied to this product by author judgement |
