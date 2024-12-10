import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import './Search.css'; 

const SmartSearch = ({ onSearchChange, disabled }) => {
  const [query, setQuery] = useState('');


  const debouncedOnSearchChange = useCallback(
    debounce((newQuery) => {
      console.log("Search Query:", newQuery);
      onSearchChange(newQuery);
    }, 300),
    []
  );

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedOnSearchChange(newQuery);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Поиск..."
      className="search-input"
      disabled={disabled} 
    />
  );
};

export default SmartSearch;
