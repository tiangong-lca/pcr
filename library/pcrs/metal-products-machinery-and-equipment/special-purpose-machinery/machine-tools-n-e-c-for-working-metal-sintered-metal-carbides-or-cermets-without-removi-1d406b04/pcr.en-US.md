---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-n-e-c-for-working-metal-sintered-metal-carbides-or-cermets-without-removi-1d406b04
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machine-tools n.e.c. for working metal, sintered metal carbides or cermets, without removing material

## 1. Scope and Applicability

This PCR addresses production of complete machine-tools whose working function changes the shape or surface of metal, sintered metal carbides or cermets without removing material and which are not covered by a more specific machine-tool category. Chipless thread/profile rolling is a representative configuration. Declare the actual working mechanism and document why the machine does not belong to the adjacent categories identified in `un-cpc-3-0-structure-2025`.

Exclude material-removal machines, the forging/forming/shearing/punching machines and other presses identified separately in CPC 44217, rolling mills, separately supplied tools or machine parts, and manufacturing services performed with the machine. Whether machining is used to manufacture the machine's own parts does not determine the classification of the finished machine.

The foreground package covers production and factory acceptance. Purchased component production is linked upstream at the supplied component's actual state. Customer installation, commercial operation, maintenance and end-of-life require separate downstream scenarios; factory trial runs belong to production. A production reference unit is not a lifetime metalworking service functional unit and cannot support performance comparisons without equivalent capacity, quality and duty assumptions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-n-e-c-for-working-metal-sintered-metal-carbides-or-cermets-without-removi-1d406b04 |
| classification_refs | CPC 3.0:44218; classification context, subject to the stated exclusions |
| covered_products | Complete residual-category machine-tools for working metal, sintered metal carbides or cermets without material removal |
| excluded_products | Material-removal machine-tools; separately classified forming machines and presses; rolling mills; separate tools and parts; metalworking services |
| representative_product | Factory-accepted chipless thread/profile rolling machine, with its declared frame, spindle/slide arrangement, drive and control configuration |
| production_route | Supplied-part preparation where performed; mechanical/electrical assembly; conditional hydraulic installation; lubrication; factory testing; dispatch preparation |
| market_state | Complete accepted machine at the manufacturer's gate, with installed equipment and supplied tooling explicitly listed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete machine capable of the declared non-material-removal working operation |
| How much | One accepted complete machine of the declared configuration |
| How well | Meet the purchase specification and documented factory acceptance criteria for the declared workpiece, capacity and dimensional or surface quality |
| How long or cycle | One manufacture-and-acceptance cycle; operating lifetime and customer duty cycle are outside this production reference |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machine-tools n.e.c. for working metal, sintered metal carbides or cermets, without removing material `a187cf0a-5f14-43b2-a3ea-3da9055970b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; configuration and serial/batch identity; actual working mechanism; metal/carbide/cermet workpiece scope; accepted net mass M; installed tooling and auxiliaries; drive type; controller type; capacity and acceptance criteria; production site and period; supplied component starting states; packaging exclusion from M |

Every qualifier must be recorded in the foreground package. Manufacturer catalog specifications identify a model but do not replace measurements for the accepted configuration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_basis | electricity rows | Net calorific value | MJ | Use integrated metered electricity for production, including attributed idle and acceptance tests. Convert recorded kWh to MJ using the exact identity 1 kWh = 3.6 MJ. TianGong's energy-property label does not imply fuel combustion. Installed power alone is not energy consumption; retain supply voltage and the site-specific electricity mix. |
| component_accounting | installed component rows | Mass | kg | Reconcile quantities to the installed configuration and procurement records; do not count component mass again as raw metal when its production is already supplied by an upstream component dataset. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received components, stock and consumables at the manufacturing site; record whether each arrives cast, machined, heat-treated, coated or as an assembled purchased component |
| starting_condition_role | Foreground collection entry condition; it does not erase upstream production burdens |
| product_classification_scope | Complete residual-category non-material-removal metalworking machine-tools |
| recursive_input_rule | A purchased same-category complete machine used as an input requires an upstream dataset for its declared supplied state. Record only additional foreground work and avoid recursively reopening already included production. |
| upstream_dataset_requirement | Link every purchased input and off-site treatment to a dataset matching material/component identity, technology, geography, reference property and supplied state. Disclose proxy choices and data gaps. |
| disclosure | Starting states, make-or-buy decisions, included auxiliaries/tooling, outsourced operations, inbound transport, production losses, allocation, packaging, waste destinations and excluded downstream scenarios |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_identity | product scope | Verify the non-material-removal function and exclusions before applying the reference unit. | un-cpc-3-0-structure-2025 |
| boundary_configuration | installed machine | Record actual mechanical, drive and control assemblies; hydraulic installations are conditional on the supplied design. | profiroll-innovative-machine-configuration |
| boundary_make_buy | component production | Include machining, finishing, heat treatment or other operations when performed for this machine; when outsourced, link the supplied component dataset and transport once. Record each actual physical exchange separately. | |
| boundary_tests | factory acceptance | Include test electricity, lubricants, test stock, rejects and waste treatment attributable to acceptance, including failed trials and rework. Exclude customer production after release. | |
| boundary_transport | inbound supply | Record supplier/site coordinates, mode, distance, load and transported mass, and link the applicable transport dataset. Transport-service exchanges must remain separate from combustion elementary flows. | |
| boundary_extension | foreground completeness | Reconcile the bill of materials, stores issues, meters and waste records. Add individually identified physical exchanges for actual operations missing from the common inventory; an absent common row is not a cut-off permission. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Mechanical and electrical assembly | required |  | foreground production | per one accepted finished machine |
| hydraulic | Hydraulic installation | conditional | The accepted configuration uses a hydraulic drive or actuator. | foreground production | per one accepted finished machine |
| rolling | Supplied rolling tooling | conditional | The machine is a rolling configuration supplied with a steel rolling die. | foreground production | per one accepted finished machine |
| drawing | Supplied drawing tooling | conditional | The machine is a drawing configuration supplied with a carbide drawing die. | foreground production | per one accepted finished machine |
| acceptance | Factory acceptance and release | required |  | foreground production | per one accepted finished machine |
| dispatch | Dispatch preparation | required |  | foreground production | per one accepted finished machine |

### Process: Mechanical and electrical assembly (`assembly`)

#### Inputs

##### Product flows

###### Cast iron machine-tool frame (`frame`)

Record the received finished frame mass and supplier state; include its upstream casting, machining and coating once. Applies when the declared machine uses a cast iron frame.

- Selected flow: Cast iron machine-tool frame
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Steel machine-tool spindle (`spindle`)

Record each installed steel spindle by specification and supplied machining/heat-treatment state.

- Selected flow: Steel machine-tool spindle
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Roller bearing (`bearing`)

Record installed roller-bearing mass and specification; exclude bearings already inside a purchased motor or other included assembly.

- Selected flow: Roller bearing
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Alternating-current electric motor (`motor`)

Record the installed AC drive motor, phase, rated voltage/frequency and output rating. Exclude pure DC motors and generators from this row; no lifetime electricity is included in this component amount.

Use the selected flow only when the documented motor type and rating fall within its CPC 46112 classification. Record a motor belonging to a different class as a separate appropriately identified exchange under boundary_extension.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Motor frequency inverter (`drive`)

Include when the drive architecture contains a separately supplied inverter; reconcile with the electrical bill.

- Selected flow: Motor frequency inverter
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Programmable logic controller (`controller`)

Include a separately supplied PLC when specified. Do not count an integrated PLC again when included in a purchased CNC control unit.

- Selected flow: Programmable logic controller
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Computer numerical control unit (`cnc_controller`)

Include the supplied CNC control unit when the accepted configuration uses numerical control. Record the included control boards and operator interface so integrated components are not also counted as separate purchases.

- Selected flow: Computer numerical control unit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `profiroll-innovative-machine-configuration`

###### Insulated copper electrical cable (`cable`)

Record installed cable mass, copper conductor and insulation specification, excluding cable already covered by a purchased assembly.

- Selected flow: Insulated copper electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Steel screw (`fastener`)

Record separately issued installed steel screws; avoid counting fasteners embedded in supplied assemblies twice.

- Selected flow: Steel screw `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Nitrile rubber sealing ring (`seal`)

