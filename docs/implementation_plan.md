# Implementation Plan - FTL Scenario

## Goal Description
Create a 5-map "FTL: Faster Than Light" themed scenario for the Fire Emblem Map Viewer. The player controls a crew of 4 specialists trying to escape a Rebel Fleet.

## User Review Required
> [!NOTE]
> The "Fog of War" and "Rescue" mechanics mentioned in the prompt are not explicitly supported by the current JSON schema (based on `agent_guide.md`).
> - **Map 2 (Nebula):** I will simulate the "ambush" feeling using terrain (Nebula/Forest tiles) and enemy placement, but actual Fog of War visibility mechanics might not be present in the viewer unless they are already implemented in the React code (which I am not modifying).
> - **Map 3 (Rescue):** Since there is no "Green Unit" or "NPC" array in the schema, I will represent the civilian as a specific tile (e.g., a "House" or "Point of Interest") that the player must visit before escaping, or simply frame it narratively.

## Proposed Changes

### Data Files

#### [MODIFY] [units.json](file:///c:/Users/camd1/OneDrive/Documents/TryFireEmblemMaps/viewer/src/data/units.json)
Overwrite with 4 new units:
1.  **Ace (Pilot)** - High Mov, Balanced stats. Class: "Pilot". Items: "Blaster" (Sword equivalent).
2.  **Sparky (Engineer)** - High Mag/Res. Class: "Engineer". Items: "Plasma Cutter" (Magic equivalent).
3.  **Sarge (Marine)** - High HP/Str/Def. Class: "Marine". Items: "Pulse Rifle" (Axe equivalent).
4.  **Doc (Medic)** - High Lck/Res. Class: "Medic". Items: "Medkit" (Staff equivalent).

#### [MODIFY] [maps.json](file:///c:/Users/camd1/OneDrive/Documents/TryFireEmblemMaps/viewer/src/data/maps.json)
Overwrite with 5 new maps. All have Objective: "Escape" (Arrive at 'E' tiles).

*   **Map 1: Breakout**
    *   Small 10x10 map.
    *   Corridor layout.
    *   Weak enemies ("Rebel Guards").
*   **Map 2: Nebula**
    *   Medium 15x10 map.
    *   Lots of "Tree" tiles (repurposed as Nebula clouds) for avoidance bonuses.
    *   Enemies hidden in "clouds".
*   **Map 3: Distress Signal**
    *   Medium 15x12 map.
    *   Side objective area (optional path).
*   **Map 4: The Blockade**
    *   Large 20x15 map (or max supported size).
    *   Narrow chokepoint defended by a "Boss" unit ("Rebel Captain").
*   **Map 5: The Final Jump**
    *   Survival/Escape map.
    *   Player starts surrounded or in a corner.
    *   Objective: Reach the "Jump Beacon" (Escape tile) at the far end.

## Verification Plan

### Automated Tests
*   None available for data files.

### Manual Verification
1.  **Load the Viewer**: Open the web viewer (I will assume it's running or I can start it if needed, but usually I just verify the files).
2.  **Check Units**: Verify all 4 units appear with correct names and stats.
3.  **Play Map 1**: Move units, check if "Escape" tiles work (if implemented in engine) or just visually verify layout.
4.  **Cycle Maps**: Use the viewer's map selector to load Maps 1-5.
    *   Verify layouts match the "FTL" theme (corridors, space, etc.).
    *   Verify enemy placement.
    *   **Critical Check**: Ensure `width` and `height` match the `layout` array dimensions to prevent crashes.
