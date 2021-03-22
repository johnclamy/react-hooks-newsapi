import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FilterAside() {
  return (
    <aside className="mt-4">
      <h2 className="aside-filter-title">news filters:</h2>
      <Form>
        <Form.Group>
          <Form.Check type="radio" label="BBC News" defaultChecked />
        </Form.Group>
        <Form.Group>
          <Form.Check type="radio" label="Wall St Journal" />
        </Form.Group>
      </Form>
    </aside>
  );
}
