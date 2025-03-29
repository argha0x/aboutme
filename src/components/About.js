import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="py-4">
      <h2 className="border-bottom pb-2 mb-3">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Argha Chakraborty" 
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        </Col>
        <Col md={8}>
          <h3>Argha Chakraborty</h3>
          <p className="text-muted">Software Engineer | ML Enthusiast | Researcher</p>
          <p>
            Hello! I'm Argha, a passionate software engineer with expertise in machine learning and data science. 
            I enjoy solving complex problems and building innovative solutions that make a positive impact.
          </p>
          <p>
            With a strong background in computer science and mathematics, I specialize in developing 
            robust applications and implementing cutting-edge algorithms. I'm constantly exploring new 
            technologies and methodologies to enhance my skills and deliver exceptional results.
          </p>
          <div className="d-flex mt-3">
            <a href="#contact" className="btn btn-outline-dark me-2">Contact Me</a>
            <a href="/resume.pdf" className="btn btn-outline-secondary">Download CV</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 