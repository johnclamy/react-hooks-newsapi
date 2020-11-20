import React from 'react';
import PropTypes from 'prop-types';

export const SearchContext = React.createContext();

export default function SearchContextProvider({ children }) {
  const [phrase, setPhrase] = React.useState('');
  const handleSetPhrase = (newPhrase) => setPhrase(newPhrase);

  return (
    <SearchContext.Provider
      value={{
        phrase,
        onSetPhrase: handleSetPhrase,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchContextProvider.propTypes = {
  children: PropTypes.node,
};
