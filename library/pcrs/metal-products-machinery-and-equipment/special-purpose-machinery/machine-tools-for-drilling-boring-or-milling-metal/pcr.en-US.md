---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-drilling-boring-or-milling-metal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machine-tools for drilling, boring or milling metal

## 1. Scope and Applicability

This PCR defines factory-gate production of complete new metal drilling, boring or milling machines. It covers the integration route starting with purchased, finished machine modules, followed by assembly, alignment, factory testing and packing. Upstream module production remains mandatory through linked cradle-to-gate datasets; the starting condition is a modelling boundary, not a permission to omit casting, machining, electronics or coating. In-house module manufacture must be expanded into separately measured operations before using this PCR for that site.

Manual and CNC machines may be represented only with explicit configuration and comparable capability. A CPC label does not establish equivalence: machining centres, single-station unit-construction machines, multi-station transfer machines, lathes, threading-only machines, abrasive-finishing machines, handheld drills, replacement parts and machining services are outside this identity. Do not silently include an automatic tool-changing machining centre under a milling-machine label; refer doubtful multifunction classifications for boundary review. The Chinese title is an author translation of the verified UN English identity, not an official UN Chinese title.

The card set describes concrete module-level and conditional test exchanges, not an exhaustive catalogue of every machine design. Reconcile the actual supplier BOM and site records to the complete declared configuration. A machine outside the stated module/consumable starting conditions requires additional named, atomic exchanges and process expansion; no “other materials” balancing row is allowed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-drilling-boring-or-milling-metal |
| classification_refs | CPC 3.0: 44214 (`un-cpc-3-0-structure-2025`) |
| covered_products | New complete drilling, boring and milling machines for metal; declared manual/CNC configuration. |
| excluded_products | Machining centres and transfer machines; lathes; threading-only and finishing machines; parts; handheld tools; machining services. |
| representative_product | One specified model/configuration; no representative machine weight is assumed. |
| production_route | Integration of finished purchased modules, alignment, electrical/no-load acceptance, applicable cutting verification, packing. |
| market_state | Complete accepted new machine at manufacturing gate, with packaging separately inventoried. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete machine of the declared model and configuration. |
| How much | M kg per one accepted finished machine. |
| How well | Meets its documented acceptance specification: geometry, spindle function, axis travel, safety-control tests and any required cutting result. Record capacity and accuracy; equal mass is not equal performance. |
| How long or cycle | One factory production and acceptance cycle; no assumed operating life or customer duty cycle. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machine-tools for drilling, boring or milling metal `8fdae16a-d4a8-430d-ad3b-c7459b3eab6c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; serial/configuration boundary; drilling/boring/milling function; manual/CNC control; axis travel; spindle rating; rated work envelope; acceptance criteria; installed accessories; initial fluid fill; net mass M; site; year; module starting state. |

Required qualifiers must accompany the foreground data package. Record machine count and mass together. Never substitute the example manual’s weight or infer M from power, price, capacity or another machine.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mr_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| mr_inventory | All mass rows | Mass | kg | Weigh each exchange or reconcile a verified mass BOM with stock issues and returns. All amounts use the same accepted-machine denominator under cr_normalize; declare wet/dry basis and avoid counting nested module parts twice. |
| mr_energy | electricity | Energy | kWh | Use metered active electrical energy, not installed power. Convert measured joules to kWh only with 1 kWh = 3.6 MJ. Use cp_energy and cr_normalize. |
| mr_liquid | Liquid mass rows | Mass | kg | Prefer weighing. A volume record requires product-specific density at recorded temperature and conversion mass = volume × density with consistent units; no generic water density for oil. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_upstream | Module supply | Cradle-to-gate results must include all module and consumable upstream production, inbound transport and contracted finishing. Purchased-module integration is not a gate-to-gate substitute for complete production. |  |
| sb_foreground | assembly | Include actual assembly, alignment, first lubrication, internal electric handling, test runs including failed/repeated runs, packing and attributed workshop overheads. Allocate shared electricity, never omit it because no dedicated meter exists. | grizzly-g0704-2018 |
| sb_tests | proof_cut; wet_proof_cut | Activate only the actually performed test branches. Declare coupon material, tool identity and dry/neat-oil state. An emulsion or carbide tool requires separately named inputs, waste and relevant emissions; do not substitute the listed identities. | jrc-fabricated-metal-bemp-2020 |
| sb_fates | Waste and emissions | Link each dispatched waste to its actual treatment. Account for oil carried on chips/cloth separately from drained oil. If mist, evaporation, leakage, aqueous discharge or onsite combustion actually occurs, quantify and add each identified exchange; never assume zero from absence of a preset card. | jrc-fabricated-metal-bemp-2020 |
| sb_downstream | Downstream stages | Exclude customer delivery, installation foundations, operation, maintenance and machine end of life from the factory-gate result. Report any separate life-cycle extension with its own scenarios, never blend it into production. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished, machined/coated structural unit; complete worktable/feed module; powered spindle head; wired control unit ready for integration. |
| starting_condition_role | Explicit module-level interface for foreground collection, not a raw-material exclusion. |
| product_classification_scope | Complete metal drilling/boring/milling machine, not a collection of parts or a machining service. |
| recursive_input_rule | Expand each purchased assembly in its own upstream dataset until supply-chain coverage is complete; do not also enter its embedded materials in this foreground inventory. |
| upstream_dataset_requirement | Supplier/configuration-matched mass and technology; component fabrication, electronics, coating and transport explicitly covered. Missing supplier detail is a disclosed data-quality gap requiring a justified background model, not zero burden. |
| disclosure | Publish module boundary/BOM, outsourced operations, transport legs, exclusions with justification and changes needed for in-house fabrication or alternative test routes. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Integration, testing and packing | required | Always for the declared assembly route | foreground production | finished_machine |
| proof_cut | Carbon-steel proof cutting | conditional | Include when the acceptance specification requires cutting a carbon-steel coupon with a solid HSS tool; otherwise disclose its absence. Different coupon or tool materials require separately identified exchanges. | foreground production | finished_machine |
| wet_proof_cut | Neat-oil proof-cut fluid circuit | conditional | Include only when proof cutting actually uses neat mineral cutting oil. Dry proof cutting excludes this circuit. | foreground production | finished_machine |

### Process: Integration, testing and packing (`assembly`)

#### Inputs

##### Product flows

###### Assembled machine-tool bed and column (`structure`)

One physically assembled structural unit received ready for integration. Its upstream dataset includes casting, machining, coating and attached structural parts. Do not substitute raw cast iron or double-count its embedded parts.

- Selected flow: Assembled machine-tool bed and column
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `grizzly-g0704-2018`

###### Machine-tool worktable and feed assembly (`table_feed`)

Record the installed worktable/feed module including its slides, screws and integrated drive. Match the actual purchased assembly boundary; record an independently purchased additional module separately, not as an unspecified residual.

- Selected flow: Machine-tool worktable and feed assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `grizzly-g0704-2018`

###### Powered machine-tool spindle head assembly (`spindle_head`)

One ready-to-install powered head, including motor, bearings, spindle, housing, tool holder and its integral guard. Supplier bill of materials must document these inclusions. Do not separately count the embedded motor or bearings.

- Selected flow: Powered machine-tool spindle head assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `grizzly-g0704-2018`

###### Wired machine-tool electrical control unit (`control_unit`)

Measure one wired control unit with enclosure, switching, wiring and controls. Declare whether CNC is integrated. A controller-only dataset cannot represent the complete wired unit.

- Selected flow: Wired machine-tool electrical control unit
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `grizzly-g0704-2018`

###### Steel bolt (`steel_bolt`)

Measure separately issued assembly bolts, excluding fasteners already embedded in purchased modules. Grade, size and coating must be declared; separately supplied nuts and washers require their own named records. Verify the steel material identity against the site BOM or supplier specifications. This is a foreground collection requirement, not a material identity established by the G0704 manual.

- Selected flow: Steel bolt
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources:

###### Machine-tool slideway lubricating oil (`way_oil`)

Record fresh slideway oil issued for initial lubrication and factory testing, less measured returns. Do not import customer maintenance consumption. State formulation and retained initial fill.

- Selected flow: Machine-tool slideway lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `grizzly-g0704-2018`

###### Lithium lubricating grease (`lithium_grease`)

Record the actual lithium grease used for initial lubrication. This row applies only to lithium-thickened grease; a different grease requires its own identity. Do not count supplier-filled bearings again. The G0704 citation supports only generic multi-purpose grease use, not lithium formulation. Verify the lithium-soap formulation from the actual site's product label, safety data sheet or supplier specification before including this row.

- Selected flow: Lithium lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: `grizzly-g0704-2018`

###### Cotton Fabric (`cotton_wipe`)

Record dry cotton cloth used to wipe oil during assembly; no cleaning solvent is assumed. For reusable cloth, record new replacement mass and model actual off-site laundering separately when contracted. Verify the cotton fibre identity from site procurement records or supplier specifications. This is a foreground collection requirement, not a fibre identity established by the G0704 manual.

- Selected flow: Cotton Fabric `f8292a12-0851-4ed8-9ff3-18d5f4d302ff`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources:

###### Wooden transport crate (`wood_crate`)

Record actual factory-gate crate mass separately from machine net mass, including its upstream manufacturing. Reusable crates use documented trips and losses, not an assumed lifetime.

- Selected flow: Wooden transport crate
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Low density polyethylene packaging film (`pe_film`)

Record actual LDPE protective film mass. Declare polymer and recycled content; this row is not a proxy for foam, paper or straps. Omit only when the configuration uses no LDPE film.

- Selected flow: Low density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Alternating current (`electricity`)

Meter total assembly, factory no-load run, optional proof-cutting and packaging electricity once. Include allocated workshop lighting and handling. Declare grid geography, voltage and year; nameplate power is not measured consumption. The database names its energy reference property Net calorific value; here the exchange remains active AC electrical energy, not fuel heat. Convert kWh to its reference MJ using the stated unit rule.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered energy per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `grizzly-g0704-2018`

#### Outputs

##### Product flows

###### Machine-tools for drilling, boring or milling metal (`finished_machine`)

The sole reference output is one accepted complete machine of the declared configuration. Net mass M includes installed modules and retained initial lubricant, but excludes transport packaging and test coupons.

- Selected flow: Machine-tools for drilling, boring or milling metal `8fdae16a-d4a8-430d-ad3b-c7459b3eab6c`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Waste oil-contaminated cotton wiping cloth (`oily_cotton`)

Weigh dispatched oily cotton cloth, identify oil contamination and treatment route, and reconcile dry cloth plus absorbed oil. Do not represent this waste as clean cotton recycling.

- Selected flow: Waste oil-contaminated cotton wiping cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Carbon-steel proof cutting (`proof_cut`)

#### Inputs

##### Product flows

###### Carbon steel test coupon (`steel_coupon`)

Record the new carbon-steel coupon mass consumed by an actual acceptance proof cut. Record grade, initial and final mass and any reuse between machines. No coupon is assumed for a no-load-only acceptance plan.

- Selected flow: Carbon steel test coupon
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### High speed steel cutting tool (`hss_tool`)

Record the wear or replacement share of the actual solid HSS cutting tool used in acceptance. Declare geometry and grade. Carbide inserts, holders and HSS tools are distinct exchanges; this row cannot substitute for carbide tooling.

- Selected flow: High speed steel cutting tool
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test`
- Sources: `jrc-fabricated-metal-bemp-2020`