Include separately supplied NBR sealing rings when installed; verify polymer identity against the part specification.

- Selected flow: Nitrile rubber sealing ring
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Electricity (`assembly_electricity`)

Measure electricity for assembly and attributable supporting equipment, with shared-load reconciliation.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert metered kWh to MJ using 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Hydraulic installation (`hydraulic`)

#### Inputs

##### Product flows

###### Hydraulic oil pump (`hydraulic_pump`)

Include an installed hydraulic pump only for hydraulic configurations; do not count an entire power pack as this pump.

- Selected flow: Hydraulic oil pump
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Hydraulic cylinder (`hydraulic_cylinder`)

Record installed hydraulic cylinders by supplied specification; purely electromechanical machines have no such input.

- Selected flow: Hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

###### Mineral hydraulic oil (`oil`)

Measure first-fill mineral hydraulic oil and any test top-up; retained and drained quantities must reconcile.

Verify the mineral/petroleum-based hydraulic formulation against the supplied product specification and safety data sheet; do not substitute a synthetic or aqueous fluid under this row.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_consumables.
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

##### Waste flows

##### Elementary flows

### Process: Supplied rolling tooling (`rolling`)

#### Inputs

##### Product flows

###### Steel thread rolling die (`rolling_die`)

Include the steel rolling die supplied with a rolling machine; separately sold spare tools are outside this reference configuration.

