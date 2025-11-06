import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const clearSearch = () => {
    setSearchTerm("");
    setIsSearchActive(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearchActive(term.length > 0);
  };

  // Filter function that can be used by any component
  const filterItems = (items, searchFields = ["title", "category", "name"]) => {
    if (!searchTerm) return items;

    const lowercaseSearch = searchTerm.toLowerCase();
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        return value && value.toLowerCase().includes(lowercaseSearch);
      })
    );
  };

  const value = {
    searchTerm,
    isSearchActive,
    handleSearch,
    clearSearch,
    filterItems,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
