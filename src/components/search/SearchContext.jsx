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
    console.log("🔍 HandleSearch called with:", term);
    setSearchTerm(term);
    setIsSearchActive(term.length > 0);
    console.log(
      "🔍 Search state updated - term:",
      term,
      "isActive:",
      term.length > 0
    );
  };

  // Filter function that can be used by any component
  const filterItems = (items, searchFields = ["title", "category", "name"]) => {
    console.log("🔍 FilterItems called:", {
      searchTerm,
      itemsCount: items.length,
      searchFields,
    });

    if (!searchTerm) {
      console.log("🔍 No search term, returning all items");
      return items;
    }

    const lowercaseSearch = searchTerm.toLowerCase();
    console.log("🔍 Searching for:", lowercaseSearch);

    const filtered = items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        const matches = value && value.toLowerCase().includes(lowercaseSearch);
        if (matches) {
          console.log("🔍 Match found:", {
            field,
            value,
            item: item.title || item.name || item.id,
          });
        }
        return matches;
      })
    );

    console.log("🔍 Filtered results:", filtered.length, "items");
    return filtered;
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
