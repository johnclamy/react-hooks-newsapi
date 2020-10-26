import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

export default function SearchContextProvider (props) {
  const [ phrase, setPhrase ] = useState('')

  const handleSetPhrase = phrase => {
    setPhrase(phrase)
  }

  return (
    <SearchContext.Provider value={{ phrase, onSetPhrase: handleSetPhrase }}>
      {props.children}
    </SearchContext.Provider>
  )
}