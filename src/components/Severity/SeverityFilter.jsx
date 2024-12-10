import React from 'react';
import './SeverityFilter.css';

export const SeverityFilter = ({ filterSeverity, onFilterChange }) => {
  const levels = [
    { name: "Срочно", value: 1 },
    { name: "Средне", value: 2 },
    { name: "Не срочно", value: 3 },
  ];

  const handleButtonClick = (levelValue) => {
    onFilterChange(levelValue);
  };

  return (
    <div className="severity-filter">
      {levels.map(({ name, value }) => (
        <button
          key={value}
          className={`severity-button ${filterSeverity.includes(value) ? 'active' : ''}`}
          onClick={() => handleButtonClick(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default SeverityFilter;
