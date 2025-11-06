import React from "react";
import { useSearch } from "./SearchContext";
import "./search.css";

const SearchBar = () => {
  const { searchTerm, handleSearch, clearSearch, isSearchActive } = useSearch();

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  const handleClear = () => {
    clearSearch();
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-input-wrapper">
          <i className="icon-magnifier search-icon"></i>
          <input
            type="text"
            placeholder="Search projects, skills, certifications..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          {isSearchActive && (
            <button
              onClick={handleClear}
              className="search-clear"
              aria-label="Clear search"
            >
              <i className="icon-close"></i>
            </button>
          )}
        </div>
      </div>
      {isSearchActive && (
        <div className="search-results-info">
          <span className="search-term">Searching for: "{searchTerm}"</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
