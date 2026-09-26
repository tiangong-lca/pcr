---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-deburring-sharpening-grinding-honing-lapping-polishing-or-otherwise-f-930d4668
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Abrasive-finishing and other metal-removal machine tools

## 1. Scope and Applicability

This PCR covers manufacture of complete machine tools for deburring, sharpening, grinding, honing, lapping or polishing metal, sintered metal carbides or cermets using abrasives, and complete planing, shaping, slotting, broaching, gear-cutting, gear-grinding, gear-finishing, sawing and cutting-off machine tools. The common methodology is configuration-resolved equipment production: purchased component burdens, in-house fabrication, assembly, factory acceptance and packaging are attributed to the accepted machine. It does not treat machining services or the workpieces made by a customer's machine as the reference product.

The product boundary follows `un-cpc-3-0-structure-2025`, code 44216 and adjacent entries. These families share a manufacturing accounting framework but do not have interchangeable performance or operating-energy requirements. Publish a model/configuration-specific dataset or a disclosed production-weighted mix; do not average unlike technologies without reporting the mix. A CNC grinding machine is a representative configuration, not a restriction of coverage to grinding.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-deburring-sharpening-grinding-honing-lapping-polishing-or-otherwise-f-930d4668 |
| classification_refs | CPC 3.0:44216; classification context only |
| covered_products | Complete abrasive-finishing, planing, shaping, slotting, broaching, gear-cutting/finishing, sawing and cutting-off machine tools for the stated metallic work materials |
| excluded_products | Separately supplied cutting tools, grinding wheels, attachments and spare parts; machining services and finished workpieces; laser, EDM, electrochemical and water-jet machines; machining centres; lathes; drilling, boring, milling, threading and tapping machines; metal-forming presses; machines for wood or mineral materials |
| representative_product | Complete electrically driven CNC grinding machine with its declared bed, spindle, drives, control cabinet, guards and installed auxiliaries |
| production_route | Purchased finished assemblies and castings; conditional in-house component fabrication; mechanical/electrical assembly; factory acceptance and preparation for dispatch |
| market_state | New, complete, accepted machine at factory gate; installed auxiliaries and retained operating fills disclosed; transport packaging accounted separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a complete machine tool capable of the declared metal-removal or abrasive-finishing operation |
| How much | One accepted complete machine |
| How well | Meets the purchaser's documented capacity, work envelope, accuracy, surface-finish and safety acceptance specification for the declared model and configuration |
| How long or cycle | One manufacturing and factory-acceptance cycle; operating life and customer use are outside this production dataset |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machine-tools for deburring, sharpening, grinding, honing, lapping, polishing or otherwise finishing metal, sintered metal carbides or cermets by means of grinding stones, abrasives or polishing products, machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine-tools working by removing metal, sintered metal carbides or cermets n.e.c. `84023a05-6bd8-46e1-9d67-a9b99457f876` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Machine family; model; configuration; serial/batch coverage; CNC or manual control; workpiece material; work envelope; installed drive power; declared accuracy and surface-finish acceptance criteria; delivered spindle/tooling; included coolant, filtration, extraction and hydraulic auxiliaries; retained fluid fills; measured net mass M; factory location; production period; make/buy boundary |

The required qualifiers must be present in the foreground data package. No category-wide machine weight, service life, duty cycle or machining productivity is prescribed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| item_basis | all inventory rows | Exchange-specific property | Row unit per machine | Every exchange is attributable to one accepted machine of that configuration. The reference amount is M kg, not a numerical one-kg manufacturing inventory. |
| energy_metering | electricity_fabrication; electricity_assembly; electricity_test | Energy | kWh | Retain metered electrical energy; convert MJ records by 1 kWh = 3.6 MJ. Nameplate power alone is not measured consumption. Include auxiliaries and attributable standby. |
| fluids_basis | coolant_fabrication; coolant_test; water_fabrication; water_test; oil_fill; oil_test | Mass | kg | Record neat concentrate, dilution water and mineral lubricating oil separately. Use measured density at declared conditions if converting volumes. Separate retained fills, recovered circulation and discharged quantities. |

