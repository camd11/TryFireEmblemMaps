import React from 'react';

const UnitToken = ({ unit, onClick, isSelected }) => {
  let className = 'unit-token ';

  if (unit.isPlayer) {
    className += 'unit-player';
  } else if (unit.isGreen) {
    className += 'unit-green';
  } else {
    className += 'unit-enemy';
  }

  if (unit.isBoss) {
    className += ' unit-boss';
  }

  if (isSelected) {
    className += ' unit-selected';
  }

  const label = unit.isPlayer ? unit.name.substring(0, 2) : unit.class.substring(0, 1);

  return (
    <div
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        onClick(unit);
      }}
      title={unit.name || unit.class}
    >
      {label}
    </div>
  );
};

export default UnitToken;