#### Outputs

##### Waste flows

###### Steel scrap, machining chips (`steel_chips`)

Weigh segregated carbon-steel chips from proof cutting. Declare oil contamination and measured drained oil separately. Reconcile chips with coupon mass loss, avoiding a second metal-loss estimate.

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Waste carbon steel test coupon (`spent_coupon`)

Record the residual coupon mass only when discarded across the site boundary. A coupon retained for another test remains stock, not waste. Keep solid remnants separate from chips.

- Selected flow: Waste carbon steel test coupon
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Waste high speed steel cutting tool (`spent_hss`)

Record discarded HSS tool mass attributable to acceptance tests and its recycling route. Retained reusable tools are stock. Do not assign tungsten-carbide scrap datasets to steel tooling.

- Selected flow: Waste high speed steel cutting tool
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test`
- Sources: `jrc-fabricated-metal-bemp-2020`

### Process: Neat-oil proof-cut fluid circuit (`wet_proof_cut`)

#### Inputs

##### Product flows

###### Neat mineral cutting oil (`cutting_oil`)

Include only when a proof cut actually uses neat mineral cutting oil. Record fresh makeup minus unused returns; closed-loop recirculation is not new input. Water-miscible concentrate requires a separately identified concentrate and water inventory.

- Selected flow: Neat mineral cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluid`
- Sources: `jrc-fabricated-metal-bemp-2020`

