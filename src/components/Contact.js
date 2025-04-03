import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  useEffect(() => {
    // Check if the typeform embed script is loaded
    if (window.tf && window.tf.widget && typeof window.tf.widget.build === 'function') {
      window.tf.widget.build();
    } else {
      // If not loaded, create and append the script
      const script = document.createElement('script');
      script.src = 'https://embed.typeform.com/next/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.tf && window.tf.widget) {
          window.tf.widget.build();
        }
      };
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup function to remove script on unmount if needed
      const embeds = document.querySelectorAll('iframe[data-tf-embed-iframe]');
      embeds.forEach(iframe => iframe.remove());
    };
  }, []);

  return (
    <Container id="contact" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Contact Me</h2>
      <Row>
        <Col md={5} className="mb-4 mb-md-0">
          <h4>Get In Touch</h4>
          <p>Feel free to reach out if you have any questions or would like to discuss potential collaborations.</p>
          <div className="mb-3">
            <strong>Email:</strong> <a href="mailto:rghchaks73@gmail.com">rghchaks73@gmail.com</a>
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
        <Col md={7}>
          <div className="typeform-container" style={{ height: '500px', width: '100%' }}>
            <div 
              data-tf-live="01JQXMNP46Y0A7F5GJAJCEH7RY"
              data-tf-width="100%"
              data-tf-height="500px"
              data-tf-opacity="100"
              data-tf-medium="embed-container"
              style={{ width: '100%', height: '100%' }}
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 