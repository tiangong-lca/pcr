---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-metal-by-forging-hammering-or-die-stamping-machine-tools-for-9b56c7e2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Metal-forming machine-tools and presses

## 1. Scope and Applicability

This PCR defines a manufacturer-gate foreground dataset for complete machine-tools that forge, hammer, die-stamp, bend, fold, straighten, flatten, shear, punch or notch metal, and other presses for metal or metal carbides. It covers the machine as a manufactured product, including its installed drive, controls, guarding and declared first fill. It does not describe the production of the customer's formed workpieces. The category boundary follows the official CPC structure (`un-cpc-3-0-structure-2025`).

A configuration-specific dataset shall distinguish mechanical, hydraulic and electric actuation; a hydraulic press brake is a representative configuration, not a universal bill of materials. Hammer impact equipment and precision sheet-metal brakes shall not be averaged solely because they share a classification. The manufacturer's hydraulic brake example supports recording the installed hydraulic system, backgauge, control and safeguarding configuration (`trumpf-trubend-3000`); its catalogue specifications are not manufacturing inventory quantities or industry ranges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-metal-by-forging-hammering-or-die-stamping-machine-tools-for-9b56c7e2 |
| classification_refs | CPC 3.0: 44217; classification context only |
| covered_products | Complete forging and hammering machines; die-stamping presses; metal bending, folding, straightening, flattening, shearing, punching and notching machine-tools; other metal or metal-carbide presses |
| excluded_products | Material-removal machine-tools; residual non-removal machines outside the listed operations; metal-rolling mills; separately sold dies, machine parts and attachments; hand-held tools; presses for wood or plastics; customer workpieces; refurbishment services |
| representative_product | One complete hydraulic metal press brake with its specified drive, electrical cabinet, backgauge and guarding |
| production_route | Purchased traceable metal stock, castings and components; conditional frame fabrication and machining; conditional coating; assembly, alignment, factory acceptance and packing |
| market_state | New complete machine accepted at the manufacturer gate, with declared installed options and first-fill state; transport packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an accepted complete metal-forming machine-tool with the declared operation and configuration |
| How much | One accepted finished machine, represented by its measured net mass M |
| How well | Meets the declared contractual acceptance specification for force or impact energy, working envelope, stroke, positioning accuracy, guarding and installed options; no category-wide performance equivalence is implied |
| How long or cycle | One manufacture and factory-acceptance cycle; service-life performance is outside this manufacturer-gate dataset |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machine-tools for working metal by forging, hammering or die-stamping, machine-tools for working metal by bending, folding, straightening, flattening, shearing, punching or notching, other presses for working metal or metal carbides `ef918c66-bff0-4bd0-b84b-2912b75af3e4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | operation; machine model; serial or batch identifier; drive technology; force or impact energy; stroke and working envelope; installed controls and guards; casting or fabricated frame; tooling included; net mass measurement; hydraulic-fluid delivery state; acceptance date; site and geography; manufacturing period; upstream coverage; packaging configuration |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| configuration_mass | reference product | Mass | kg | Include all supplied installed assemblies and retained first fill; exclude transport packaging, temporary test equipment and separately supplied spare parts. Mass and acceptance records shall refer to the same configuration. |
| energy_units | energy inputs | Net calorific value | MJ | The generic electricity identity does not specify voltage, geography or technology. Retain meter units, actual voltage, supplier mix, site and period. If reported in MJ, use the unit identity 1 kWh = 3.6 MJ and preserve the original record. Do not infer consumption from nameplate power alone. |
| liquid_mass | liquid inputs and wastes | Mass | kg | Prefer weighing. A volume-to-mass conversion requires the measured or supplier-documented density at the recorded temperature and composition; do not apply oil density to an emulsion. |
| component_count | purchased assemblies | Mass | kg | Retain counts and model-specific weighed or documented unit masses; multiply counts by matching unit masses. Do not replace finished-component burdens with the constituent raw-metal burden alone. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of identified metal stock, castings and purchased components at the manufacturing site, with their delivered processing and coating state declared |
| starting_condition_role | Foreground entry gate; upstream production is linked through supplier or appropriate background datasets |
| product_classification_scope | Complete machine-tools and presses performing the listed metal-forming and mechanical separation operations |
| recursive_input_rule | Record a purchased complete same-category machine as an input at its declared delivered state when physically incorporated; use its upstream dataset without recursively reproducing its entire bill of materials. Production machinery used as capital equipment is not an incorporated machine. |
| upstream_dataset_requirement | Cover extraction and manufacture of each purchased material and assembly, including outsourced casting, heat treatment, machining and coating where applicable; disclose any coverage gap before claiming cradle-to-gate completeness |
| disclosure | Site, period, operation, drive, delivered mass and fluid state, make/buy split, subcontracting, included tooling and automation, utilities allocation, packaging, upstream transport and waste-treatment coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_product | product identity | Include the complete accepted machine and declared supplied options; exclude customer production and independently marketed parts from the reference product. | un-cpc-3-0-structure-2025 |
| boundary_manufacturing | foreground | Include all operations attributable to producing and accepting the declared machine, including rework, retesting and ancillary electricity. Purchased finished components retain upstream processing burdens. Use cp_route to identify additional actual operations and add a separate atomic exchange for each actual input, waste and direct emission. | |
| boundary_routes | conditional processes | The listed cards cover stock/casting preparation, emulsion machining and electric powder finishing where performed. Foundry melting, non-electric heat treatment, solvent painting, combustion and other site operations require explicit additional processes and species-specific exchanges when present; they cannot be silently omitted or represented by an umbrella flow. | jrc-fabricated-metal-bemp-2020 |
| boundary_first_fill | hydraulic and lubrication systems | Distinguish oil retained in the shipped machine from temporary test-loop oil, makeup losses and discarded oil. Include controls, backgauge and safeguards in the configuration reconciliation where installed. | trumpf-trubend-3000 |
| boundary_recovery | machining wastes | Segregate metal grades and separate recovered cutting fluid from exported metal residues. Internal circulation is not a fresh input or an avoided-production credit. | jrc-fabricated-metal-bemp-2020 |
| boundary_downstream | dataset use | Record inbound transport mode, origin and distance per supply route for linking transport datasets. Off-site waste treatment is linked once by waste type and destination. Outbound delivery, installation, customer use, maintenance and machine end of life are separate scenarios and must not be inferred from acceptance testing. | |

The hydraulic-press case in `huang-hydraulic-press-lifecycle-2023` supports steel cutting, weld preparation, welding and stress relief as distinct manufacturing operations. Its structural-component inventory excludes transport, storage and some auxiliaries, so its case values cannot represent this complete-machine boundary or establish a manufacturing range.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Frame fabrication and welding | conditional | Steel frame or enclosure is fabricated on site | foreground production | per one accepted finished machine |
| machining | Component machining and fluid management | conditional | Bed, ram, shaft or other components are machined on site | foreground production | per one accepted finished machine |
| coating | Polyester powder finishing | conditional | Polyester powder is applied and electrically cured on site | conditioning | per one accepted finished machine |
| assembly | Mechanical, hydraulic and electrical assembly | required | | foreground production | per one accepted finished machine |
| acceptance | Factory acceptance and shipment preparation | required | | foreground production | per one accepted finished machine |

Each conditional row is included only where the stated physical exchange occurs. A missing record is not evidence of absence. The product-specific route census and bill of materials shall add concrete rows for actual exchanges beyond this common inventory. Utilities generated internally are represented by their purchased inputs and direct releases, without also counting an internal compressed-air or heat transfer as purchased supply.

### Process: Frame fabrication and welding (`fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel plate (`frame_steel`)