The selected electricity flow uses the registry's energy property named Net calorific value. Here it represents metered electrical energy, not combustion of the machine. Preserve the exact 1 kWh = 3.6 MJ conversion and record the actual supply voltage, supplier/generation mix, location and year in the upstream dataset; the generic flow identity establishes none of those qualifiers.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock, finished bed casting and separately identified functional assemblies received for the declared manufacturing route |
| starting_condition_role | Foreground entry boundary; upstream production burdens remain linked |
| product_classification_scope | Complete machines in CPC 44216; purchased parts retain their own product identities |
| recursive_input_rule | A purchased complete same-category machine used as production equipment is a capital asset, not raw feed. A same-category module incorporated in the product requires explicit nesting and one upstream link; do not recursively recreate its inventory. |
| upstream_dataset_requirement | Link each purchased input to production at its actual incoming state, including casting, machining, heat treatment and coating already performed. Record supplier region, technology, transport distance/mode and data quality. Do not substitute raw metal for a finished motor or control cabinet. |
| disclosure | Declare make/buy decisions, subcontract processing, auxiliaries, retained fills, packaging, infrastructure treatment, transport and all exclusions. Supplier activities must not disappear merely because they are outside the factory. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | production_system | Include attributable receipt/handling, fabrication, purchased component supply, assembly, factory tests including failed tests and rework, packaging, internal transport and manufacturing-waste management. Link inbound transport and outsourced processing explicitly. Customer installation, use, maintenance and machine end-of-life are outside the declared factory-gate result. | |
| boundary_route | foreground_inventory | The cards are a common physical-flow core. Reconcile every actual bill-of-materials item and operation. Add distinct atomic rows for omitted actuators, guides, ball screws, gears, wiring, guards, tool/work holders, hydraulic pumps/cylinders, filters, coolers, purchased heat, fuels, gases, coating chemicals and direct emissions whenever present. No residual catch-all row or silent exclusion is allowed. | |
| boundary_fluids | machining_and_testing | Include coolant replenishment, cleaning, oil carry-out, spent fluid and separated metal residue. Internal recirculation is not a new external input. Distinguish manufacturing/test use from the customer's operating life. | jrc-fabricated-metal-bemp-2020 |
| boundary_capital | infrastructure | Identify production machinery and building datasets and disclose their allocation over actual productive service. If excluded, justify materiality and provide sensitivity for potentially important assets; the machine being manufactured is never excluded as capital equipment. | |
| boundary_supplier | subcontract_operations | For an outsourced operation, use the processed component at the supplier gate plus its transport, or model the supplier operation with actual inputs and outputs. Never count both full processed-component burdens and the same operation separately. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Component preparation and machining | conditional | In-house cutting, machining or abrasive finishing of metal components is performed | foreground production | per one accepted finished machine |
| assembly | Mechanical and electrical assembly | required | | foreground production | per one accepted finished machine |
| test_pack | Factory acceptance and dispatch preparation | required | | foreground production | per one accepted finished machine |

Flow cards apply only when their stated physical exchange occurs. An absent exchange requires a documented route/BOM check; missing data is not zero. Internal part transfers between these stages are tracked in the manufacturing order and counted once in the integrated foreground system. Independently published subprocesses must add matching, specific intermediate flows.

### Process: Component preparation and machining (`fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel plate (`steel`)

Include when non-alloy carbon-steel plate is cut into structural parts in-house. Weigh gross issues less unused returns; record grade and thickness. Finished purchased structures must not also carry this raw-stock input.

- Selected flow: Carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Fabrication electricity (`electricity_fabrication`)

Include metered machining, extraction, coolant-pump and attributable idle electricity within the fabrication meter boundary; exclude electricity already represented in purchased finished components.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Collect the actual exchange amount in kWh per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources:

###### Fabrication coolant concentrate (`coolant_fabrication`)

