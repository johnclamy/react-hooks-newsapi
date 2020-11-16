import React from 'react';
import PropTypes from 'prop-types';

export const SearchContext = React.createContext();

export default function SearchContextProvider({ children }) {
  const [phrase, setPhrase] = React.useState('');
  const handleCreatePhrase = (term) => setPhrase(term);

  return (
    <SearchContext.Provider
      value={{
        phrase,
        onCreatePhrase: handleCreatePhrase,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchContextProvider.propTypes = {
  children: PropTypes.element,
};