For a fabricated steel frame using hot-rolled non-alloy plate delivered at least 600 mm wide before cutting; weigh incoming plate, nesting offcuts and internal returns. Record grade and coating state; other delivered stock requires a separate exact identity.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Steel arc-welding wire (`welding_wire`)

For welded frames; record net filler consumed, excluding reusable spool mass.

- Selected flow: Steel arc-welding wire
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Argon gas (`welding_argon`)

When purchased gaseous argon shielding is used; meter argon separately from any other shielding gas. For liquid delivery, document the liquid input and vaporization separately without double counting internal gaseous argon.

- Selected flow: Argon gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Electricity (`fabrication_power`)

Meter frame cutting and welding, extraction fans, compressed-air generation and attributable handling.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Electricity (`stress_relief_power`)

When the fabricated frame receives electric stress-relief heat treatment on site; include furnace holding and attributable warm-up, separately from welding electricity.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### Non-alloy steel fabrication scrap (`fabrication_scrap`)

Weigh exported clean steel offcuts; internal recuts remain internal and receive no exported recycling credit.

- Selected flow: Non-alloy steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-fabricated-metal-bemp-2020`

### Process: Component machining and fluid management (`machining`)

#### Inputs

##### Product flows

###### Grey cast iron machine-bed casting (`frame_casting`)

For a cast bed or flywheel; use the purchased casting mass before machining and retain supplier casting-process coverage.

- Selected flow: Grey cast iron machine-bed casting
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Low-alloy steel bar (`shaft_stock`)

When shafts, rams or transmission parts are machined from low-alloy bar delivered no further worked than forged, hot-rolled, hot-drawn or extruded; exclude high-speed and silico-manganese steel from this identity. Record alloy, delivered processing state, heat treatment and stock dimensions; further-worked purchased bars require a separate exact identity.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Electricity (`machining_power`)

Meter machining and attributable idle, coolant circulation, chip handling and compressed-air electricity.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Water-soluble metalworking fluid concentrate (`cutting_concentrate`)

For emulsion machining only; record neat concentrate and recipe identity, separately from dilution water.

- Selected flow: Water-soluble metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Tap water (`dilution_water`)

For diluted machining fluid or washing; record water supply separately and prevent double counting premixed fluid.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid`
- Sources: `jrc-fabricated-metal-bemp-2020`

