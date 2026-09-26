---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.luggage-handbags-and-the-like-of-leather-composition-leather-plastic-sheeting-textile-m-ad74b041
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---


# Luggage, handbags and the like, of leather, composition leather, plastic sheeting, textile materials, vulcanized fibre or paperboard; travel sets for personal toilet, sewing or shoe or clothes cleaning


## 1. Scope and Applicability


This rule covers accepted finished luggage, handbags and similar carrying or storage articles, and personal toilet, sewing, shoe-care or clothes-cleaning travel sets sold as one unit at the factory gate. Declare subtype, outer material, lining, structural panels, size or capacity, closure, set contents, production site and reference year separately. Per-item results are not directly comparable across different capacities, functions or expected lifetimes. A leather handbag is the database-backed representative; other subtypes need their own verified finished-flow identity.


Include upstream datasets for purchased materials and components, cutting, stitching, bonding, assembly, inspection and packaging shipped with the article; include contents sold inside a travel set. Retail, use-phase cleaning and maintenance, consumer transport and end-of-life are outside this factory-gate boundary. If the site itself tans leather, weaves fabric or forms panels, add those as declared foreground processes rather than substituting this assembly process.


## 2. Product Category Identity


| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.luggage-handbags-and-the-like-of-leather-composition-leather-plastic-sheeting-textile-m-ad74b041 |
| classification_refs | CPC 3.0 29220 (`un-cpc-2025`) |
| covered_products | Finished luggage, handbags, similar articles and specified travel sets |
| excluded_products | Separately sold raw materials, goods-packing sacks, saddlery and repair services |
| representative_product | One accepted finished leather handbag |
| production_route | Purchased materials and components, cutting, stitching or bonding, assembly and packing; declare applicable route from bill of materials |
| market_state | Complete, accepted, saleable and unused article |


## 3. Reference Flow


| Field | Value |
| --- | --- |
| What | Carry or store goods, or provide the declared travel-set function |
| How much | One accepted finished article |
| How well | Declare capacity, dimensions, material, closure, load rating and set contents; do not assume equivalent performance |
| How long or cycle | Declare expected years or use cycles; factory-gate inventory excludes use phase |
| reference_flow_link | `finished_leather_bag` |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Leather Bag `3a920bac-cab3-4a8c-8a9c-71875390afa8` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | product subtype; outer and lining material; capacity and dimensions; load rating; set contents; packaging; production site; reference year; acceptance state; expected service life |


The verified Leather Bag UUID applies only to the representative leather-bag dataset. Other subtypes must not reuse it; verify their own finished flow and record it in the data package.


## 4. Measurement and Unit Rules


| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_item_basis` | `finished_leather_bag` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One reference flow is one accepted unused finished article of a declared configuration; reject counts do not enter the denominator. |
| `mass_records` | material and waste records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize weighed net material amounts to accepted articles in the same lot; retain weighing evidence. |
| `electricity_units` | `ac_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | When meters record kWh, convert using 1 kWh = 3.6 MJ and retain raw readings. |


## 5. System Boundary


### Boundary Abstraction


| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished materials and components enter the cutting and assembly site |
| starting_condition_role | Foreground assembly starting point; upstream material production uses separate datasets |
| product_classification_scope | Finished CPC 3.0 29220 articles; each dataset declares one concrete subtype |
| recursive_input_rule | If a purchased article from the same category is included in a set, record it as a separate product input and do not recount its manufacturing in this site |
| upstream_dataset_requirement | Purchased leather, textile, plastic, paperboard, metal parts, adhesive, travel-set contents and packaging require upstream datasets matching their material state |
| disclosure | Disclose any on-site tanning, weaving, forming, rework, outsourced work and transport exclusions |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all declared datasets | Include operations through accepted finished article and shipped packaging at factory gate; retain upstream data for purchased materials and set contents. | `un-cpc-2025` |
| `boundary_no_double_count` | same-category purchased inputs | Record a purchased same-category finished article once as an input, without duplicating its upstream production inside this foreground site. | `ghg-product-2011` |


## 6. Process Inventory Structure


### Process Map


| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bag_fabrication | Cutting, stitching, bonding, assembly, inspection and packing | required | All declared articles; each material row applies only for its declared route | foreground manufacture | per one accepted finished article |


