import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Schedule = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly
    window.Calendly = window.Calendly || {};
    window.Calendly.initInlineWidget = function(element) {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/rghchaks73',
          parentElement: element,
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container id="schedule" className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-4">Schedule a Meeting</h2>
          <p className="lead mb-4">
            Let's discuss how I can help with your GPU development needs.
            Choose a time that works best for you.
          </p>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/rghchaks73"
            style={{ 
              minWidth: '320px', 
              height: '700px',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              overflow: 'hidden'
            }} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Schedule; 