#### Outputs

##### Waste flows

###### Steel machining chips (`steel_chips`)

Segregate alloy grades, record retained oil and moisture, and use dry metal mass where the receiving flow requires it.

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Cast iron machining chips (`cast_iron_chips`)

For machined castings; segregate from steel chips and record treatment destination.

- Selected flow: Cast iron machining chips
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Spent oil-water metalworking emulsion (`spent_cutting_fluid`)

For discarded emulsions; record wet mass, oil fraction and licensed treatment rather than a generic wastewater total.

- Selected flow: Spent oil-water metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-fabricated-metal-bemp-2020`

### Process: Polyester powder finishing (`coating`)

#### Inputs

##### Product flows

###### Polyester powder coating (`coating_powder`)

For polyester powder finishing; record fresh powder net of unused stock returns; recovered powder remains internal.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Electricity (`coating_power`)

For electrically cured powder coating; include application, extraction and curing energy.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### Waste polyester coating powder (`coating_residue`)

Weigh unrecovered powder sent off site; distinguish it from powder recycled in the booth.

- Selected flow: Waste polyester coating powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

### Process: Mechanical, hydraulic and electrical assembly (`assembly`)

#### Inputs

##### Product flows

###### Alternating-current electric motor (`drive_motor`)

For installed industrial AC drives; retain motor count, supply type, rated power, efficiency class and supplier mass per model. Traction, small/DC or separately specified servo configurations require their own exact identity review.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Hydraulic cylinder (`press_cylinder`)

For hydraulic presses and hydraulic auxiliary actuation; record cylinder configuration and assembled mass.

- Selected flow: Hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Hydraulic pump (`hydraulic_pump`)

For hydraulic power units; include the pump once and exclude any motor already counted separately.

- Selected flow: Hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Machine-tool electrical control cabinet (`control_cabinet`)

For supplied controls; document included PLC, drives and internal wiring so separately recorded cable does not duplicate them.

- Selected flow: Machine-tool electrical control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Steel ball bearing (`ball_bearings`)

Where ball bearings are installed; retain exact bearing type and quantity, not a proxy for every bearing technology.

- Selected flow: Steel ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Insulated copper cable (`external_wiring`)

For wiring outside purchased cabinets or motor assemblies; record insulation and conductor specification.

- Selected flow: Insulated copper cable
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Mineral hydraulic oil (`hydraulic_fill`)

For mineral-oil hydraulic circuits; separate retained first fill from testing losses and recoverable temporary test oil.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid`

###### Lubricating grease (`bearing_grease`)

For lubricated joints; count factory fill only and disclose the grease formulation.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fluid`

###### Industrial gearbox (`gear_transmission`)

For geared mechanical or servo presses; record complete purchased gearbox mass and avoid counting its internal gears again.

- Selected flow: Industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Steel bolt (`steel_bolts`)

For separately installed bolted joints; exclude fasteners already included in supplier assembly mass.

- Selected flow: Steel bolt
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Reinforced rubber hydraulic hose (`hydraulic_hose`)

For flexible hydraulic connections; retain rubber and reinforcement specification, pressure rating and supplied length.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Nitrile rubber sealing ring (`nitrile_seal`)

Where separately fitted nitrile seals are used; avoid duplicating seals already included in a cylinder or pump assembly.

- Selected flow: Nitrile rubber sealing ring
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Tool-steel forming die (`forming_die`)

When a specific die is included in the delivered machine configuration; exclude independently sold tooling and temporary factory-test tooling.

- Selected flow: Tool-steel forming die
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Photoelectric safety light curtain (`safety_light_curtain`)

For the installed optical safeguarding configuration; declare sensor and receiver scope separately from the electrical cabinet.

- Selected flow: Photoelectric safety light curtain
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component`

