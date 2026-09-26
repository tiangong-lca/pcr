---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-articles-of-leather-or-composition-leather-including-articles-of-a-kind-used-in-m-48f68eb5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other articles of leather or composition leather (including articles of a kind used in machinery or mechanical appliances or for other technical uses) n.e.c.

## 1. Scope and Applicability

This rule covers an accepted finished article whose defining material is leather or leather-fibre composition leather and that is not assigned to a more specific leather-goods class. Declare the article's function, design, material share and bill of materials. The starting foreground process receives finished leather or composition leather and components and ends with accepted, packaged article at the factory gate. Upstream supply datasets are required for inputs. Use and end-of-life are outside this product-stage rule. The residual CPC title and neighboring specific classes are documented in `un-cpc-2025`; classify the actual article before applying this rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-articles-of-leather-or-composition-leather-including-articles-of-a-kind-used-in-m-48f68eb5 |
| classification_refs | CPC 3.0 29290, candidate correspondence only; mapping acceptance is separate. |
| covered_products | Finished miscellaneous leather or leather-fibre composition-leather articles, including technical cut or assembled articles, when not classified more specifically. |
| excluded_products | Unconverted leather sheet; luggage and handbags; saddlery and harness; watch straps; footwear; apparel and clothing accessories; products whose defining material is not leather or composition leather. |
| representative_product | One specified finished leather or composition-leather article with declared function and configuration. |
| production_route | Cutting or punching of purchased finished sheet, followed by applicable stitching, riveting or bonding, inspection and packing. |
| market_state | Accepted finished article at factory gate, net of transport packaging; packaging is a separate inventory input when supplied. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One specified accepted finished miscellaneous leather or composition-leather article. |
| How much | 1 kg accepted net article mass. |
| How well | Meets the declared drawing, material specification and acceptance criteria. |
| How long or cycle | One production lot at factory gate; service life is outside this product-stage boundary. |
| reference_flow_link | `finished_article` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other finished article of leather or composition leather, n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Article type and technical function; configuration and dimensions; natural or leather-fibre composition-leather route; leather species where relevant; acceptance specification; factory geography and period; net output mass. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_article` | Mass | kg | Measure accepted net article mass with a calibrated scale, excluding transport packaging; reconcile rejected units and returns. |
| `inventory_basis` | all inventory rows | Mass or flow-specific property | row unit | Report each applicable exchange per 1 kg reference flow using the same accepted output lot and mass denominator; retain raw meter and ledger records. |
| `electricity_conversion` | `electricity_ac` | Net calorific value | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; retain the original kWh record and voltage/supply disclosure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished leather or leather-fibre composition-leather sheet and other specified inputs enter fabrication. |
| starting_condition_role | Foreground gate-to-gate fabrication start; upstream supply burdens are linked as separate datasets. |
| product_classification_scope | One specified article within the residual leather-article boundary, subject to actual product classification review. |
| recursive_input_rule | If a purchased input is another article covered by this PCR, represent it as a separate upstream dataset and stop same-category recursion at the declared purchase boundary. |
| upstream_dataset_requirement | Link traceable upstream datasets for leather or composition leather, thread, adhesive, rivets, electricity and packaging actually used; disclose unresolved matches. |
| disclosure | Record material composition, function, included operations, product mass, co-products, offcut treatment, packaging and excluded stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | product_stage | Include fabrication from purchased finished material through accepted factory-gate article and the upstream supply of all included inputs. | `un-cpc-2025` |
| `boundary_conditional_routes` | foreground_operations | Include stitching, riveting, bonding and box packing only when recorded for the declared product configuration. | `ilo-isco68-1969` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `article_fabrication` | Leather-article cutting, assembly and inspection | `required` | Always for an accepted article; individual joining and packing exchanges apply only when present in the bill of materials. | Foreground production | per 1 kg reference flow |

### Process: Leather-article cutting, assembly and inspection (`article_fabrication`)

#### Inputs

##### Product flows

###### Finished bovine leather sheet (`finished_bovine_leather`)

When natural leather is used, record only incoming accepted finished bovine leather cut for this article.

- Selected flow: Finished bovine leather sheet
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-2025`

###### Composition leather sheet made from leather fibres (`composition_leather_sheet`)

Include only when leather-fibre composition leather is actually used; supplier composition and incoming mass must be documented.

- Selected flow: Composition leather sheet made from leather fibres
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-2025`

###### Polyester sewing thread (`polyester_sewing_thread`)

Include only for stitched construction; weigh issued thread and reconcile unused returns.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ilo-isco68-1969`

###### Solvent free polyurethane adhesive (`pu_adhesive`)

Include only when this exact adhesive formulation is used for bonding; use net consumed formulated mass.

