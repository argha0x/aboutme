import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container id="contact" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Contact Me</h2>
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <h4>Get In Touch</h4>
          <p>Feel free to reach out if you have any questions or would like to discuss potential collaborations.</p>
          <div className="mb-3">
            <strong>Email:</strong> <a href="mailto:contact@example.com">rghchaks73@gmail.com</a>
          </div>
          <div className="mb-3">
            <strong>Location:</strong> Bangalore, KA, India ❤️
          </div>
          <div className="d-flex mt-4">
            <a href="https://www.linkedin.com/in/arghachakraborty92/" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://github.com/ricoseeds" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-github fs-4"></i>
            </a>
            <a href="https://www.youtube.com/@arghachakraborty7088" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-youtube fs-4"></i>
            </a>
            
          </div>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 