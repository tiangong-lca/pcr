---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-any-material-by-removal-of-material-by-laser-or-other-light-o-7acc4d55
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machine-tools for working any material by removal of material, by laser or other light or photon beam, ultra-sonic, electro-discharge, electro-chemical, electron beam, ionic beam or plasma arc processes, water-jet cutting machines

## 1. Scope and Applicability

This PCR covers complete industrial machine tools whose defining function is removal of material by laser or another light or photon beam, ultrasonic action, electrical discharge, electrochemical action, electron beam, ion beam, plasma arc, or water jet. It applies to an accepted complete machine at the manufacturer's factory gate, including the frame, installed motion and drive equipment, installed controls, the declared material-removal technology, and factory-installed auxiliaries that form part of the sale configuration.

It excludes machining centres, transfer machines, lathes, drilling, boring, milling, threading, grinding, sawing, conventional metal-forming machines, separately supplied tools and accessories, spare parts, consumables supplied for customer operation, site installation, distribution, use, maintenance, and end-of-life. A foreground data package shall declare exactly one technology route and one accepted sale configuration. Additional route-specific exchanges shall be recorded as separate concrete flows; they shall not be combined into selector or umbrella rows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-any-material-by-removal-of-material-by-laser-or-other-light-o-7acc4d55 |
| classification_refs | CPC 3.0: 44211 |
| covered_products | Complete laser/light/photon-beam, ultrasonic, electro-discharge, electrochemical, electron-beam, ion-beam, plasma-arc, and water-jet material-removal machine tools |
| excluded_products | Conventional cutting or forming machine tools; separately supplied tools, accessories, parts, operating consumables, and non-machine services |
| representative_product | One accepted complete material-removal machine tool in its declared sale configuration |
| production_route | Purchased-component receipt, frame preparation where performed, coating where performed, final assembly, wiring, functional testing, and acceptance |
| market_state | Factory-gate accepted complete machine, without transport packaging and customer-site installation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An accepted complete material-removal machine tool of one declared technology and sale configuration |
| How much | 1 kg of accepted net machine mass |
| How well | Complete, functional, and released by the manufacturer's acceptance procedure |
| How long or cycle | At factory-gate release; no service-life claim is included |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete material-removal machine tool |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | material-removal technology; model; sale configuration; installed rated power; work envelope; controlled axes; accepted net mass M; geography; production period; included auxiliaries; excluded transport packaging |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, the product description, the reference-flow comment, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `inventory_normalization` | all inventory rows except `finished_machine` | Row-specific property | Row-specific unit | Collect q_item per one accepted finished machine and apply `normalize_mass` so every exchange is reported per 1 kg reference flow. |
| `electricity_energy_basis` | `electricity_medium_voltage` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy basis; document any kWh-to-MJ conversion before applying `normalize_mass`. |

## 5. System Boundary

The foreground boundary begins when purchased components and materials enter the reporting manufacturing site and ends when the complete machine passes acceptance and is released at the factory gate. Include attributable receipt, internal handling, frame preparation, coating, assembly, wiring, software loading required for acceptance, functional testing, rework, and waste handling. Upstream production of purchased inputs shall be represented by linked datasets. Distribution, customer-site installation, operation, maintenance, consumable use during customer operation, and end-of-life are outside this PCR.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components and materials received at the reporting manufacturing site |
| starting_condition_role | Foreground manufacturing entry point |
| product_classification_scope | Complete machines within the semantic boundary of CPC 3.0 subclass 44211 |
| recursive_input_rule | A purchased complete machine in the same category shall be recorded as one upstream product input with its own dataset and shall not be decomposed again in the foreground process. |
| upstream_dataset_requirement | Use supplier-specific or representative upstream datasets for each purchased input and disclose geography, technology, and data age. |
| disclosure | Declare the technology route, included factory operations, purchased-versus-in-house components, acceptance state, and all excluded stages. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include only attributable manufacturing through accepted factory-gate release and disclose every omitted factory operation. |  |
| `boundary_route_specificity` | technology-specific exchanges | Record each present route-specific material, gas, electrode, abrasive, dielectric, electrolyte, water, vacuum-system input, and resulting waste or emission as a separate concrete exchange. |  |
| `boundary_upstream_components` | purchased components | Link upstream product datasets and avoid double counting their embedded manufacturing burdens in site records. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly` | Final assembly, finishing, testing, and acceptance | required | Always for the accepted complete machine | foreground_production | one accepted finished machine; normalize by M |

### Process: Final assembly, finishing, testing, and acceptance (`final_assembly`)

#### Inputs

##### Product flows

###### Fabricated machine frame (`machine_frame`)

Record the net mass of the one fabricated frame installed in the accepted configuration. The TianGong flow UUID remains unresolved.

- Selected flow: Fabricated machine frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_bom_mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_mass`
- Sources:

###### Electronic control unit (`electronic_control_unit`)

Record the net mass of the electronic control unit installed in the accepted configuration.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_bom_mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_mass`
- Sources:

###### Electric motor (`electric_motor`)

Record the net mass of each complete electric motor installed in the accepted configuration, aggregated as one exchange of this exact flow.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_bom_mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_mass`
- Sources:

###### Medium-voltage electricity (`electricity_medium_voltage`)

Record metered medium-voltage electricity attributable to receipt, preparation, coating, assembly, wiring, testing, rework, and acceptance. The flow UUID remains unresolved: the former identity is no longer publicly readable according to the current independent audit, and the replacement candidate review did not establish an exact medium-voltage identity. Retain the measured voltage and energy basis in the foreground record.

- Selected flow: electricity, medium voltage
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Powder coating (`powder_coating`)

Record powder coating issued to the machine only when coating is performed within the foreground boundary.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_coating.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete machine (`finished_machine`)

