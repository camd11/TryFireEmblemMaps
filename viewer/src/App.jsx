import React, { useState, useEffect } from 'react';
import MapViewer from './components/MapViewer';
import InfoPanel from './components/InfoPanel';
import mapsData from './data/maps.json';
import unitsData from './data/units.json';

function App() {
  const [currentMapId, setCurrentMapId] = useState(mapsData[0].id);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTile, setSelectedTile] = useState(null);
  const [playerUnits, setPlayerUnits] = useState([]);

  const currentMap = mapsData.find(m => m.id === currentMapId);

  // Initialize player units for the current map
  useEffect(() => {
    // In a real game, positions would be dynamic.
    // For this viewer, we'll hardcode starting positions based on the 'S' tiles in the map layout.
    if (!currentMap) return;

    const startingPositions = [];
    currentMap.layout.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] === 'S') {
          startingPositions.push({ x, y });
        }
      }
    });

    // Assign units to slots
    const placedUnits = unitsData.map((unit, index) => {
      if (index < startingPositions.length) {
        return { ...unit, x: startingPositions[index].x, y: startingPositions[index].y, isPlayer: true };
      }
      return null;
    }).filter(u => u !== null);

    setPlayerUnits(placedUnits);
    setSelectedUnit(null);
    setSelectedTile(null);
  }, [currentMapId]);

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    setSelectedTile(null);
  };

  const handleTileClick = (tile) => {
    setSelectedTile(tile);
    setSelectedUnit(null);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1 className="title">Sapphire Guard</h1>
        <div className="map-selector">
          <h3>Select Map</h3>
          {mapsData.map(map => (
            <button
              key={map.id}
              onClick={() => setCurrentMapId(map.id)}
              className={currentMapId === map.id ? 'active' : ''}
            >
              {map.name}
            </button>
          ))}
        </div>

        <div className="instructions">
          <p>Select a map to view the layout.</p>
          <p>Click on units or tiles for details.</p>
        </div>
      </div>

      <div className="main-content">
        <div className="map-header">
          <h2>{currentMap.name}</h2>
          <div className="objective">Objective: {currentMap.objective}</div>
        </div>

        <MapViewer
          mapData={currentMap}
          playerUnits={playerUnits}
          onSelectUnit={handleUnitClick}
          onSelectTile={handleTileClick}
          selectedUnit={selectedUnit}
        />
      </div>

      <div className="info-panel-container">
        <InfoPanel selectedUnit={selectedUnit} selectedTile={selectedTile} />
      </div>
    </div>
  );
}

export default App;
