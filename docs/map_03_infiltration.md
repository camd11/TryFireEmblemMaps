# Map 3: The Infiltration

## Overview
**Objective**: Defeat the Boss (Hidden in the mist).
**Loss Condition**: Elara dies.
**Player Units**: Elara, Kaelen, Lyra, Thorne.
**Special Condition**: **FOG OF WAR** (Vision Range: 3 tiles. Thorne: 6 tiles. Torch: +4).

## Narrative Context
To avoid the main army, the Sapphire Guard cuts through the Whispering Woods. The Iron Legion has deployed scouts and assassins here.

## Map Layout
Size: 15x15
Legend:
. = Plain
T = Forest (Avo +20, Def +1, Mov Cost 2)
M = Mountain (Impassable for all but Flyers)
V = Village (Visit for item)
S = Start
? = Hidden Enemy (Initial position)
B = Boss

```
T T T T T T T T T T T T T T T
T S . . T . . . . . T . . . T
T . S . T . ? . . . T . ? . T
T S . S T . . . . . . . . . T
T . . . T T T . . . M M M . T
T . ? . . . . . . . M B M . T
T . . . T T T . . . M . M . T
T . . . T . T . . . . . . . T
T . V . T . T . ? . . . . . T
T . . . . . . . . . . . . . T
T T T T T . . . T T T T T T T
. . . . . . ? . . . . . . . .
. . . . . . . . . . . . . . .
W W W W W W W W W W W W W W W
```

## Enemy Units (Iron Legion - Scout Detachment)
Total Enemies: 8 Initial + Ambush Spawns

| ID | Class | Lvl | Weapon | HP | Str | Skl | Spd | Def | Res | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| E1 | Myrmidon | 5 | Killing Edge | 22 | 6 | 9 | 11 | 3 | 1 | **DANGER**: High Crit. |
| E2 | Mage | 5 | Fire | 20 | 2 | 6 | 7 | 2 | 6 | Hidden in trees. |
| E3 | Archer | 5 | Longbow | 22 | 6 | 7 | 6 | 4 | 2 | Snipes from fog. |
| E4 | Wyvern | 6 | Iron Axe | 28 | 10 | 6 | 5 | 9 | 2 | Flies over mountains. |
| Boss | Assassin | 7 | Silver Sword | 30 | 9 | 12 | 13 | 6 | 3 | Does not move. |

## Events
1.  **Village**: Visiting gives a **Torch Staff** (For Lyra) or **Torch** item.
2.  **Ambush**: Crossing the midpoint triggers 2 Wyverns to spawn from the mountains (Flying over impassable terrain).
3.  **Trap**: Stepping on specific tiles (near the boss) spawns a Myrmidon adjacent to the unit.

## Strategy Guide
*   **Vision is Key**: Thorne is the MVP. His passive (+Hit at max range) combined with better vision lets him scout and snipe.
*   **Kaelen's Weakness**: Mages in the forest are a nightmare for Kaelen (Low Res, Low Mov). He can't reach them, and they hit his weak point.
*   **Elara's Evasion**: She can dodge tank the Myrmidons, but the Killing Edge is risky.
*   **The Boss**: The Assassin is fast. Likely won't be doubled. Kaelen might be needed to tank a hit, then nuke with Lyra.

## Balance Notes
*   **Escalation**: Information asymmetry. The player has to play slowly.
*   **Risk**: The Killing Edge on E1 is a "Checkmate" check. Player must check enemy inventory.
*   **Reward**: The Village gives a Torch, essential for the next part of the map.
