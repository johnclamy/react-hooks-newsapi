import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FilterAside() {
  return (
    <aside className="mt-4">
      <h2 className="aside-filter-title">news filters:</h2>
      <Form>
        <Form.Group>
          <Form.Check type="radio" label="UK news" defaultChecked />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="BBC news" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Business" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Entertainment" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Health" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Sports" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Technology" />
        </Form.Group>
      </Form>
    </aside>
  );
}