Record exactly the accepted net mass M of the complete machine configuration released at the factory gate. The TianGong product-flow UUID remains unresolved.

- Selected flow: Complete material-removal machine tool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Steel scrap (`steel_scrap`)

Record segregated steel scrap attributable to fitting or machining of the machine frame within the foreground boundary.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_waste_mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Powder coating waste (`powder_coating_waste`)

Record collected powder coating waste attributable to the machine only when powder coating occurs within the foreground boundary.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply `normalize_mass` to q_item; reference_mass; cp_waste_mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all foreground exchanges | Attribute BOM masses, meters, work orders, and waste tickets directly to the accepted machine configuration before using allocation. |  |
| `allocation_shared` | shared site records | Subdivide by process or meter. If subdivision is unavailable, use a documented causal driver such as machine-hours or measured equipment load; disclose the driver and sensitivity. |  |
| `allocation_scrap` | steel scrap and coating waste | Report the waste exchange at the foreground boundary without subtracting an unverified recycling credit. Model any downstream recovery in the receiving waste-treatment dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly` | reference product mass | calibrated weighing record | model; configuration; serial number; acceptance record; accepted net mass M; packaging exclusion | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration or each machine | reporting period | reporting manufacturing site | accepted net mass per machine | calibration certificate; signed acceptance record; configuration reconciliation |
| `cp_bom_mass` | `final_assembly` | installed component mass | approved BOM and supplier mass record | model; configuration; part number; flow identity; installed quantity; net unit mass; rejected quantity | Reconcile the as-built BOM to supplier mass records or calibrated weighing for the accepted serial number. | kg | each accepted configuration | reporting period | reporting manufacturing site and named suppliers | installed net mass / accepted machines | released BOM; supplier record; deviation log |
| `cp_energy` | `final_assembly` | site electricity | meter and work-order record | meter id; start; end; process equipment; work order; accepted machines; conversion factor | Read calibrated meters; subtract unrelated loads or allocate shared loads using the disclosed causal rule. | MJ | each production batch, monthly at minimum | representative reporting period | included foreground operations | attributable electricity / accepted machines | meter calibration; reconciliation; allocation worksheet |
| `cp_coating` | `final_assembly` | powder coating input | issue, return, and batch record | batch; material id; issued mass; returned reusable mass; accepted machines | Reconcile issued coating with returned reusable material for the accepted machine work order. | kg | each coating batch | reporting period | on-site coating operation | net coating issued / accepted machines | stock reconciliation; work order; scale calibration |
| `cp_waste_mass` | `final_assembly` | segregated waste output | weighed waste ticket | waste identity; container tare; gross mass; work order; destination | Weigh each segregated waste stream, remove tare, and attribute it to the accepted-machine work order. | kg | each waste movement | reporting period | included foreground operations | attributable net waste / accepted machines | scale calibration; waste ticket; destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | machine_frame; electronic_control_unit; electric_motor; electricity_medium_voltage; powder_coating; steel_scrap; powder_coating_waste | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass; cp_bom_mass; cp_energy; cp_coating; cp_waste_mass | q_ref |  |
| `reconcile_reference_output` | `finished_machine` | Confirm that the reported output is exactly 1 kg after dividing the accepted output mass M by the same M. | M; cp_mass | 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Match model, serial number, material-removal technology, sale configuration, and acceptance record across all protocols. | configuration reconciliation |
| `dq_mass_balance` | installed components and wastes | Explain the relationship among received component masses, installed masses, removed materials, wastes, and accepted net mass without forcing unlike items into one balance. | BOM, issue records, waste tickets, acceptance mass |
| `dq_temporal` | all foreground records | Use one representative reporting period and disclose shutdowns, prototypes, rework campaigns, and abnormal production. | dated meters, work orders, and acceptance records |
| `dq_completeness` | route-specific exchanges | Confirm that every material, gas, electrode, abrasive, dielectric, electrolyte, water, vacuum-system input, waste, and direct emission present for the declared route is represented as its own concrete exchange. | route checklist and signed completeness review |
| `dq_uuid` | all selected flows | Use only state-code-100 Tiangong identities whose product state, flow type, classification, property, unit group, technology, geography, and comment are compatible; keep unresolved identities explicit. | finalized UUID search receipts |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Verify one accepted configuration, M in kg, the packaging exclusion, and the exact 1 kg output normalization. |  |
| `validate_inventory` | inventory | Reject combined or selector flows, missing collection protocols, unconverted per-machine amounts, and route-specific exchanges hidden in notes. |  |
| `validate_bom` | component inputs | Reconcile installed quantities and masses to the as-built BOM and explain substitutions, rework, and rejected components. |  |
| `validate_waste` | waste outputs | Verify waste identity, tare removal, attribution, destination, and absence of unverified avoided-burden credits. |  |
| `validate_completeness` | data package | Fail completion when the declared technology route or included factory operation lacks its concrete inputs, wastes, and direct emissions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset for one accepted machine configuration |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-system modelling that matches the declared technology, configuration, geography, period, and factory-gate boundary |
| excluded_use | Generic representation of conventional machine tools; operational energy or consumables; site installation; maintenance; end-of-life; undisclosed technology mixing |
| required_metadata | model; serial or configuration family; material-removal technology; sale configuration; M; work envelope; rated power; controlled axes; geography; period; included operations; data sources |
| required_quality_disclosure | meter coverage; BOM coverage; mass method; allocation; route completeness; unresolved UUIDs; missing empirical ranges; deviations |
| update_trigger | material technology or configuration change; changed production site or process; new accepted Tiangong identity; improved independent range evidence; significant meter or BOM correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 44211 identity and adjacent subclass exclusions |
