# Fire Emblem Campaign Design: "The Sapphire Guard"

## Goal Description
Design a compelling 5-map mini-campaign for *Fire Emblem*. The campaign follows a small, elite squad of 4 units ("The Sapphire Guard") attempting to escape a coup and warn the loyalist forces. The maps will escalate in difficulty and complexity, testing the player's tactical mastery of these 4 specific units.

## User Review Required
- **Unit Balance**: Are the 4 units sufficiently distinct and fun?
- **Map Concepts**: Do the scenarios sound engaging and varied enough?
- **Mechanics**: We are assuming standard FE mechanics (Weapon Triangle, etc.) unless specified otherwise.

## Proposed Changes

### Campaign Narrative Arc
*   **Theme**: Desperate survival and tactical precision.
*   **Setting**: The Kingdom of Aethelgard. A sudden coup by the "Iron Legion" has seized the capital.
*   **Progression**:
    1.  **Map 1: The Escape**: Fleeing the castle courtyard.
    2.  **Map 2: The Bridge**: Holding a chokepoint against pursuers.
    3.  **Map 3: The Mistwood**: Navigating a fog-of-war forest with hidden enemies.
    4.  **Map 4: The Fortress**: Infiltrating a border fort to signal allies.
    5.  **Map 5: The Duel**: Confronting the coup leader, General Valerius.

### Player Unit Roster
The "Sapphire Guard" - A specialized royal protection detail.

#### 1. Elara (The Lord/Tactician)
*   **Class**: Fencer (Sword) -> Blade Lord
*   **Role**: Evasion Tank / Crit Dealer / Leader
*   **Personality**: Determined, sharp, protective.
*   **Stats**: High Speed/Skill, Mid Str, Low Def/Res.
*   **Personal Ability**: *Vanguard* - +10 Hit/Avo to allies within 2 spaces.
*   **Weapon**: *Rapier* (Effective vs Armor/Cav).

#### 2. Kaelen (The Wall)
*   **Class**: Armored Knight (Lance) -> General
*   **Role**: Physical Wall / Chokepoint Holder
*   **Personality**: Stoic, loyal, gentle giant.
*   **Stats**: High HP/Def/Str, Low Spd/Mov.
*   **Personal Ability**: *Immovable* - Takes -3 damage when waiting (ending turn without attacking).
*   **Weapon**: *Steel Lance*, *Javelin*.

#### 3. Lyra (The Glass Cannon/Utility)
*   **Class**: Mage (Anima) -> Sage
*   **Role**: Magical Nuke / Secondary Healer
*   **Personality**: Curious, energetic, slightly reckless.
*   **Stats**: High Mag/Res/Spd, Very Low HP/Def.
*   **Personal Ability**: *Arcane Flux* - After attacking, adjacent enemies suffer -2 Res for 1 turn.
*   **Weapon**: *Thunder* (High Crit), *Heal* Staff.

#### 4. Thorne (The Ranger/Sniper)
*   **Class**: Archer (Bow) -> Sniper
*   **Role**: Chip Damage / Anti-Air / Finisher
# Fire Emblem Campaign Design: "The Sapphire Guard"

## Goal Description
Design a compelling 5-map mini-campaign for *Fire Emblem*. The campaign follows a small, elite squad of 4 units ("The Sapphire Guard") attempting to escape a coup and warn the loyalist forces. The maps will escalate in difficulty and complexity, testing the player's tactical mastery of these 4 specific units.

## User Review Required
- **Unit Balance**: Are the 4 units sufficiently distinct and fun?
- **Map Concepts**: Do the scenarios sound engaging and varied enough?
- **Mechanics**: We are assuming standard FE mechanics (Weapon Triangle, etc.) unless specified otherwise.

## Proposed Changes

### Campaign Narrative Arc
*   **Theme**: Desperate survival and tactical precision.
*   **Setting**: The Kingdom of Aethelgard. A sudden coup by the "Iron Legion" has seized the capital.
*   **Progression**:
    1.  **Map 1: The Escape**: Fleeing the castle courtyard.
    2.  **Map 2: The Bridge**: Holding a chokepoint against pursuers.
    3.  **Map 3: The Mistwood**: Navigating a fog-of-war forest with hidden enemies.
    4.  **Map 4: The Fortress**: Infiltrating a border fort to signal allies.
    5.  **Map 5: The Duel**: Confronting the coup leader, General Valerius.