- Selected flow: Steel thread rolling die
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `profiroll-innovative-machine-configuration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Supplied drawing tooling (`drawing`)

#### Inputs

##### Product flows

###### Tungsten carbide wire drawing die (`drawing_die`)

Include an actual carbide drawing die only when supplied in a drawing configuration. Record its composite grade and upstream fabrication.

- Selected flow: Tungsten carbide wire drawing die
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_components.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and release (`acceptance`)

#### Inputs

##### Product flows

###### Electricity (`test_electricity`)

Measure factory acceptance-test electricity, including failed runs; exclude customer production.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert metered kWh to MJ using 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Carbon steel test bar (`test_bar`)

Include carbon steel test stock consumed during factory trials; document returned stock and successful test-piece disposition.

For this selected flow, verify a carbon/non-alloy bar or rod supplied cold-formed, cold-finished or further worked, consistent with CPC 41261. Record grade, geometry and processing state; identify hot-rolled coiled stock or another state separately if actually used.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_consumables.
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

###### Machine-tools n.e.c. for working metal, sintered metal carbides or cermets, without removing material (`finished_machine`)

Record one accepted complete machine of measured net mass M; exclude transport packaging.

- Selected flow: Machine-tools n.e.c. for working metal, sintered metal carbides or cermets, without removing material `a187cf0a-5f14-43b2-a3ea-3da9055970b6`
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

###### Carbon steel scrap (`scrap`)

Record discarded carbon steel test pieces as segregated scrap only when not supplied as saleable co-products; identify actual recycling/treatment.

- Selected flow: Carbon steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Used mineral hydraulic oil (`waste_oil`)

Record mineral hydraulic oil drained and sent to treatment; oil retained in the delivered machine is not this waste flow.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Dispatch preparation (`dispatch`)

#### Inputs

##### Product flows

###### Wooden pallet (`pallet`)

Include the actual wooden pallet when used; document reuse cycles instead of assigning a full new pallet to every shipment without evidence.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Low-density polyethylene packaging film (`film`)

Measure the actual LDPE wrapping film when used; distinguish it from other polymer formulations.

Use the selected flow only for non-self-adhesive, non-cellular LDPE film that is not reinforced, laminated or supported by another material. Identify a different supplied film form separately.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Corrugated cardboard (`board`)

Measure corrugated board pads or cases when supplied; exclude unrelated site packaging.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange per one accepted finished machine using cp_packaging.
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
| allocation_hierarchy | shared manufacturing | First investigate subdivision or system expansion. If neither applies, use a quantified underlying physical relationship. Document the decision and attribution evidence. | eu-environmental-footprint-2021-allocation |
| allocation_meters | electricity and shared equipment | Prefer operation/job submetering. Where a meter covers multiple jobs, retain measured operating time and load evidence for the allocation and reconcile the attributed total to the meter. Machine count alone requires evidence of comparable activity. | |
| allocation_rejects | rejects and rework | Attribute rejected-machine and rework burdens to accepted output of the same production period; exclude rejected machines from the accepted-count denominator. Internal recirculation is not another purchased input. | |
| allocation_scrap | production metal scrap | Record scrap mass, composition and destination. Keep treatment or recycling assumptions explicit and consistent with the receiving model; do not add an undocumented avoided-primary-metal credit. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference product | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted machine or traceable identical configuration batch | Same manufacture-and-acceptance cycle | Final acceptance site | accepted net mass per machine | Calibration certificate; weighing ticket; configuration bill; acceptance signature |
| cp_components | assembly; hydraulic; rolling; drawing | installed component | bill of materials and stores issues | component identity; supplier; supplied state; quantity; net mass; model; serial/batch; rejects; returns | Reconcile purchases, job issues, installed bill and returns. Obtain traceable component weights; disaggregate any uncharacterized purchase bundle. | kg | Each job, with period reconciliation | Same completed-machine cohort | Manufacturing and named suppliers | attributable component mass / accepted machines | Supplier specification; weighing records; signed bill; upstream dataset mapping |
| cp_energy | assembly; acceptance | electricity | metering and activity records | meter id; start/end readings; timestamps; operation; job; idle period; allocation driver; accepted count | Read calibrated meters around production/test runs; reconcile allocated shared loads with site totals. | kWh | Each run or production shift | Complete manufacture/acceptance period including rework | Manufacturing site and allocated supporting equipment | attributable electricity / accepted machines | Meter calibration; logs; invoices; allocation reconciliation |
| cp_consumables | hydraulic; acceptance | oil and test stock | stores and test records | specific material identity; issue; return; retained charge; consumed amount; test job; accepted count | Measure issues and returns; distinguish retained oil from drained oil and test-stock losses. | kg | Each fill or test campaign | Same manufacture-and-acceptance cycle | Manufacturing site | attributable net material use / accepted machines | Weighing records; issue slips; test records; safety data sheets |
| cp_waste | acceptance | separately identified waste | waste transfer and weighing record | waste identity; composition; contamination; mass; destination; recovery/treatment; batch; accepted count | Weigh segregated waste and reconcile disposal records to production jobs; identify losses and internal recirculation separately. | kg | Each collection, reconciled by period | Same completed-machine cohort | Manufacturing site to first receiving facility | attributable waste mass / accepted machines | Weighbridge ticket; carrier/treatment record; composition evidence |
| cp_packaging | dispatch | individual packaging material | packing specification and weighing | material identity; net mass; package count; reused package cycles; supplied machine | Weigh each actual packaging material; record returned/reused packaging and reconcile to dispatch records. | kg | Each packing specification and dispatch batch | Same accepted-machine cohort | Dispatch site | attributable packaging mass / accepted machines | Packing bill; scales; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| production_attribution | all inventory rows | Sum the exchange attributable to the completed cohort, including rejected trials and rework, and divide by the accepted machine count of the same configuration. Retain the numerator, denominator and allocation evidence. | Raw collection records; accepted count; allocation evidence | Exchange amount per one accepted finished machine | |
| configuration_balance | installed component rows | Reconcile installed components and retained fluid mass to measured accepted net machine mass; investigate missing components, gross/net confusion or mismatched configuration. Packaging and separately consumed test stock do not form installed mass. | cp_components; cp_consumables; cp_mass | Documented reconciliation and explained discrepancy | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | all quantities | Use one declared accepted configuration and production cohort; disclose changes in supplier state, drive technology and test protocol. | Bill of materials, serial/batch records, acceptance log |
| quality_completeness | boundary | Reconcile procurement, installed components, energy, retained charges and waste; investigate unexplained omissions before dataset release. | Collection reconciliation and supplier coverage register |
| quality_temporal | foreground | State dates and coverage of production runs, rework, test failures and dispatch. Different periods require an explained alignment. | Dated raw records and accepted output register |
| quality_estimates | unavailable measurements | Distinguish measured, calculated and estimated quantities. Provide estimate method, uncertainty and replacement plan; a missing value is not zero. | Data-quality report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference product | Check actual working mechanism and exclusions, required qualifiers and accepted configuration. | un-cpc-3-0-structure-2025 |
| validate_mass | reference and inventory | M must be positive, measured net machine mass for the same accepted configuration; every inventory amount must use the same per-machine basis. | |
| validate_exchange | all inventory rows | Each row represents one identified exchange with a compatible property/unit, collection protocol and route condition. Unresolved UUIDs remain explicit; no proxy is silently treated as an exact identity. | |
| validate_supply | upstream links | Ensure raw material and purchased-component production are not both charged for the same physical component. Verify make-or-buy and transport boundaries. | |
| validate_tests | acceptance | Reconcile test records, failures, retained oil, drained oil and test stock. Customer operation must not be counted as acceptance. | |
| validate_evidence | quantitative claims | Use actual foreground amounts. Do not substitute manufacturer installed power for measured energy or use model catalog weights as an industry range. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset for the production burden of the declared machine configuration |
| allowed_use | Machine procurement or capital-equipment modelling when function, capacity, supplied state and system boundary match |
| excluded_use | Lifetime service comparisons without equivalent performance and use scenarios; material-removal equipment; differently classified presses; tools or processing services |
| required_metadata | Product and configuration; net mass; reference basis; site and dates; supplied tooling/auxiliaries; make-or-buy map; supplier geography/technology; acceptance protocol; allocations; transport and waste routes |
| required_quality_disclosure | Measurement coverage; unresolved identities; upstream proxies; missing supplier data; estimates and uncertainty; exclusions; reconciliation results |
| update_trigger | Changed machine architecture, material/component specification, supplier state, production site, drive, acceptance protocol or materially improved evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, rows 2264–2274 and 2440–2454. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity and adjacent-category exclusions; electrical-component classification distinctions |
| profiroll-innovative-machine-configuration | literature | Profiroll Technologies, The Innovative – The next Generation, manufacturer page, retrieved 2026-09-22. https://www.profiroll.com/machines/thread-and-profile-rolling-machines/the-innovative-cnc-thread-rolling-machine.html | Representative chipless rolling mechanism and configuration-dependent drive, slides, spindle and control assemblies; no quantitative inventory range adopted |
| eu-environmental-footprint-2021-allocation | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, section 4.5, page 87. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | General allocation hierarchy; no claim of complete PEF study conformity |
