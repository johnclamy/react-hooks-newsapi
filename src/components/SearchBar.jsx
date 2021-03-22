import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchBar() {
  // const { onSetPhrase } = React.useContext(SearchContext);
  // const [term, setTerm] = React.useState('');
  const handleClick = () => {};

  return (
    <Form className="d-flex justify-content-between">
      <Form.Control size="lg" placeholder="Search articles..." />
      <Button
        style={{
          marginLeft: '.75rem',
          backgroundColor: 'var(--app-dark-blue)',
          border: 'none',
        }}
        type="button"
        onClick={handleClick}
      >
        <FaSearch />
      </Button>
    </Form>
  );
}
