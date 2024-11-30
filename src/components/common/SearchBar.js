import React, { useState, useEffect } from 'react';
import '../../styles/components/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setQuery(newValue);
    if (!newValue) {
      onSearch('');
    }
  };

  useEffect(() => {
    if (!query) return; 
    
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
