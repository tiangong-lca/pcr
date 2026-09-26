---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.lathes-for-removing-metal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lathes for removing metal

## 1. Scope and Applicability

This candidate PCR covers factory-gate manufacture of one complete, accepted lathe intended for removing metal. It is a foreground-data rule set, not a product-specific bill of materials, performance claim, or use-phase model. Collect configuration-specific records. Exclude parts and accessories alone, other machine-tool categories, refurbished machines, installation, use and end of life.

The defining operation is turning a metal workpiece about the spindle axis against a cutting tool. Conventional and CNC lathes can use these collection rules when their principal product function remains turning; milling-centred machining centres and metalworking services are outside this identity. Record control mode, work envelope, axis configuration and supplied accessories so unlike configurations are not pooled into a nominal average.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.lathes-for-removing-metal` |
| classification_refs | CPC 3.0 `44213` — Lathes for removing metal |
| covered_products | Complete metal-removing lathes accepted for delivery from the manufacturing site |
| excluded_products | Parts and accessories alone; other machine-tool categories; refurbished machines; installation and use |
| representative_product | One complete lathe of one declared configuration |
| production_route | Configuration-specific machining, assembly and acceptance testing at one manufacturing site |
| market_state | New product at factory gate |

Representative original check: the Grizzly G4003G manual (March 2022 revision) identifies cast-iron and steel components, an AC induction motor, tapered roller spindle bearings, separate dispatch packaging and lubricant specifications. This supports collection categories, not a universal BOM, alloy grade or manufacturing quantity. Its epoxy finish is counterevidence to treating polyester powder as universal. Grey-iron grade, low-alloy bar and cable formulation must be established by actual procurement records. Source: `grizzly-g4003g-manual-2022`.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete accepted lathe for removing metal, of the declared configuration |
| How much | `M kg` net accepted mass |
| How well | Meets the manufacturer's declared acceptance specification |
| How long or cycle | One manufactured and accepted machine |
| reference_flow_link | `finished_lathe` |

| Field | Value |
| --- | --- |
| Reference amount | `M` |
| Reference product flow | Complete accepted lathe for removing metal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer; site; model; configuration; control mode; work envelope; axis configuration; supplied accessories; serial number or manufacturing-order identifier; accepted net mass; acceptance date |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass_measurement | reference product | Mass | kg | `M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass.` |
| electricity_measurement | `alternating_current` | Net calorific value | MJ | Record purchased alternating-current energy from a dedicated meter or documented manufacturing-order meter in MJ. |
| fluid_measurement | `water_soluble_metalworking_fluid_concentrate` | Mass | kg | Record the concentrate quantity issued to the manufacturing order in kg; do not substitute a mixed water-and-concentrate total. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufacturing-order inputs enter machining, assembly and acceptance testing at the declared site. |
| starting_condition_role | Factory foreground inventory start. |
| product_classification_scope | CPC 3.0 `44213`; classification identifies the category but does not supply a bill of materials. |
| recursive_input_rule | Model each purchased material, component, energy input and service with an appropriate upstream dataset; do not embed upstream burdens in the foreground quantity. |
| upstream_dataset_requirement | Disclose each linked upstream dataset, geography, technology and version. |
| disclosure | State configuration, site, accepted net mass, measurement basis, material/component records and any excluded manufacturing step. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_factory_gate | Finished lathe | Include manufacture through acceptance at the declared site; exclude installation, use, maintenance and end of life. |  |
| boundary_recursive_inputs | Purchased inputs | Record foreground quantities separately from linked upstream datasets. |  |
| boundary_machining_fluid | Metal-removing machining | Collect the actual metalworking-fluid formulation and issue quantity where the declared route uses it. | `jrc-bemp-fabricated-metal-products-2020` |

Machine in the measurement rules means the complete lathe. Accepted net mass includes installed accessories and retained first-fill oil within the same sales configuration; it excludes pallets, outer packaging and additional uninstalled spares. Factory acceptance consumption belongs to manufacture; customer workpieces, use-phase tool consumption and operating electricity lie outside this boundary. This is an author-defined PCR boundary; CPC supports product identity only.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture_and_acceptance | Manufacture, assembly and acceptance | required |  | Component machining, mechanical/electrical assembly, lubrication, tests and gate release; site electricity recorded once | per one accepted finished machine |
| aqueous_machining | Aqueous machining-fluid route | conditional | Manufacturing machining uses a water-soluble concentrate | Fluid preparation, makeup and spent-emulsion transfer only; electricity recorded in the main process | per one accepted finished machine |
| powder_finishing | Polyester powder finishing | conditional | The declared actual coating route uses polyester powder | Fresh coating only; electric curing included in site electricity | per one accepted finished machine |
| dispatch_packaging | Corrugated dispatch protection | conditional | Dispatch uses corrugated-board protection | Dispatch board only; packaging excluded from net machine mass | per one accepted finished machine |

All processes use the same order and configuration. Machine in the measurement grammar means the complete lathe defined here. Each material card applies to the actual matching grade and form in the bill of materials, not a universal recipe. On-site foundry work, welding, heat treatment, other coating routes or CNC control cabinets require added concrete atomic exchanges and separate processes at their actual material and energy boundary; they must not be silently omitted or assigned proxy flows.

### Process: Manufacture, assembly and acceptance (`manufacture_and_acceptance`)

#### Inputs

##### Product flows

###### Alternating current (`alternating_current`)

Purchased electrical energy crosses the manufacturing-site boundary for machining, assembly and acceptance testing. Obtain its quantity from a dedicated meter or documented manufacturing-order apportionment.

- Selected flow: Alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured MJ per one accepted finished lathe; record supply geography, voltage and apportionment method.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Grey cast iron casting (`grey_iron_casting`)

Where the declared bill of materials uses a purchased grey-iron bed or headstock casting, weigh its as-received mass. This is a shaped casting, not pig iron, molten iron or a primary ore; identify its grade and machining allowance.

- Selected flow: Grey cast iron casting
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_bom`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Hot-rolled low-alloy steel bar (`low_alloy_steel_bar`)

