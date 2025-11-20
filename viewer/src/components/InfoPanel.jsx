import React from 'react';

const InfoPanel = ({ selectedUnit, selectedTile }) => {
    const style = {
        width: '300px',
        padding: '20px',
        backgroundColor: 'rgba(30, 41, 59, 0.9)', // Slate-800 with opacity
        color: 'white',
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        overflowY: 'auto',
        backdropFilter: 'blur(10px)'
    };

    if (!selectedUnit && !selectedTile) {
        return (
            <div style={style}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Info Panel</h2>
                <p style={{ color: '#94a3b8' }}>Select a unit or tile to view details.</p>
            </div>
        );
    }

    return (
        <div style={style}>
            {selectedUnit ? (
                <div>
                    <h2 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '0.5rem' }}>{selectedUnit.name || selectedUnit.class}</h2>
                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                        {selectedUnit.class} {selectedUnit.isPlayer ? '(Player)' : '(Enemy)'}
                    </div>

                    {selectedUnit.description && (
                        <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#94a3b8' }}>"{selectedUnit.description}"</p>
                    )}

                    <h3 style={{ borderBottom: '1px solid #475569', paddingBottom: '5px', marginBottom: '10px' }}>Stats</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '1rem' }}>
                        <div>HP: {selectedUnit.stats?.hp || selectedUnit.hp}</div>
                        <div>Str: {selectedUnit.stats?.str || selectedUnit.str}</div>
                        <div>Mag: {selectedUnit.stats?.mag || '?'}</div>
                        <div>Skl: {selectedUnit.stats?.skl || selectedUnit.skl}</div>
                        <div>Spd: {selectedUnit.stats?.spd || selectedUnit.spd}</div>
                        <div>Lck: {selectedUnit.stats?.lck || '?'}</div>
                        <div>Def: {selectedUnit.stats?.def || selectedUnit.def}</div>
                        <div>Res: {selectedUnit.stats?.res || selectedUnit.res}</div>
                        <div>Mov: {selectedUnit.stats?.mov || '?'}</div>
                    </div>

                    {selectedUnit.items && (
                        <>
                            <h3 style={{ borderBottom: '1px solid #475569', paddingBottom: '5px', marginBottom: '10px' }}>Inventory</h3>
                            <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                                {selectedUnit.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {selectedUnit.skills && (
                        <>
                            <h3 style={{ borderBottom: '1px solid #475569', paddingBottom: '5px', marginBottom: '10px' }}>Skills</h3>
                            <ul style={{ paddingLeft: '20px' }}>
                                {selectedUnit.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ) : (
                <div>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Terrain Info</h2>
                    <p>Type: {selectedTile.char}</p>
                    <p>X: {selectedTile.x}, Y: {selectedTile.y}</p>
                </div>
            )}
        </div>
    );
};

export default InfoPanel;
