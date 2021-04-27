import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SearchBar() {
  // const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-between">
      <Form.Control
        size="lg"
        placeholder="Search articles..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button
        style={{
          marginLeft: '.75rem',
          backgroundColor: 'var(--app-dark-blue)',
          border: 'none',
        }}
        type="submit"
      >
        <FaSearch />
      </Button>
    </Form>
  );
}
