import React, { createContext, useCallback, useState, useContext } from 'react';

interface SearchContextData {
  input: string;
  searchFor: (term: string) => void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {
  const [input, setInput] = useState<string>('');

  const searchFor = useCallback((term: string) => {
    setInput(term);
  }, []);

  return (
    <SearchContext.Provider value={{ input, searchFor }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be within an SearchProvider');
  }

  return context;
}

export { SearchProvider, useSearch };