### Player Unit Roster
The "Sapphire Guard" - A specialized royal protection detail.

#### 1. Elara (The Lord/Tactician)
*   **Class**: Fencer (Sword) -> Blade Lord
*   **Role**: Evasion Tank / Crit Dealer / Leader
*   **Personality**: Determined, sharp, protective.
*   **Stats**: High Speed/Skill, Mid Str, Low Def/Res.
*   **Personal Ability**: *Vanguard* - +10 Hit/Avo to allies within 2 spaces.
*   **Weapon**: *Rapier* (Effective vs Armor/Cav).

#### 2. Kaelen (The Wall)
*   **Class**: Armored Knight (Lance) -> General
*   **Role**: Physical Wall / Chokepoint Holder
*   **Personality**: Stoic, loyal, gentle giant.
*   **Stats**: High HP/Def/Str, Low Spd/Mov.
*   **Personal Ability**: *Immovable* - Takes -3 damage when waiting (ending turn without attacking).
*   **Weapon**: *Steel Lance*, *Javelin*.

#### 3. Lyra (The Glass Cannon/Utility)
*   **Class**: Mage (Anima) -> Sage
*   **Role**: Magical Nuke / Secondary Healer
*   **Personality**: Curious, energetic, slightly reckless.
*   **Stats**: High Mag/Res/Spd, Very Low HP/Def.
*   **Personal Ability**: *Arcane Flux* - After attacking, adjacent enemies suffer -2 Res for 1 turn.
*   **Weapon**: *Thunder* (High Crit), *Heal* Staff.

#### 4. Thorne (The Ranger/Sniper)
*   **Class**: Archer (Bow) -> Sniper
*   **Role**: Chip Damage / Anti-Air / Finisher
*   **Personality**: Cynical, pragmatic, observant.
*   **Stats**: High Skl/Str, Mid Spd/Def.
*   **Personal Ability**: *Eagle Eye* - +15 Hit when attacking from max range.
*   **Weapon**: *Iron Bow*, *Longbow*.

## Verification Plan
### Manual Verification - Asking the user to deploy to staging and testing, verifying UI changes on an iOS app etc.

# Phase 2: Web Viewer Implementation

## Goal
Create a web-based viewer to visualize the 5 Fire Emblem maps and unit roster.
**Constraints**: Simple graphics, NOT a full game engine. Focus on visualization.

## Tech Stack
*   **Framework**: React (Vite)
*   **Styling**: Vanilla CSS (Premium, dark mode aesthetic)
*   **Data**: JSON objects derived from the markdown designs.

## Components
1.  **App**: Main container, handles map selection state.
2.  **MapViewer**: Renders the grid.
    *   **GridTile**: Individual cell. Renders terrain color/icon and unit if present.
    *   **UnitToken**: Simple visual representation of a unit (Player vs Enemy).
3.  **InfoPanel**: Displays stats of the selected/hovered unit or terrain.

## Data Structure
*   `maps.json`: Array of map objects (layout grid, dimensions, enemies).
*   `units.json`: Player unit definitions.

## Visual Style
*   **Terrain**: Color-coded tiles (Green=Forest, Grey=Wall, Blue=River).
*   **Units**:
    *   **Player**: Blue tokens with class icons/initials.
    *   **Enemy**: Red tokens.
    *   **Green Units**: Green tokens.
*   **UI**: Glassmorphism, sleek dark background, crisp typography.

# Phase 3: Visual Overhaul

## Goal
Upgrade the "simple graphics" to be "better and clearer" as requested.

## Visual Improvements
1.  **Terrain**:
    *   Use CSS gradients to simulate depth/texture (e.g., wood grain for trees, stone pattern for walls).
    *   Add borders/shadows to distinguish distinct tiles.
2.  **Units**:
    *   Improve readability of text.
    *   Add distinct borders for Bosses vs Elites.
    *   Add a "selected" glow effect.
3.  **UX**:
    *   Add tooltips for terrain types on hover.
    *   Ensure the grid is centered and responsive.

- Review the unit synergy: Do they cover each other's weaknesses? (Tank protects Mage, Sniper handles flyers for Tank, Lord handles bosses).
- Review map progression: Does the complexity curve make sense?