For the declared bar-machining route, record gross stock issued for shafts and other machined parts and for factory acceptance test pieces. Identify alloy and product form, subtract documented returns and track chips separately. Do not also count stock already contained in purchased finished assemblies.

- Selected flow: Hot-rolled low-alloy steel bar
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_bom`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Alternating-current electric motor (`ac_motor`)

Record the actual AC motor incorporated in the declared configuration, with rated power, control technology, quantity and measured aggregate mass. Model it as a purchased assembly or resolve its constituent materials, but never both.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_bom`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Tapered roller bearing (`tapered_roller_bearing`)

Include only the separately procured tapered roller bearings used by the declared spindle or drive configuration; record part designation, quantity and total mass. Bearings embedded in a purchased spindle assembly are not added again.

- Selected flow: Tapered roller bearing
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_bom`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Insulated copper electric cable (`insulated_copper_cable`)

Measure the purchased insulated copper cable incorporated during machine assembly, identifying conductor section and insulation material. Include its insulation in the cable mass; do not duplicate cable within a purchased control cabinet.

- Selected flow: Insulated copper electric cable
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_bom`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Mineral lubricating oil (`mineral_lubricating_oil`)

Measure the mineral lubricating oil used in assembly and acceptance, separating retained first fill from oil drained after testing. Document grade; volume-to-mass conversion requires the actual supplier density at the recorded temperature. A synthetic lubricant requires a separate exact flow.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_consumables`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted lathe for removing metal (`finished_lathe`)

The reference product is the accepted, complete machine leaving the declared manufacturing site. Its mass is measured for the same configuration as the collected foreground records.

- Selected flow: Complete accepted lathe for removing metal
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Ferrous machining swarf (`ferrous_machining_swarf`)

Collect iron-based machining chips separately from non-ferrous scrap. Weigh the outgoing consignment, record alloy, moisture and entrained oil, and reconcile metal mass against stock and accepted components. No avoided-primary-metal credit is included by default.

- Selected flow: Iron metal chips `8aa263a4-39e5-475e-966b-d967747ecc9c`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_waste`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-bemp-fabricated-metal-products-2020`

##### Elementary flows

### Process: Aqueous machining-fluid route (`aqueous_machining`)

#### Inputs

##### Product flows

###### Water-soluble metalworking fluid concentrate (`water_soluble_metalworking_fluid_concentrate`)

This conditional machining input is included only where the declared production route issues a water-soluble concentrate to the manufacturing order. Record the concentrate rather than a generic coolant or diluted mixture.

- Selected flow: Water-soluble metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Measured kg of concentrate issued per one accepted finished lathe; identify formulation and concentration in the supporting record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mwf`
- Sources: `jrc-bemp-fabricated-metal-products-2020`

###### Tap water (`tap_water`)

