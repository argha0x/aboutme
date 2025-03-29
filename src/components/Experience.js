import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2022 - Present',
      description: 'Led the development of machine learning solutions for customer analytics. Improved model accuracy by 35% and reduced processing time by 50%.'
    },
    {
      id: 2,
      role: 'Machine Learning Engineer',
      company: 'Data Solutions Ltd.',
      period: 'Mar 2019 - Dec 2021',
      description: 'Designed and implemented data pipelines for real-time analytics. Developed predictive models for user behavior analysis.'
    },
    {
      id: 3,
      role: 'Software Developer',
      company: 'CodeCraft Labs',
      period: 'Jun 2017 - Feb 2019',
      description: 'Developed web applications using React and Node.js. Contributed to the creation of RESTful APIs and database schema design.'
    }
  ];

  return (
    <Container id="experience" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Work Experience</h2>
      {experiences.map(exp => (
        <div key={exp.id} className="mb-4">
          <Row className="mb-2">
            <Col>
              <h4 className="mb-0">{exp.role}</h4>
              <div className="d-flex justify-content-between">
                <h5 className="text-muted">{exp.company}</h5>
                <span className="text-muted small">{exp.period}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{exp.description}</p>
            </Col>
          </Row>
          {exp.id !== experiences.length && <hr />}
        </div>
      ))}
    </Container>
  );
};

export default Experience; 