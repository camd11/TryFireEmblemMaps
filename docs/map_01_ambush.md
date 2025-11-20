# Map 1: The Ambush

## Overview
**Objective**: All units must Escape (Arrive) at the eastern edge within 10 turns.
**Loss Condition**: Any unit dies.
**Player Units**: Elara, Kaelen, Lyra, Thorne (Fixed deployment).

## Narrative Context
The Sapphire Guard is resting in the Royal Garden when the Iron Legion launches their coup. They are surrounded and must fight their way out to the city bridge.

## Map Layout
Size: 15x10
Legend:
. = Plain
T = Tree (Avo +20, Def +1)
P = Pillar (Avo +20, Def +1)
W = Wall (Impassable)
E = Escape Point
S = Start Position

```
W W W W W W W W W W W W W W W
W . . . T . . . . . . . . E W
W . S . T . . . P . . . . E W
W S . S . . . . . . . . . E W
W . S . T . . . P . . . . . W
W . . . . . . . . . . . . . W
W T T . . . W W W . . . T T W
W . . . . . W . W . . . . . W
W . . . . . W . W . . . . . W
W W W W W W W W W W W W W W W
```

## Enemy Units (Iron Legion)
Total Enemies: 6 Initial + 2 Reinforcements

| ID | Class | Lvl | Weapon | HP | Str | Skl | Spd | Def | Res | AI Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| E1 | Soldier | 1 | Iron Lance | 20 | 5 | 4 | 2 | 4 | 0 | Aggressive |
| E2 | Fighter | 1 | Iron Axe | 22 | 6 | 3 | 3 | 3 | 0 | Aggressive |
| E3 | Archer | 1 | Iron Bow | 18 | 4 | 5 | 4 | 3 | 1 | Stationary (Guard) |
| E4 | Soldier | 2 | Iron Lance | 21 | 6 | 4 | 3 | 4 | 0 | Guard (Pillar) |
| E5 | Fighter | 2 | Hand Axe | 23 | 7 | 4 | 4 | 3 | 0 | Patrol |
| E6 | Mercenary| 2 | Iron Sword | 19 | 5 | 6 | 6 | 4 | 1 | Boss (Gatekeeper) |

## Events
1.  **Turn 1 Start**: Dialogue. Elara realizes the betrayal.
2.  **Turn 3 Enemy Phase**: Reinforcements (2 Soldiers) appear from the west (Starting area). "They're cutting off our retreat!"
3.  **Talk**: Elara can talk to Kaelen (Tutorial on "Talk" command, gives Elara a Vulnerary).

## Strategy Guide
*   **Turn 1**: Kaelen should choke the gap between the trees to tank the first Soldier and Fighter. Lyra chips from behind.
*   **Turn 2**: Thorne uses Longbow to snipe the Archer (E3) without retaliation.
*   **Turn 3**: Move fast. The reinforcements will pressure from behind. Elara's Rapier is effective against the Boss (Mercenary) if needed, but he's not armored, so just high damage. Wait, Rapier is Eff Armor/Cav. Mercenary is Infantry. So just normal damage.
*   **Boss**: The Mercenary on the escape point has high speed. Kaelen might get doubled or have low hit. Lyra (Magic) is key here.

## Balance Notes
*   Kaelen takes 0 damage from E1 (Soldier) if he waits (Def 11 + 3 Immovable vs Atk 11). He is invincible physically if he just waits. This teaches the player to use him as a wall.
*   Lyra doubles E1 (Spd 8 vs 2). One rounds him (Mag 8 + 6 Mt = 14 Atk vs 0 Res = 14 Dmg x 2 = 28).
*   This map is designed to make the player feel powerful but rushed.