Record the metered tap water used to dilute the metalworking-fluid concentrate and make up the machining circuit, excluding recirculated water counted within the same process. Do not assign this product flow to direct surface-water or groundwater abstraction.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_aqueous`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous`
- Sources: `jrc-bemp-fabricated-metal-products-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent aqueous metalworking emulsion (`spent_machining_emulsion`)

Weigh the spent water-based machining emulsion transferred to a licensed treatment operator; retain waste composition and destination. This is a waste-mixture transfer, not an elementary emission to water. Separately quantify recovered oil and any actual treated discharge to avoid double counting.

- Selected flow: Spent aqueous metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_waste`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-bemp-fabricated-metal-products-2020`

##### Elementary flows

### Process: Polyester powder finishing (`powder_finishing`)

#### Inputs

##### Product flows

###### Polyester powder coating (`polyester_powder_coating`)

For a documented polyester-powder finishing route, weigh fresh powder consumed, subtract unopened returns, and reconcile retained coating, unrecovered overspray and internal recovery. Solvent-borne paint is a different route requiring its own named formulation and substance-specific emissions.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_coating`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Corrugated dispatch protection (`dispatch_packaging`)

#### Inputs

##### Product flows

###### Corrugated cardboard (`corrugated_board`)

Where dispatch uses corrugated-board protection, measure the board mass per shipped machine separately from net machine mass. Pallets, plastic film and steel strapping, where used, require separate material rows; packaging is not assumed absent when this board row is inapplicable.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual exchange mass per one accepted finished machine using `cp_packaging`; no default quantity applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | Shared manufacturing operations | Avoid allocation by subdividing records to the manufacturing order where technically feasible. |  |
| allocation_physical_driver | Unavoidable shared electricity or fluid use | Where subdivision is not feasible, allocate using a documented physical metered driver and disclose the driver and period. |  |
| allocation_production_cohort | Failed tests, rework and final rejects | Retain their input, energy and waste burdens in the same configuration's production-cohort numerator; normalize only by accepted finished-lathe count. Reconcile opening and closing work in progress and actual returns. Do not double-credit internally recovered or returned material. |  |
| allocation_recovery | Metal swarf and recovered fluids | Treat outgoing wastes without an avoided-primary-production credit by default; disclose actual treatment destinations and recovery state. A proposed marketable co-product requires demonstrated product identity, auditable allocation and a separately reported sensitivity result. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manufacture_and_acceptance | `finished_lathe` | acceptance record and scale record | model; configuration; serial number; accepted net mass `M`; acceptance date | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine | acceptance date | declared manufacturing site | accepted net mass per machine | scale calibration and acceptance record |
| cp_energy | manufacture_and_acceptance | `alternating_current` | electricity meter or manufacturing-order ledger | meter identifier; reading or kWh; conversion; order identifier; apportionment method; cohort configuration; accepted count; linked failed-test, rework and final-reject event identifiers | Read the dedicated meter or reconcile a documented order-level apportionment, retaining linked failed-test, rework and final-reject electricity in the same production cohort. | MJ | each machine or reporting period | declared reporting period | declared manufacturing site | per one accepted finished machine | meter record and apportionment worksheet |
| cp_mwf | aqueous_machining | `water_soluble_metalworking_fluid_concentrate` | material issue record | formulation; concentration; issued mass; order identifier | Reconcile concentrate issue records to the manufacturing order; include only where the route uses the concentrate. | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | issue record and formulation record |
| cp_bom | manufacture_and_acceptance | Individual materials and purchased components | receiving, issue-return ledger and BOM | order; configuration; part id; grade; form; count; measured unit mass; issues; returns; opening and closing work in progress; accepted count; linked failed-test, rework and final-reject event identifiers | Weigh each issued input and reconcile to the order BOM and linked test/rework/reject records; never duplicate a purchased assembly and its constituents | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |
| cp_consumables | manufacture_and_acceptance | mineral_lubricating_oil | lubricant ledger | grade; order; issues; returns; retained fill; drained oil; density and temperature | Weigh actual lubricant issued and separately reconcile retained first fill and drained waste oil | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |
| cp_aqueous | aqueous_machining | tap_water | water meter and mixing log | source; meter readings; order; concentrate mass; makeup water | Use submetering and actual density for recorded volumes; do not count internal recirculation twice | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |
| cp_waste | manufacture_and_acceptance; aqueous_machining | Each waste separately | waste weigh ticket and transfer manifest | waste identity; source process; gross; tare; water content; entrained oil; batch; destination | Weigh each outgoing waste; apportion batch amounts using measured order-specific generation, not as elementary emissions | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |
| cp_coating | powder_finishing | polyester_powder_coating | coating issue and recovery ledger | formulation; SDS; order; fresh powder; returns; retained coating; recovered and waste powder | Reconcile fresh powder to retained coating, recovery and loss; count internal recycling once | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |
| cp_packaging | dispatch_packaging | corrugated_board | packaging BOM | order; dispatch count; net board mass; returns | Weigh board used for each dispatched machine and reconcile shipment records | kg | each machine or batch | declared reporting period | declared manufacturing site | per one accepted finished machine | weighing record, calibration and order reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reconcile_machine_order | Collected foreground exchanges | Reconcile records to one accepted lathe of the same configuration; document any physical-driver allocation. | `cp_mass`; `cp_energy`; `cp_mwf` | Complete per-machine foreground inventory |  |
| calculate_production_cohort | Configuration-specific production cohort | Retain failed-test, rework and final-reject inputs, energy and wastes in each exchange's cohort numerator, reconciled for opening/closing work in progress and actual returns; divide only by the accepted finished-lathe count. Track internal recovery and returns once without an additional avoided-input credit. A cohort with no accepted lathe cannot yield a per-accepted-machine result. | `cp_bom`; `cp_energy`; `cp_waste`; acceptance and test/rework/reject records | per one accepted finished machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | Finished lathe and inputs | Keep model, configuration and acceptance record consistent across all records. | manufacturing order and acceptance record |
| dq_atomic_inputs | Manufacturing inputs | Add one atomic row for each actual purchased material, component, energy carrier, waste and elementary exchange; do not use umbrella categories. | bill of materials, issue records and waste manifests |
| dq_mwf_route | Conditional fluid input | State whether machining uses the water-soluble concentrate and retain the formulation record where it does. | route sheet and formulation record |
| dq_bom_closure | All materials, assemblies and finished product | Reconcile the order BOM, opening and closing work in progress, issues, returns, rejects and acceptance count. Reconcile retained component mass to net machine mass, with packaging and process fluids accounted separately. Record discrepancies, calibration and uncertainty; never alter observations merely to close a balance. | order-level material balance and discrepancy statement |
| dq_route_completeness | Actual manufacturing route | Confirm applicability of foundry work, welding, heat treatment, cleaning, coating, CNC assembly and packaging. Add concrete rows and collection protocols for every actual input, waste and substance-specific release not already listed. Unsupported missing data do not equal zero. | route sheet, BOM, SDS, emission measurement and waste manifests |
| dq_shared_energy | Shared electricity | Record order-attributable machining, pump, on-site compressed-air generation, electric curing, assembly and test electricity once in the main process. Avoid duplication with internal utility processes; purchased compressed air requires a separate physical exchange instead. | meter boundary diagram and allocation worksheet |
| dq_external_ranges | Quantity ranges | No empirical quantity range verified in two independent, boundary-compatible original sources is established here. Collect foreground data; a single example machine, nameplate power, regulatory limit or scenario extremum is not an industry range. | collection records and unresolved range-evidence need |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference_mass | `finished_lathe` | Verify that `M` is the accepted net mass in kg for the same declared configuration and excludes transport packaging. |  |
| validation_atomic_exchange | All inventory cards | Verify every card is one concrete exchange with one property and unit; reject umbrella flows and unrecorded route choices. |  |
| validation_conditional_route | `water_soluble_metalworking_fluid_concentrate` | Verify the row is present only when the declared route uses the concentrate and the issue record identifies its formulation. | `jrc-bemp-fabricated-metal-products-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific factory-gate foreground data package |
| downstream_use | Link upstream datasets to create process or lifecycle-model projections |
| allowed_use | Manufacturing inventory modelling; comparisons additionally require demonstrated equivalence of machining service, accuracy, capacity and lifetime, not machine mass alone |
| excluded_use | Product performance, use-phase, installation or end-of-life claims |
| required_metadata | Required qualifiers; measurement records; upstream dataset identities; allocation method |
| required_quality_disclosure | Site, reporting period, configuration, data collection method and conditional-route status |
| update_trigger | Changed configuration, manufacturing route, site, metering method or acceptance-mass method |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product category identity and exclusions; not evidence for a manufacturing boundary or quantitative range. |
| jrc-bemp-fabricated-metal-products-2020 | official_guidance | European Commission Joint Research Centre, *Best Environmental Management Practice in the Fabricated Metal Products sector*, EUR 30025 EN, 2020. https://doi.org/10.2760/894966 | Printed pp. 190 and 226 (PDF pp. 192 and 228): metalworking-fluid forms and segregation of machining residues; qualitative process guidance, not a lathe manufacturing dataset or quantity range. |
| grizzly-g4003g-manual-2022 | handbook | Grizzly Industrial, *Model G4003G Owner's Manual*, revised March 2022, for models manufactured since March 2020; public PDF snapshot retrieved 2026-09-22. https://cdn2.grizzly.com/manuals/g4003g_m.pdf | Original PDF pp. 8–10 (printed pp. 6–8) only: qualitative configuration and material evidence and coating counterexample; no model value is adopted as reference mass, manufacturing quantity or range. |
