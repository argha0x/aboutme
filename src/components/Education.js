import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      duration: '2017 - 2019',
      specialization: 'Machine Learning & Artificial Intelligence',
      description: 'Specialized in machine learning algorithms and deep neural networks. Conducted research on computer vision applications for autonomous systems.',
      certificateLink: '#'
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Massachusetts Institute of Technology',
      location: 'Cambridge, MA',
      duration: '2013 - 2017',
      specialization: 'Software Engineering',
      description: 'Focused on software design principles, data structures, and algorithmic efficiency. Participated in multiple hackathons and coding competitions.',
      certificateLink: '#'
    }
  ];

  return (
    <Container id="education" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Education</h2>
      {educationData.map(edu => (
        <Card key={edu.id} className="mb-4 border-0 shadow-sm">
          <Card.Body className="p-4">
            <Row>
              <Col md={8}>
                <h4 className="mb-1">{edu.degree}</h4>
                <h5 className="text-muted mb-2">{edu.institution}, {edu.location}</h5>
                <p className="text-muted mb-2"><strong>Duration:</strong> {edu.duration}</p>
                <p className="text-muted mb-3"><strong>Specialization:</strong> {edu.specialization}</p>
                <p>{edu.description}</p>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                <a href={edu.certificateLink} className="btn btn-outline-dark">
                  <i className="bi bi-file-earmark-pdf me-2"></i>View Degree
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Education; 