Include water-soluble metalworking-fluid concentrate where wet machining is performed. Record formulation, fresh additions and stock changes separately from dilution water and recirculation.

- Selected flow: Water-soluble metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Fabrication dilution water (`water_fabrication`)

Include supplied tap water added to the machining-fluid system where applicable; measure make-up mass, not the recirculating volume.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Fabrication grinding wheel (`abrasive_fabrication`)

Include aluminium-oxide grinding-wheel consumption where in-house abrasive finishing uses that wheel chemistry. Record bond and dressing/wear loss; different abrasives require separate identified rows.

- Selected flow: Aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tools
- Sources:

#### Outputs

##### Waste flows

###### Fabrication steel scrap (`steel_scrap_fabrication`)

Include segregated carbon-steel machining scrap dispatched as waste. Weigh and disclose retained coolant; avoid counting separated oil twice. Supplier-owned scrap outside the foreground belongs to the supplier dataset.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Fabrication spent coolant emulsion (`spent_coolant_fabrication`)

Include discharged aqueous metalworking emulsion, not fluid circulating internally. Record composition, contamination, mass and treatment destination.

- Selected flow: Spent aqueous metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Fabrication spent grinding wheel (`spent_abrasive_fabrication`)

Include discarded aluminium-oxide grinding-wheel remnants from fabrication. Weigh segregated remnants; collected fine grinding dust is a distinct waste and needs its own composition-specific row if generated.

- Selected flow: Spent aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

##### Elementary flows

###### Fabrication PM10 release (`pm10_fabrication`)

Include PM10 actually released to air from in-house grinding where present. Use measured outlet release after controls; captured solids are not air emissions.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

### Process: Mechanical and electrical assembly (`assembly`)

#### Inputs

##### Product flows

###### Finished cast-iron bed (`bed`)

Include the finished grey-cast-iron machine bed purchased for the configuration. Measure its net mass and link its actual casting/machining/coating state; do not use raw pig iron as its upstream identity.

- Selected flow: Finished grey-cast-iron machine-tool bed
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Installed AC motor (`motor`)

Include separately purchased industrial AC motors installed in the machine. Record motor specification and total net installed mass; exclude motors already inside a purchased spindle assembly or auxiliary package.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Electrical control cabinet (`cabinet`)

Include the complete purchased machine-tool electrical control cabinet with its specified electronics and enclosure. Retain supplier configuration and mass; separately added wiring must be inventoried without duplicating cabinet contents.

- Selected flow: Machine-tool electrical control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Spindle assembly (`spindle`)

Include the purchased machine-tool spindle assembly where fitted. Record included bearings, motor and cooling auxiliaries to prevent double counting with separately purchased items.

- Selected flow: Machine-tool spindle assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Separately installed ball bearing (`bearing`)

Include ball bearings purchased and installed outside already-inventoried assemblies. Sum measured installed mass; other bearing technologies need distinct rows where present.

- Selected flow: Ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_bom
- Sources:

###### Retained mineral lubricating oil (`oil_fill`)

Include fresh mineral lubricating oil retained in the delivered machine. Record specification and net retained fill, which is included in M. Consumed/flushed oil and waste must be reconciled separately.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Assembly electricity (`electricity_assembly`)

Include metered mechanical/electrical assembly electricity and its allocated auxiliaries. Do not include acceptance-test energy again.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Collect the actual exchange amount in kWh per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources:

### Process: Factory acceptance and dispatch preparation (`test_pack`)

#### Inputs

##### Product flows

###### Carbon-steel test plate (`test_steel`)

Include non-alloy carbon-steel plate used for factory acceptance tests when that test material is specified. It is not incorporated in M; reused test stock is attributed using documented consumption.

- Selected flow: Carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tools
- Sources:

###### Acceptance electricity (`electricity_test`)

Include accepted and failed/repeated factory-test cycles, spindle/axis drives, cooling, extraction and attributable standby. Record the test sequence rather than assuming customer duty cycles.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Collect the actual exchange amount in kWh per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_energy
- Sources:

###### Test coolant concentrate (`coolant_test`)