###### Electricity (`assembly_power`)

Measure assembly tools, alignment and attributable handling energy.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

#### Outputs

### Process: Factory acceptance and shipment preparation (`acceptance`)

#### Inputs

##### Product flows

###### Electricity (`acceptance_power`)

Meter warm-up, no-load and loaded acceptance cycles, plus retests and attributable auxiliaries.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect electricity per one accepted finished machine using cp_energy; convert measured kWh to MJ using 1 kWh = 3.6 MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Hot-rolled non-alloy steel plate (`test_steel`)

When factory test coupons are cut from hot-rolled non-alloy plate delivered at least 600 mm wide; account for reused coupons across documented tests. Separately purchased narrow or differently processed coupons require their own exact identity.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`

###### Sawn softwood timber (`crate_timber`)

For shipment crates or skids; record delivered timber and any reuse allocation separately from machine net mass.

- Selected flow: Sawn softwood timber
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Low-density polyethylene film (`packing_film`)

For non-cellular, non-reinforced LDPE protective wrap; record film mass separately from the machine and crate.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

#### Outputs

##### Product flows

###### Metal-forming machine-tool (`finished_machine`)

One complete accepted machine in the declared configuration; exclude detachable transport packaging from net mass.

- Selected flow: Machine-tools for working metal by forging, hammering or die-stamping, machine-tools for working metal by bending, folding, straightening, flattening, shearing, punching or notching, other presses for working metal or metal carbides `ef918c66-bff0-4bd0-b84b-2912b75af3e4`
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

###### Steel test-piece scrap (`test_scrap`)

Record discarded test pieces; saleable output and retained test specimens require separate accounting.

- Selected flow: Steel test-piece scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-fabricated-metal-bemp-2020`

###### Waste mineral hydraulic oil (`drained_oil`)

For discarded flushing or testing oil; oil returned to the test rig stays inside the system.