- Selected flow: Solvent free polyurethane adhesive `669d2f68-79e9-47c2-96fa-316fc7d33b62`
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ilo-isco68-1969`

###### Steel rivet (`steel_rivet`)

Include only where steel rivets fasten the article; use issued mass less returned unused rivets.

- Selected flow: Steel rivet
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ilo-isco68-1969`

###### Purchased alternating-current electricity (`electricity_ac`)

Meter cutting, sewing, pressing and assembly electricity attributable to the accepted article lot.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### corrugated board boxes (`corrugated_box`)

Include only where the producer supplies a corrugated box with the finished article; weigh boxes used.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record the attributable exchange from foreground records per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Other finished article of leather or composition leather, n.e.c. (`finished_article`)

Weigh accepted finished articles net of transport packaging; one reference flow is 1 kg of this accepted output.

- Selected flow: Other finished article of leather or composition leather, n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `un-cpc-2025`

##### Waste flows

###### Segregated leather offcut (`leather_offcut`)

When bovine leather is cut, segregate and weigh offcuts leaving the fabrication process.

- Selected flow: Bovine leather cutting offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh segregated waste per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared_operations | Prefer separate meters and material issue records for each article family and production line. | |
| `allocation_shared` | unavoidable_shared_inputs | If direct subdivision is impossible, allocate shared input by measured machine time for equipment energy or measured net material issue for material handling; record numerator, denominator and sensitivity. | |
| `allocation_recycling` | leather_offcuts | Record offcut mass and actual destination separately; do not assume a recycling credit without an explicit downstream system and allocation method. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `article_fabrication` | accepted article | weighing and acceptance log | article ID; configuration; accepted net mass; rejected mass | Weigh accepted articles on a calibrated scale without transport packaging and reconcile acceptance records. | kg | each lot | declared production period | article line | per 1 kg reference flow | calibration record; signed acceptance log |
| `cp_material` | `article_fabrication` | each material input | issue and return ledger | material SKU; formulation; issued mass; returned mass; lot | Record net material consumed for this article lot; verify supplier specification and bill of materials. | kg | each lot | declared production period | article line | per 1 kg reference flow | supplier specification; issue ledger |
| `cp_energy` | `article_fabrication` | purchased AC electricity | electricity meter | meter ID; kWh; period; voltage; article lot | Read a dedicated meter or allocate shared meter electricity by documented machine time; convert kWh to MJ. | MJ | each lot | declared production period | article line | per 1 kg reference flow | meter readings; allocation worksheet |
| `cp_waste` | `article_fabrication` | bovine leather offcut | waste weighing and transfer log | material ID; offcut mass; destination; lot | Segregate and weigh cutting offcuts before transfer to treatment or recovery. | kg | each lot | declared production period | article line | per 1 kg reference flow | waste scale record; transfer note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Record article configuration, material species or composition, joining method and actual supplier product; do not substitute a category proxy for unresolved UUIDs. | drawing; bill of materials; supplier specification |
| `dq_mass_balance` | material and output rows | Reconcile issued material, accepted product, offcuts and documented rejects by material route; explain any unexplained mass difference. | issue ledger; scales; reject log |
| `dq_period` | all rows | Use the same site, article configuration and declared production period for numerator and accepted output denominator. | lot and meter timestamps |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product | Require one article configuration, accepted net output mass and 1 kg reference basis; reject packaged gross mass as the denominator. | |
| `validate_atomic_flows` | inventory | Require a separate physical exchange for each input, waste and output; check conditional rows against actual bill of materials. | |
| `validate_uuids` | unresolved_flows | Do not claim a public Tiangong match for unresolved rows; require later exact state-100 direct-read review before release. | |
| `validate_balance` | material_balance | Check leather and composition-leather issued amounts against accepted articles, segregated offcuts and rejects, and disclose unexplained differences. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-stage article fabrication dataset. |
| downstream_use | May feed process or lifecyclemodel after upstream input datasets are linked and unresolved identities are reviewed. |
| allowed_use | One declared article configuration, material route, site and period. |
| excluded_use | Automatic use as a generic factor for all CPC 29290 goods, use-phase or end-of-life modelling, and unreviewed UUID substitution. |
| required_metadata | Article function, configuration, leather material specification, mass basis, joining operations, packaging, site and period. |
| required_quality_disclosure | Unresolved flow identities, missing source-backed ranges, shared-meter allocation, rejects and waste destinations. |
| update_trigger | Change in article design, leather composition, joining technology, site energy supply or packing specification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification identity and adjacent exclusions, not a production factor. |
| `ilo-isco68-1969` | `official_guidance` | International Labour Office, International Standard Classification of Occupations, revised edition 1968, published 1969, p. 193, https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf | Cutting, sewing, fastening and assembly operations only; historical occupational description, not quantitative LCA evidence. |
