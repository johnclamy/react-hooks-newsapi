import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { SearchContext } from '../contexts/SearchContext'

export default function SearchBar () {
  const { phrase, onSetPhrase } = useContext(SearchContext)

  const handleChange = e => onSetPhrase(e.target.value)

  return (
    <Form className='d-flex justify-content-between'>
      <Form.Control
        type='text'
        size='lg'
        value={phrase}
        placeholder='Search articles...'
        onChange={handleChange}
      />
      <Button
        style={{
          marginLeft: '.75rem',
          backgroundColor: 'var(--app-dark-blue)',
          border: 'none'
        }}
        type='button'
      >
        <FaSearch />
      </Button>
    </Form>
  )
}