Include fresh water-soluble metalworking-fluid concentrate consumed during wet acceptance testing. Separate retained delivered fill, returned usable stock and drain losses in the fluid balance.

- Selected flow: Water-soluble metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Test dilution water (`water_test`)

Include fresh supplied tap water added during wet acceptance testing. Record retained delivery water and discharged test emulsion separately.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Test grinding-wheel consumption (`abrasive_test`)

Include aluminium-oxide grinding-wheel consumption during applicable abrasive acceptance tests. A serviceable wheel delivered with the machine belongs to the delivered BOM and M, not this consumption quantity.

- Selected flow: Aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tools
- Sources:

###### Test lubricating oil replenishment (`oil_test`)

Include fresh mineral lubricating oil used for tests or flushing, excluding the retained delivered fill recorded in oil_fill. Reconcile drained oil, recovery, consumption and stock changes.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_fluids
- Sources:

###### Wooden dispatch pallet (`pallet`)

Include the wooden pallet supporting the dispatched machine. Record timber state, mass and evidenced reuse allocation; additional crates and fasteners require separate rows if used.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

###### Polyethylene wrapping film (`film`)

Include polyethylene film used to protect the machine during dispatch. Weigh actual film consumption separately from the pallet and other packaging.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources:

#### Outputs

##### Product flows

###### Accepted complete machine (`finished_machine`)

Output one complete accepted machine with net measured mass M kg. Exclude transport packaging and temporary test pieces; include the declared installed assemblies and retained fills.

- Selected flow: Machine-tools for deburring, sharpening, grinding, honing, lapping, polishing or otherwise finishing metal, sintered metal carbides or cermets by means of grinding stones, abrasives or polishing products, machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine-tools working by removing metal, sintered metal carbides or cermets n.e.c. `84023a05-6bd8-46e1-9d67-a9b99457f876`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_mass
- Sources:

##### Waste flows

###### Acceptance steel scrap (`steel_scrap_test`)

Include segregated carbon-steel scrap consumed in acceptance testing and sent for waste management. Record wet/dry basis and recovered oil separately.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Spent test coolant emulsion (`spent_coolant_test`)

Include aqueous metalworking emulsion drained from factory tests. Separate product-retained fluid and reused fluid from the off-site waste quantity.

- Selected flow: Spent aqueous metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Waste mineral lubricating oil (`waste_oil_test`)

Include used mineral lubricating oil removed during acceptance or flushing when it occurs. Record fresh replacement oil separately; oil retained at dispatch remains part of M.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

###### Spent test grinding wheel (`spent_abrasive_test`)

Include discarded aluminium-oxide wheel remnants from acceptance tests; do not combine them with metal swarf or collected dust.

- Selected flow: Spent aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources:

##### Elementary flows

###### Acceptance PM10 release (`pm10_test`)

Include measured PM10 discharged to air by abrasive acceptance tests after abatement. Other emission species and captured solids need separate measured identities where present.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual exchange amount in kg per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared_processes | First investigate subdivision or system expansion. Prefer order-specific meters and material issues for the single-machine production dataset. Where subdivision is impossible and expansion would change the declared product function, allocate using a demonstrated causal physical relationship. Document why the preceding options cannot be used. | eu-pef-methods-2021 |
| allocation_drivers | shared_utilities | Use measured energy or measured power-by-time for shared machines and operating hours for causally time-dependent overhead. Use mass only for genuinely mass-dependent handling. A plant-wide equal-per-machine split across dissimilar machines is not an acceptable unexplained default. | |
| allocation_fallback | coproducts | If no physical relationship can be demonstrated, justify another relationship, state prices/time/market scope if economic allocation is used, and test sensitivity. Scrap sales do not establish a substitution credit. Record treatment/recycling burdens and any credits separately under an explicitly selected consistent recycling model. | eu-pef-methods-2021 |
| allocation_rework | accepted_output | Attribute failed tests, rejects and rework to the accepted output of the same production cohort; reconcile the denominator and avoid counting recovered material both as avoided virgin input and as an exported credit. | |

