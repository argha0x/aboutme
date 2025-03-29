import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Placeholder = ({ id, title }) => {
  return (
    <Container id={id} className="py-5">
      <h2 className="border-bottom pb-2 mb-4">{title}</h2>
      <Alert variant="info" className="text-center">
        <p className="mb-0">This section will be available soon!</p>
        <p className="small mb-0">Content is currently being developed and will be linked here.</p>
      </Alert>
    </Container>
  );
};

export default Placeholder; 