- Selected flow: Waste mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the physical exchange per one accepted finished machine using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_direct | shared production | First assign materials, purchased parts and metered operations to the order and serial/configuration records using cp_material, cp_component and cp_energy. Subdivide shared operations before allocating totals. | |
| allocate_campaign | shared electricity and fluids | Use measured equipment time and corresponding operating load where subdivision is unavailable; document the causal allocation key, included idle/standby share, numerator, denominator and reconciliation to facility totals in cp_energy or cp_fluid. Simple machine-count averaging is allowed only for identical configurations under equivalent operating conditions. | |
| allocate_scrap | exported waste and internal returns | Retain gross material inputs and segregated exported waste outputs. No automatic negative burden or virgin-material substitution credit is granted for scrap. Record the receiving treatment or recycling model and avoid double counting its recovery credit. Internal material and oil returns remain internal. | jrc-fabricated-metal-bemp-2020 |
| allocate_test | acceptance output | Attribute test coupons, energy and consumables to the machines being accepted. Disclose any commercially sold test output; where material, subdivide the trial or apply a documented physical allocation and sensitivity assessment. Record rework and failed tests in the accepted-machine burden. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted reference product | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | entire accepted order | manufacturer site | accepted net mass per machine | scale calibration; tare and weighing ticket; configuration checklist |
| cp_route | assembly | process and configuration completeness | route census | order; operation; make/buy decision; material grade; component model; installed options; subcontractor; supply origin and transport mode/distance; waste destination; actual utilities and emissions | Reconcile production traveller, BOM, purchase records and site walk-through; identify missing process-specific exchanges and supplier coverage before inventory approval. | record | each configuration and route change | complete order and linked common-service period | site and subcontractors | complete route record per one accepted finished machine | approved BOM; manufacturing traveller; supplier coverage statements; route and waste documents |
| cp_material | fabrication, machining | stock, filler and gas inputs | material ledger | material; grade; batch; issued mass; returned mass; stock change; scrap; order; shielding-gas composition | Weigh issues and returns; reconcile warehouse, job and production records; use documented temperature/pressure conversion only for volumetric gas records. | kg | each issue and return | full production campaign | contributing work centres | attributable quantity / accepted machines | calibrated scales; batch certificates; warehouse reconciliation |
| cp_component | assembly | bought assemblies | component BOM | item identifier; model; quantity; net unit mass; included subcomponents; supplier; delivered state | Reconcile the as-built BOM against received components; use traceable unit weighing or supplier mass records; prevent parent/child double counting. | kg | each order and revision | accepted configuration | assembly and suppliers | attributable quantity / accepted machines | BOM; supplier data; weighing records; scope matrix |
| cp_energy | fabrication, machining, coating, assembly, acceptance | purchased electricity | meter and load record | meter; voltage; start/end readings; work centre; operating state; cycle count; job hours; allocation key; idle share | Submeter each operation including extraction and internal utility generation; reconcile allocation of unmetered common loads to site invoices. | kWh | each job or representative measured campaign | all contributing production and acceptance periods | site and work centres | attributable electricity / accepted machines | meter calibration; logs; invoices; allocation reconciliation |
| cp_fluid | machining, assembly | water, concentrate, oil and grease | fluid balance | chemical identity; formulation; quantity issued; returns; retained fill; dilution water; discarded mass; density and temperature when used | Weigh or meter each individual fluid separately; reconcile fresh supply, internal recovery, machine retention and disposal. | kg | each fill, makeup and discharge | complete order and fluid-service period | machining, assembly and test loops | attributable quantity / accepted machines | safety data sheets; fill logs; calibrated measurement; fluid balance |
| cp_coating | coating | fresh coating powder | coating ledger | formulation; fresh issue; unused return; recovered powder; discard; coated order; curing route | Weigh powder and stock movement; separate fresh consumption, booth recirculation and exported waste. | kg | each coating batch | coating campaign for declared orders | coating line | attributable quantity / accepted machines | batch records; scales; coating specification |
| cp_waste | fabrication, machining, coating, acceptance | specific exported waste | waste consignment | waste identity; metal grade or composition; wet/dry basis; oil content; measured mass; origin; destination; treatment | Weigh each separately identified waste stream; retain consignment documents and reconcile internal returns before calculating external outputs. | kg | each consignment with order allocation | entire manufacturing and acceptance period | waste-generating work centres | attributable quantity / accepted machines | calibrated scales; manifests; oil/moisture tests; recycler records |
| cp_test | acceptance | test coupon material | acceptance record | machine configuration; test method; force/energy; stroke; cycles; coupon grade; fresh mass; reused mass; rejected tests; disposition | Link physical coupon issues and trial logs to each accepted machine; retain contractual acceptance results and all repeat trials. | kg | each acceptance trial | first trial through final acceptance | factory test area | attributable quantity / accepted machines | test report; material issue records; reuse log |
| cp_packaging | acceptance | timber and film | packing BOM | packaging component; mass; new/reused status; trips and ownership where reusable; machine serial | Weigh each packaging material separately; document actual reuse allocation; keep packaging outside accepted machine net mass. | kg | each shipment | shipment preparation | packing area | attributable quantity / accepted machines | packing list; weighing tickets; reuse ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_per_machine | all inventory rows | Divide attributable exchange totals by the number of accepted machines of the same configuration; use direct order attribution wherever available. Retain rejected-unit and rework burdens attributable to accepted output. | attributable totals; accepted count; cp_route | exchange amount per one accepted finished machine | |
| stock_balance | material and fluid inputs | Reconcile opening stock plus receipts minus closing stock and unconsumed returns with net external consumption; internal circulation is excluded from fresh supply. | cp_material; cp_fluid; cp_coating | net physical input, separately by flow | |
| component_mass | purchased assemblies | Multiply installed count by traceable model-specific unit mass; reconcile with the as-built BOM and the measured complete-machine mass without treating scrap or packaging as retained machine mass. | cp_component; cp_mass | installed component mass by item | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | complete machine | Declare operation, drive, delivered state and acceptance specification. Do not merge forging hammers, bending brakes and punching presses solely by mass. | cp_route; cp_mass; un-cpc-3-0-structure-2025 |
| dq_coverage | foreground and suppliers | Cover the full accepted order or disclose representativeness of a measured campaign; include all contributing shifts and shared services. Identify every omitted operation and upstream gap. No arbitrary small-mass cutoff permits omitting relevant coatings, electronics or oil. | cp_route; reconciled production traveller |
| dq_material | BOM and wastes | Reconcile retained material with the delivered net machine mass, segregated waste and documented losses; assess moisture, fluid retention and measurement uncertainty before accepting discrepancies. | cp_mass; cp_component; cp_waste |
| dq_energy | electricity | Match geography, voltage, period and supply technology. Nameplate power is insufficient without measured load and operating time. | cp_energy |
| dq_source | external evidence | Use the JRC metalworking passages only for applicable machining-fluid and residue-management principles; the report does not establish press-manufacturing intensity. The hydraulic-brake product page supports configuration only. | jrc-fabricated-metal-bemp-2020; trumpf-trubend-3000 |
| dq_ranges | important exchanges | Collect site-specific material, energy, fluid, waste and packaging amounts. Any later empirical range requires at least two independent original sources with compatible product state and boundaries, or a separately reviewed foreground basis. | collection records and documented source assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_machine | Confirm M is measured net mass of the accepted configuration, and all inventory quantities use the same one-machine denominator. Do not publish a fictitious numerical machine mass. | |
| validate_atomic | every exchange | Require one identified physical product, waste or elementary species per row, with compatible flow type, property and unit. Missing database identity does not authorize a proxy; resolve identity before dataset publication or disclose the explicit gap. | |
| validate_configuration | route and BOM | Reconcile each supplied functional assembly, guarding, tooling and first fill with the configuration; extend the atomic inventory for actual components or processes absent from the common cards. Missing, purchased or outsourced is not equivalent to zero burden. | trumpf-trubend-3000 |
| validate_balances | inputs and outputs | Reconcile material, fluid, electricity and waste balances; investigate discrepancies using recorded uncertainty and stock changes. Segregated residue and internal recovery records must prevent double counting. | jrc-fabricated-metal-bemp-2020 |
| validate_boundary | dataset | Verify upstream process coverage, transport linkage and waste treatment once each; label a foreground-only dataset as such when cradle-to-gate coverage is incomplete. Reject use-stage comparisons based solely on factory acceptance energy. | |
| validate_evidence | ranges and assumptions | Do not turn catalogue weights, single cases, regulatory limits or alternative models from one publication into an empirical industry range. Disclose allocation sensitivity and all unverified assumptions. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground manufacturing data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing inventory for the declared complete metal-forming machine; upstream linkage and incorporation in a separately specified equipment life-cycle model |
| excluded_use | Unqualified comparisons across machine functions; customer workpiece processing burdens; lifetime energy prediction from acceptance testing; treating a kilogram of heterogeneous machines as functionally equivalent |
| required_metadata | Model and operation; drive; force or impact energy; stroke/envelope; installed configuration and tooling; measured net mass; fluid state; site; production period; make/buy split; upstream coverage; supply routes; allocation; packaging; dataset version |
| required_quality_disclosure | Measurement coverage and uncertainty; representative campaign selection; supplier gaps; conditional absent exchanges; unresolved flow identities; range-evidence gaps; direct versus allocated amounts; waste-treatment and recycling model |
| update_trigger | Changed design, drive, configuration, material grade, supplier route, coating, site energy supply, first-fill condition or acceptance procedure; new measured data replacing assumptions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, rows 2264–2274. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; original checked 2026-09-22. | Classification identity and adjacent exclusions; no inventory quantity |
| jrc-fabricated-metal-bemp-2020 | official_guidance | European Commission Joint Research Centre, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020, DOI 10.2760/894966, sections 4.1 and 4.5, printed pp. 190 and 226. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf ; original pages checked 2026-09-22. | Applicable machining-fluid distinctions and segregation of chips, oil and residues; no machine-specific range |
| trumpf-trubend-3000 | literature | TRUMPF, TruBend Series 3000, official manufacturer product page, snapshot retrieved 2026-09-22, sections Backgauge, BendGuard and On-demand hydraulic system. https://www.trumpf.com/en_US/products/machines-systems/bending-machines/trubend-serie-3000/ | Representative hydraulic press-brake configuration and acceptance descriptors; no empirical manufacturing range |
| huang-hydraulic-press-lifecycle-2023 | literature | Huang H., Zou X., Liu Z., Life cycle oriented low carbon manufacturing of mechanical equipment: method and application, Green Manufacturing Open 2023;1:9. DOI 10.20517/gmo.2022.07. https://www.oaepublish.com/articles/gmo.2022.07 ; full-text section Carbon emissions in the manufacture, checked 2026-09-22. | Press-frame cutting, welding and stress-relief decomposition; case-boundary limitations; no numerical range adopted |