The PEF citation supports only the multifunctionality allocation hierarchy and justification of allocation relationships on PDF pp. 87–88. Submetering, the specific foreground allocation drivers, and sensitivity checks prescribed here are author-defined collection and quality controls, not directly quoted PEF requirements.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | accepted machine | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each configuration and accepted unit or traceable representative batch | full declared cohort | final assembly and acceptance site | accepted net mass per machine | scale calibration; weighing ticket; delivered BOM; retained-fill record |
| cp_bom | fabrication; assembly | purchased components and stock | issue and receipt records | part identifier; material; supplier; incoming state; count; unit mass; issued and returned mass; configuration; installed location | Reconcile supplier specifications, weighed issues/returns and accepted BOM; verify finished-assembly contents to prevent duplication. | kg | each order and configuration change | complete accepted cohort including rework | plant and relevant supplier gates | net attributable input / accepted machines | invoices; drawings; supplier mass certificates; reconciliation |
| cp_energy | fabrication; assembly; test_pack | electricity | meter records | meter identifier; stage; start/end readings; time; auxiliary load; idle load; accepted output; allocation driver | Submeter each stage and auxiliaries; reconcile with plant bills. If allocation is needed, retain measured load/time evidence. | kWh | each job/test and monthly reconciliation | full declared production period including failed tests | declared site and meter boundary | attributable electricity / accepted machines | meter calibration; logs; allocation worksheet |
| cp_fluids | fabrication; assembly; test_pack | coolant concentrate water and oil | fluid balance | formulation; SDS; density; concentrate issue; water addition; oil fill; returns; opening/closing stock; retained fill; drain quantity | Weigh issues, retained fills and drains separately; meter make-up water. Separate recycled circulation from external additions. | kg | each fill/drain and monthly balance | complete cohort | fluid systems within the declared stages | net external fluid input / accepted machines | SDS; density record; meters; stock balance; waste manifests |
| cp_waste | fabrication; test_pack | metal scrap spent fluid spent wheel and used oil | waste transfer record | stream identity; composition; moisture/oil content; gross/tare mass; destination; recovered fraction; production order | Weigh segregated waste streams; reconcile recoverable oil and metal separately and identify off-site treatment. | kg | each container or consignment | complete cohort | site waste collection and treatment links | attributable waste mass / accepted machines | weighbridge slips; waste classification; treatment certificates |
| cp_tools | fabrication; test_pack | grinding wheel and test steel | consumable issue log | tool composition; new/returned mass; dressing loss; test-stock issues; accepted order | Weigh consumption and allocate multi-job tool wear using recorded service; test stock must be distinct from material incorporated in the machine. | kg | each tool change and test | accepted cohort including repeated tests | fabrication and acceptance cells | attributable consumable mass / accepted machines | issue returns; tool-life logs; test protocol |
| cp_air | fabrication; test_pack | PM10 to air | emission measurement | particle fraction; outlet; sampled concentration; gas volume; operating time; capture efficiency; test uncertainty | Measure outlet emissions or apply a documented validated mass balance with measured capture; declare compartment and avoid treating collected dust as an air release. | kg | representative operating campaign and changes | operation-weighted declared period | actual atmospheric discharge points | attributable PM10 release / accepted machines | sampling report; calibration; ventilation logs; uncertainty |
| cp_pack | test_pack | pallet and film | packing specification | pack identifier; material; gross/tare mass; reuse count; damaged replacements; configuration | Weigh each packaging component separately; establish documented reuse allocation and include replacement losses. | kg | each packing configuration | declared dispatch cohort | dispatch area | attributable packaging input / accepted machines | pack BOM; weighing records; reuse log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_attribution | all inventory rows | Sum the net external exchanges attributable to the same configuration and divide by its accepted machine count. Retain failed-test and rework burdens. Internal returns reduce issued amounts only once. | production order records; accepted count; cp_bom; cp_energy; cp_fluids; cp_waste; cp_tools; cp_air; cp_pack | exchange amount per one accepted finished machine | |
| configuration_mass | finished_machine | Use the accepted net mass from cp_mass for the same complete delivered configuration; exclude transport packaging and temporary test workpieces. | cp_mass | M kg | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | complete machine | Record the exact machine family and capacity/accuracy specification. Grinding, sawing, broaching and gear-cutting machines are not interchangeable representatives. | accepted drawings; configuration BOM; acceptance results |
| dq_coverage | production period | Use the complete disclosed production cohort; capture procurement, rejects, rework and test cycles. Explain sampling and seasonal/utilization effects. | order reconciliation; output register |
| dq_completeness | inventory | Reconcile delivered net mass with incorporated components and retained fills, keeping packaging and consumed test stock separate. Investigate discrepancies against measured uncertainty, not an invented universal tolerance. | mass reconciliation; flow balance |
| dq_upstream | purchased inputs | Prefer supplier/site-specific data for major assemblies. Disclose substituted geography, technology, year and incoming state; quantify sensitivity of important substitutions. | supplier evidence and upstream dataset register |
| dq_ranges | all amounts | No external empirical range is prescribed. Collect foreground values; incompatible workpiece-machining use-phase observations cannot serve as machine-manufacturing priors. | collection protocols; documented evidence gaps |
| dq_translation | identity | Product title terminology is professionally translated; UUID-bearing Chinese flow displays retain the exact database Chinese name even when its terminology differs from the editorial title. | bilingual identity audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Confirm that the delivered product falls inside the complete-machine boundary, has all required qualifiers and is not a spare part or processed workpiece. | un-cpc-3-0-structure-2025 |
| validate_basis | all inventory rows | Verify the common per-machine denominator and the cp_mass measurement of M for the accepted configuration. Reject a mixture of one-machine inventory and one-kg reference output without explicit conversion. | |
| validate_completeness | foreground_package | Every applicable card and each additional BOM/process exchange needs a quantity, unit, source record and upstream/treatment link. Unresolved identity may remain explicitly disclosed but must not be replaced by a proxy or treated as zero. | |
| validate_double_counting | component_and_fluid_balances | Reconcile stock, incorporated mass, process losses, returned parts, circulating fluid and off-site residues. Do not count components already contained in purchased assemblies twice. | jrc-fabricated-metal-bemp-2020 |
| validate_acceptance | factory_test | Retain accuracy, function and declared quality acceptance evidence; attribute repeat tests and failures. Separate customer-use energy from factory tests. | |
| validate_allocation | shared_operations | Verify causal drivers, fractions summing to the shared total and documented hierarchy/fallback justification; report sensitivity for material unresolved choices. | eu-pef-methods-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a complete accepted machine tool at factory gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Embodied production modelling of the declared machine configuration, or a disclosed compatible production mix |
| excluded_use | Direct prediction of customer machining energy, universal performance comparisons across machine families, spare-part production without changed scope, or complete cradle-to-grave claims |
| required_metadata | Configuration and functional qualifiers; M and measurement evidence; location/year; make/buy boundary; system boundary; allocation; upstream/treatment links; packaging and retained fills |
| required_quality_disclosure | Coverage and sampling; supplier proxies; unresolved UUIDs; absent range evidence; exclusions; uncertainty; sensitivity and acceptance evidence |
| update_trigger | Change in machine family/configuration, incoming component state, supplier technology, factory process, energy supply, acceptance procedure, material balance or significant data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; rows 2264-2274; original verified 2026-09-21 | Product identity and neighbouring exclusions only |
| jrc-fabricated-metal-bemp-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020; DOI 10.2760/894966; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf ; printed pp. 190 and 226; original verified 2026-09-22 | Machining-fluid functions and form distinctions; separate swarf/oil recovery and waste collection. General metalworking applicability; no machine-production amount range adopted |
| eu-pef-methods-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021; Annex I section 4.5, pp. 87-88; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 ; original verified 2026-09-22 | Multifunctionality decision hierarchy and justified allocation; cited selectively without claiming full PEF compliance |
