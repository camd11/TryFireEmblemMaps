import React from 'react';
import UnitToken from './UnitToken';

const TERRAIN_CLASSES = {
    '.': 'tile-plain',
    'W': 'tile-wall',
    'T': 'tile-tree',
    'P': 'tile-pillar',
    'E': 'tile-escape',
    'B': 'tile-bridge',
    'R': 'tile-river',
    'F': 'tile-fort',
    'G': 'tile-goal',
    'M': 'tile-mountain',
    'V': 'tile-village',
    'D': 'tile-door',
    'C': 'tile-chest',
    'S': 'tile-start',
    '?': 'tile-hidden',
    'X': 'tile-spawn',
};

const GridTile = ({ char, x, y, unit, onTileClick, onUnitClick, isSelected }) => {
    const terrainClass = TERRAIN_CLASSES[char] || 'tile-plain';

    return (
        <div
            className={`tile ${terrainClass}`}
            onClick={() => onTileClick({ x, y, char })}
            title={`(${x},${y}) ${char}`}
        >
            {unit && (
                <UnitToken
                    unit={unit}
                    onClick={onUnitClick}
                    isSelected={isSelected}
                />
            )}
        </div>
    );
};

export default GridTile;
