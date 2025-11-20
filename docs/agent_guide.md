# Fire Emblem Map Viewer: Agent System Guide

This guide is designed to help an AI agent create a new scenario (campaign) for the Fire Emblem Map Viewer. By following these instructions, you can generate a complete, playable scenario based on a simple user-provided theme.

## 1. System Overview

The project is a React-based web viewer that renders grid-based tactical maps. It is data-driven, meaning the entire campaign—units, maps, enemies, and text—is defined in two JSON files:
- `viewer/src/data/units.json`: Defines the player's roster.
- `viewer/src/data/maps.json`: Defines the maps, layout, enemies, and objectives.

To create a new scenario, you only need to modify these two files. No React code changes are usually required unless you need new terrain visuals or mechanics.

## 2. Creating Player Units (`units.json`)

This file contains an array of player unit objects.

### Schema
```json
[
  {
    "id": "unique_id",       // e.g., "P1"
    "name": "Unit Name",     // e.g., "Elara"
    "class": "Class Name",   // e.g., "Paladin"
    "stats": {
      "hp": 30,
      "str": 12,
      "mag": 4,
      "skl": 14,
      "spd": 13,
      "lck": 10,
      "def": 11,
      "res": 8,
      "mov": 7
    },
    "items": ["Item 1", "Item 2"]
  }
]
```

### Agent Instructions
1.  **Theme Alignment**: Design 4-6 units that fit the user's requested theme (e.g., "Pirate Crew", "Magic Academy").
2.  **Class Variety**: Ensure a mix of melee (Sword/Lance/Axe), ranged (Bow/Magic), and utility (Healer/Thief).
3.  **Stat Balance**: Keep stats reasonable (HP 20-40, other stats 5-20 for low-level campaigns).

## 3. Creating Maps (`maps.json`)

This file contains an array of map objects. This is the core of the scenario.

### Schema
```json
[
  {
    "id": "map_01",
    "name": "Chapter Name",
    "objective": "Objective Text", // e.g., "Defeat Boss"
    "width": 15,                   // Must match layout row length
    "height": 10,                  // Must match layout row count
    "layout": [                    // Array of strings, one per row
      "WWWWWWWWWWWWWWW",
      "W...T........EW",
      "W.S.T...P....EW"
    ],
    "legend": {                    // Maps characters to terrain types
      ".": "Plain",
      "W": "Wall",
      "T": "Tree",
      "S": "Start",            // Player spawn points (Required)
      "E": "Escape"
    },
    "enemies": [
      {
        "id": "E1",
        "class": "Soldier",
        "hp": 20,
        "x": 10,           // 0-indexed column
        "y": 2,            // 0-indexed row
        "isBoss": false    // Optional, true for bosses
      }
    ]
  }
]
```

### Agent Instructions for Map Design

#### A. Layout (ASCII Grid)
Use a grid of characters to represent the map.
- **Standard Symbols**:
    - `.`: Plain/Floor (Walkable)
    - `W`: Wall (Blocking)
    - `T`: Tree/Forest (Avoidance bonus)
    - `M`: Mountain (High cost/blocking)
    - `R`: River (Water)
    - `B`: Bridge
    - `S`: Player Start Position (Place 4-6 of these together)
    - `X` or `E`: Enemy Spawn (Visual marker only, actual enemy data is in `enemies` array)
    - `G` or `O`: Goal/Throne/Escape point

#### B. Dimensions
- **CRITICAL**: The `width` property MUST match the length of every string in the `layout` array.
- **CRITICAL**: The `height` property MUST match the number of strings in the `layout` array.
- *Failure to match dimensions will cause the viewer to crash.*

#### C. Enemy Placement
- Define enemies in the `enemies` array.
- **Coordinates**: `x` is the column (0 to width-1), `y` is the row (0 to height-1).
- **Bosses**: Set `"isBoss": true` for the main antagonist of the map. They get a gold border.

## 4. Workflow for a New Scenario

When a user asks for a new scenario (e.g., "Make a zombie survival campaign"):

1.  **Concept Phase**:
    - Propose a 3-5 map arc.
    - Define the player party theme.

2.  **Data Generation**:
    - Generate the full JSON content for `units.json`.
    - Generate the full JSON content for `maps.json`.

3.  **Implementation**:
    - Use `write_to_file` to overwrite `viewer/src/data/units.json`.
    - Use `write_to_file` to overwrite `viewer/src/data/maps.json`.

4.  **Verification**:
    - **CRITICAL**: Double-check map `height` vs `layout` row count.
    - **CRITICAL**: Double-check map `width` vs `layout` string length.
    - Run the browser agent to verify the maps load without crashing.

## 5. Visual Customization (Optional)

The viewer uses CSS classes for terrain.
- `index.css` contains classes like `.tile-Wall`, `.tile-Tree`, `.tile-River`.
- If you introduce a new legend key (e.g., `L` for Lava), you must add a corresponding `.tile-Lava` class in `viewer/src/index.css` to give it a distinct color or pattern.

---
**Example Prompt for Future Agent:**
> "Create a 3-map campaign where a group of thieves tries to rob a heavily guarded castle. Map 1 is the sewers, Map 2 is the courtyard, Map 3 is the treasure room."