#### Outputs

##### Waste flows

###### Waste cutting oil (`waste_cutting_oil`)

Weigh spent neat cutting oil dispatched for treatment; state contamination and fate. Recovered oil reused internally is an internal circulation, not an avoided-product credit or external waste output.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass per one accepted finished machine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluid`
- Sources: `jrc-fabricated-metal-bemp-2020`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_subdivide | Shared production | First subdivide by model/configuration and meter dedicated assembly/test operations. For shared metered energy use recorded productive and idle hours with measured load profiles; mass is not the default allocation driver for electrical testing. Publish numerator, denominator and excluded downtime. |  |
| al_rework | Rejects and rework | Include failed tests, rework and final rejection losses in the numerator of the cohort that produces accepted machines. Normalize by accepted output only; an unfinished or rejected machine is not an accepted reference output. Track returned components and stock movement without negative double credits. |  |
| al_recycling | Recoverable residues | No automatic avoided-virgin-metal credit. Document waste/end-of-waste status and actual downstream treatment. Use one stated allocation convention consistently across supplier datasets; do not count internal recirculation as a co-product. | jrc-fabricated-metal-bemp-2020 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The following protocols are prospective foreground collection requirements, not measured example data. Collect a complete production campaign or representative reporting period with accepted output, opening/closing stock and all test/rework events. No external consumption or waste range is adopted: the available manual and broader metal-sector report do not provide two independent compatible complete-machine datasets. Packaging and allocation rules below are author methodology requirements, not claims about the example manufacturer.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_machine | acceptance weighing | model; configuration; serial number; accepted net mass M; scale id; calibration; retained fill; acceptance result | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each configuration and production cohort | same declared production period | declared factory and configuration | accepted net mass per machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_bom | assembly | structure; table_feed; spindle_head; control_unit; steel_bolt | BOM and stock ledger | supplier; part id; module inclusions; grade; received mass; installed mass; returns; rework; N | Weigh or use audited supplier mass BOM; reconcile stock issues, unchanged returns and installation records, including attributable rejects. Trace each module to a complete upstream dataset. | kg | each received batch and accepted cohort | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_consumables | assembly | way_oil; lithium_grease; cotton_wipe | weighing and issue ledger | product identity; formulation; fresh issues; unused returns; inventory change; retained fill; absorbed mass; N | Weigh containers before/after use, reconcile purchases and stock and distinguish retained lubricant from wiped-off oil. Record actual cloth reuse. | kg | each batch | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_packaging | assembly | wood_crate; pe_film | dispatch packaging record | crate/film identity; mass; reused trips; replacement; losses; shipment; N | Weigh actual packaging separately; reconcile dispatch counts and damaged packaging. Document any reuse allocation. | kg | each shipment | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_energy | assembly | electricity | submeter and operating log | meter id; start/end kWh; date; operating state; model; test/retest duration; shared loads; grid; N | Read calibrated meters over the same cohort period; allocate shared workshop and handling loads by measured load and time. Include conditional proof-cut circuits exactly once. | kWh | each shift or test run | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_waste | assembly | oily_cotton | waste transfer record | dry cloth; oil content; dispatched gross/net mass; stock; treatment; contractor; N | Weigh each separated dispatch and retain transfer/treatment evidence; reconcile dry cloth and absorbed lubricant. | kg | each dispatch | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_test | proof_cut | steel_coupon; hss_tool; steel_chips; spent_coupon; spent_hss | proof-cut ledger | acceptance plan; coupon grade and initial/final mass; tool grade; replacement; chips; oil carryover; stock; test/retest; N | Weigh coupons, drained chips and discarded remnants separately; allocate reusable tooling by documented cutting service or replacements. Preserve test result and rework linkage. | kg | each proof cut and dispatch | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |
| cp_fluid | wet_proof_cut | cutting_oil; waste_cutting_oil | oil circuit mass balance | oil formulation; fresh makeup; returns; beginning/end sump mass; drained waste; chip/cloth oil; losses; density if volumetric; N | Weigh fresh makeup and separate waste dispatches; reconcile sump change, oil carried on chips/cloth and any measured air loss. Do not count circulating volume as consumption. | kg | each test campaign and oil change | same declared production period | declared factory and configuration | per one accepted finished machine | calibration; signed ledger; acceptance/BOM/transfer reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_normalize | all inventory rows | q_i = Q_i / N. Q_i is the net measured exchange attributable to the cohort after documented allocation; N is the number of accepted machines of the same configuration. Reference output remains M kg per machine. N must be positive. | Q_i; N | kg or kWh per one accepted finished machine |  |
| cr_mass_check | finished_machine | Reconcile M with installed module/bolt mass plus retained fills. Packaging, wasted consumables, chips and coupons are excluded from M. Investigate differences against combined weighing/BOM uncertainty; do not force balance with invented material. | M; installed masses; retained fills | documented net-mass reconciliation |  |
| cr_coupon | proof_cut | Opening coupon stock + new coupon mass = closing reusable stock + dispatched remnants + chips + measured metal losses. Keep oil out of the dry-metal balance and include it in the oil balance. | coupon, chip and stock records | separate metal and fluid balances | jrc-fabricated-metal-bemp-2020 |
| cr_perkg | optional mass-normalized reporting | For an additional 1 kg presentation only, divide each per-machine exchange by the measured M of that same configuration. Preserve the original per-machine result and capability; never combine different M values without cohort weighting. | q_i; M | supplementary exchange per kg of machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | All exchanges | Trace measured foreground amounts to dated site records; distinguish measurement, supplier data, conversion and allocation. UUID resolution is identity evidence, never quantity evidence. | raw ledgers and calculation workbook |
| dq_representative | Model and technology | Do not average manual bench drills and large CNC boring/milling machines without explicit configuration weights and comparability analysis. Declare geographic grid and supplier year differences. | configuration list; period; supplier datasets |
| dq_gaps | Ranges and missing data | No numerical industry guardrail is available for this module-level route. Require site collection rather than inserting zero or a midpoint. Investigate anomalous intensity using repeat measurements and balances, not an unsupported universal tolerance. | gap register; uncertainty budget; reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_identity | Reference and boundary | Reject a data package without model, configuration, accepted count N, measured M and traceable acceptance evidence. Check classification exclusions before applying a machine UUID. | un-cpc-3-0-structure-2025 |
| vr_coverage | BOM and process coverage | Require complete module boundary reconciliation and upstream datasets. Additional fluids, fasteners, packaging, rejected assemblies, waste and elementary releases must be recorded as specific exchanges when present. No umbrella or negative balancing exchanges. |  |
| vr_units | All rows | Check property/unit, collection protocol, common accepted-machine basis and all density conversions. Reconcile net machine mass, coupon metal, oil and electric meter allocation without double counting. |  |
| vr_uuid | Selected flows | An unresolved UUID remains a named exchange requiring verified matching before dataset linking; do not substitute a raw-material or geographically incompatible proxy. Do not treat unresolved as absent or zero. |  |
| vr_tests | proof_cut; wet_proof_cut | Record inclusion or absence against the acceptance plan, actual material and fluid identities, and all failed/repeated tests. Customer operating consumption must not enter factory production. | grizzly-g0704-2018 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for one declared complete machine configuration. |
| downstream_use | Linked cradle-to-gate process and lifecyclemodel; reference flow definition. |
| allowed_use | Production assessment with complete upstream module coverage and measured site data. |
| excluded_use | Generic machine-service comparison; inferred lifetime performance; machining centres; incomplete gate-to-gate result labelled cradle-to-gate. |
| required_metadata | Reference qualifiers; BOM; module boundaries; N and M; year and geography; test branches; transport; grid; allocation; waste treatment. |
| required_quality_disclosure | Source applicability, unresolved UUIDs, foreground gaps, missing compatible ranges, stock/measurement uncertainty and any justified background proxies. |
| update_trigger | Configuration, supplier-module boundary, acceptance plan, fluid/tool identity, grid, allocation or waste-route change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | [United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | CSV rows 44211–44218: classification identity and neighbouring exclusions; no inventory quantities. |
| grizzly-g0704-2018 | handbook | [Grizzly Industrial, Model G0704 Mill/Drill with Stand Owner’s Manual, revised July 2018, models manufactured since 05/16](https://cdn0.grizzly.com/manuals/g0704_m.pdf) | Printed pp. 3, 20, 36–37 (PDF pp. 5, 22, 38–39): component identification, powered commissioning test and distinct lubricant identities. One small mill/drill; not a universal BOM, factory test duration, machine mass or industry range. |
| jrc-fabricated-metal-bemp-2020 | official_guidance | [European Commission Joint Research Centre, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020, DOI 10.2760/894966](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf) | Sections 4.1 and 4.5, printed pp. 189–190 and 226 (PDF pp. 191–192 and 228): fluid forms and material-residue segregation/collection. Applied only to machining within acceptance or upstream module production; not complete-machine quantitative evidence. Excellence benchmarks are not empirical ranges. |
