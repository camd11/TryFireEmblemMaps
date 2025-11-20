import React from 'react';
import GridTile from './GridTile';

const MapViewer = ({ mapData, playerUnits, onSelectUnit, onSelectTile, selectedUnit }) => {
    if (!mapData) return <div>Loading Map...</div>;

    const { layout, width, height, enemies } = mapData;

    // Helper to find unit at x,y
    const getUnitAt = (x, y) => {
        const player = playerUnits.find(u => u.x === x && u.y === y);
        if (player) return { ...player, isPlayer: true };

        const enemy = enemies.find(e => e.x === x && e.y === y);
        if (enemy) return { ...enemy, isPlayer: false };

        return null;
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 40px)`,
        gap: '1px',
        backgroundColor: '#1e293b', // Dark background for gaps
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        overflow: 'auto'
    };

    const tiles = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const char = layout[y][x];
            const unit = getUnitAt(x, y);
            tiles.push(
                <GridTile
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    char={char}
                    unit={unit}
                    onTileClick={onSelectTile}
                    onUnitClick={onSelectUnit}
                    isSelected={unit && selectedUnit && unit.id === selectedUnit.id}
                />
            );
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#0f172a' }}>
            <div style={gridStyle}>
                {tiles}
            </div>
        </div>
    );
};

export default MapViewer;
