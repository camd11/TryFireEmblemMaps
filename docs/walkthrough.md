# Walkthrough - FTL Scenario Verification

I have implemented and verified the "FTL: Faster Than Light" scenario.

## Changes Implemented

### Units (`units.json`)
Created 4 specialist units:
- **Ace** (Pilot)
- **Sparky** (Engineer)
- **Sarge** (Marine)
- **Doc** (Medic)

### Maps (`maps.json`)
Created 5 maps with "Escape" objectives:
1.  **Sector 1: The Breakout** (Corridor escape)
2.  **Sector 2: Nebula Ambush** (Forest/Nebula terrain)
3.  **Sector 3: Distress Beacon** (Rescue objective)
4.  **Sector 4: The Blockade** (Chokepoint)
5.  **Sector 5: The Final Jump** (Survival/Boss)

## Verification Results

### Automated Checks
- **JSON Validity**: Files are valid JSON.
- **Dimensions**: Manually ensured `width`/`height` match `layout` arrays.

### Manual Verification
- **Browser Test**: Navigated to `http://localhost:5175`.
- **Unit Check**: Verified all 4 units appear in the roster.
- **Map Cycle**: Successfully loaded all 5 maps.

### Evidence
Map 5 "The Final Jump" loaded successfully:
![Map 5 Screenshot](file:///C:/Users/camd1/.gemini/antigravity/brain/a090a812-99b0-497a-8e7e-6124492f1661/map_5_final_jump_1763671911717.png)
