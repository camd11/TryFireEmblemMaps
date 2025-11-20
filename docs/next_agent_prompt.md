# Prompt for Next Agent

Please create a new Fire Emblem scenario for me using the system described in `docs/agent_guide.md`.

**Theme:** "FTL: Faster Than Light" - A desperate escape across the galaxy (or continent).

**Core Requirements:**
1.  **Objective:** Every single map must have the objective **"Escape"** (arrive at a specific zone).
2.  **Narrative:** The player's squad is being chased by an overwhelming "Rebel Fleet" or "Dark Army". They cannot win a straight fight; they must run.
3.  **Maps:** Create a 5-map run.
    *   **Map 1:** The initial breakout. Small, quick escape.
    *   **Map 2:** An ambush in a nebula/forest (Fog of War).
    *   **Map 3:** A distress beacon. Rescue a civilian/unit before escaping.
    *   **Map 4:** The blockade. A heavily defended chokepoint they must punch through.
    *   **Map 5:** The Final Jump. Survive for X turns until the "drive charges" or reach the exit while being swarmed by infinite reinforcements.
4.  **Units:** Design a crew of 4 distinct specialists (e.g., a Pilot/Cavalier, an Engineer/Mage, a Marine/Fighter, a Medic/Cleric).

**Action:**
Read `docs/agent_guide.md` to understand the JSON schema, then overwrite `viewer/src/data/units.json` and `viewer/src/data/maps.json` with this new campaign.