### Process: Article fabrication and packing (`bag_fabrication`)


Add separately named atomic rows for every actually used bill-of-material input and waste stream absent from these representative rows; retain individual identity and amount evidence. Record each travel-set content item separately.


#### Inputs
##### Product flows


###### Finished bovine leather sheet (`bovine_leather`)

Include this single exchange when leather or mixed-material article with finished bovine leather panels. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Finished bovine leather sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable finished bovine leather sheet in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: leather or mixed-material article with finished bovine leather panels


###### Composition leather sheet (`composition_leather`)

Include this single exchange when article using composition leather panels. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Composition leather sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable composition leather sheet in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article using composition leather panels


###### Woven polyester fabric (`polyester_fabric`)

Include this single exchange when article with woven polyester shell or lining. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Woven polyester fabric
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable woven polyester fabric in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article with woven polyester shell or lining


###### Polyvinyl chloride sheet (`pvc_sheet`)

Include this single exchange when article with PVC sheet panels. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Polyvinyl chloride sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable polyvinyl chloride sheet in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article with PVC sheet panels


###### Vulcanized fibre sheet (`vulcanized_fibre`)

Include this single exchange when article with vulcanized fibre structural panels. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Vulcanized fibre sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable vulcanized fibre sheet in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article with vulcanized fibre structural panels


###### Paperboard sheet (`paperboard_panel`)

Include this single exchange when article with paperboard structural panels. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Paperboard sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable paperboard sheet in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article with paperboard structural panels


###### Polyester sewing thread (`sewing_thread`)

Include this single exchange when sewn construction using polyester thread. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable polyester sewing thread in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: sewn construction using polyester thread


###### Metal-tooth zipper (`metal_zipper`)

Include this single exchange when article fitted with a metal-tooth zipper. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Metal-tooth zipper
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable metal-tooth zipper in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: article fitted with a metal-tooth zipper


###### Water-based polyurethane adhesive (`pu_adhesive`)

Include this single exchange when bonded construction using water-based polyurethane adhesive. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Water-based polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable water-based polyurethane adhesive in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: bonded construction using water-based polyurethane adhesive


###### Alternating current (`ac_electricity`)

Include this single exchange when purchased alternating-current electricity consumed in fabrication. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure attributable alternating current in MJ per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Inclusion condition: purchased alternating-current electricity consumed in fabrication


###### corrugated board boxes (`corrugated_box`)

Include this single exchange when saleable article packed in a corrugated board box. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable corrugated board boxes in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Inclusion condition: saleable article packed in a corrugated board box


##### Waste flows

No waste input is assumed.
##### Elementary flows

No direct natural-resource input is assumed for this assembly process.


#### Outputs
##### Product flows


###### Leather Bag (`finished_leather_bag`)

Include this single exchange when representative accepted finished leather handbag. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Leather Bag `3a920bac-cab3-4a8c-8a9c-71875390afa8`
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished`
- Inclusion condition: representative accepted finished leather handbag


##### Waste flows


###### Finished leather cutting offcuts (`leather_offcuts`)

Include this single exchange when finished leather cutting generates segregated offcuts. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: Finished leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable finished leather cutting offcuts in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Inclusion condition: finished leather cutting generates segregated offcuts


###### PVC (`pvc_offcuts`)

Include this single exchange when PVC sheet cutting generates segregated PVC scrap. Use the actual bill of materials and lot records; an absent route is recorded as not applicable.

- Selected flow: PVC `cacd273c-d5c5-4f38-91c2-660d8a86498b`
- Flow property / unit: Mass / kg
- Amount rule: Measure attributable pvc in kg per reference flow from the linked foreground record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Inclusion condition: PVC sheet cutting generates segregated PVC scrap


##### Elementary flows

Add any measured direct releases as separate chemical species and receiving compartments from site records; do not aggregate them as “emissions to air.”


## 7. Allocation and Co-product Handling


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | shared cutting and assembly operations | First subdivide shared operations by traceable production lot, equipment and meter to assign material and energy directly. | `ghg-product-2011` |
| `allocate_physical` | unavoidable shared inputs | If subdivision is impossible, allocate using a documented physical causal relation and disclose denominator, basis and residual; if none is valid, declare and justify another method. | `ghg-product-2011` |
| `scrap_distinction` | offcuts and saleable coproducts | Distinguish saleable co-products from offcuts sent for treatment; do not count the same output twice as treated waste and credited co-product. | `ghg-product-2011` |


## 8. Foreground Data Collection, Calculation, and Quality Rules


### Data Collection Protocols


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | bag_fabrication | specific purchased material or component | purchase, issue and batch bill-of-material records | material identity; lot; net input mass; returns; accepted item count | Record on calibrated scale or traceable net-mass document; subtract returns and reconcile same-lot bill of materials. | kg | each production lot | representative production year | manufacturing site and product subtype | per reference flow | weighing record; purchase record; bill of materials; acceptance record |
| `cp_electricity` | bag_fabrication | alternating-current electricity | submeter and master-meter records | opening and closing readings; meter scope; lot; accepted item count | Prefer submetering; document auditable attribution for shared electricity. | MJ | each production lot | representative production year | manufacturing site and product subtype | per reference flow | meter calibration; bill; attribution record |
| `cp_waste` | bag_fabrication | specific segregated offcut waste | segregated weighing and transfer records | waste material; lot; net mass; destination; accepted item count | Weigh leather and PVC offcuts separately and record reuse, sale or disposal. | kg | each production lot | representative production year | manufacturing site and product subtype | per reference flow | weighing record; transfer note; destination evidence |
| `cp_finished` | bag_fabrication | accepted finished article | quality acceptance and inventory records | subtype; configuration; accepted count; rejected count; capacity; dimensions | Reconcile same-lot acceptance and inventory records item by item; exclude rejects from denominator. | item | each production lot | representative production year | manufacturing site and product subtype | per reference flow | acceptance; inventory and specification records |


### Calculation Rules


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_per_item` | all inventory rows | Amount per reference flow = attributable net exchange for the same lot / accepted finished-article count for that lot; do not pool unlike subtypes or configurations. | lot quantity; accepted item count; cp_finished | amount per reference flow |  |
| `check_material_balance` | material and offcut rows | Reconcile same-lot material input, material in accepted articles, segregated offcuts, rework and other identified destinations; record unexplained residual. | cp_materials; cp_waste; cp_finished | documented mass-balance residual | `ilo-isco68` |


### Data Quality Requirements


| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | each declared material and finished subtype | Check actual material, finished state, flow type, property and unit for each row; unresolved UUIDs must not be replaced with proxy flows. | bill of materials; direct flow evidence |
| `dq_coverage` | each production lot | Record route applicability, set contents, rework, outsourced stages and any direct emissions; missing data are not zero. | lot reconciliation; site log |
| `dq_time` | site data | Declare site, year and technology; record temporal coverage and exceptional batches. | meter logs; production records |


## 9. Validation Rules


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_item_denominator` | reference and all inventory rows | Confirm normalization uses accepted items of one subtype and configuration; do not use the Leather Bag UUID for another subtype. |  |
| `validate_material_routes` | all material and waste rows | Check every applicable material, component, set content, package and offcut has a separate flow and lot record, with evidence for absent routes. | `ilo-isco68` |
| `validate_allocation` | shared operations | Check consistency and completeness of direct assignment and shared-input allocation, including disclosed residuals. | `ghg-product-2011` |


## 10. Published Dataset Profile


| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one concrete finished subtype |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Production-stage models matching declared subtype, material, function, capacity, site and year |
| excluded_use | No direct per-item comparison across unlike capacity or service life; no representation of unverified other subtypes |
| required_metadata | subtype; capacity and dimensions; major materials; set contents; configuration; site; year; reference flow; packaging; production lots |
| required_quality_disclosure | data coverage; estimates and gaps; allocation; unresolved UUID rows; mass-balance residual |
| update_trigger | change in main material, manufacturing route, set contents, site or representative year |


## 11. Data Sources


| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification identity and adjacent categories |
| `ilo-isco68` | official_guidance | International Labour Office, International Standard Classification of Occupations, revised edition 1968, p. 193 (PDF p. 199). https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf | qualitative leather-goods cutting, sewing and assembly decomposition |
| `ghg-product-2011` | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard (2011), section 9.2, pp. 62–63. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | shared-process subdivision and allocation hierarchy; not amount-range evidence |
