import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'MS(R), Information Technology',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      duration: '2024',
      gpa: 'CGPA: 8.3/10',
      specialization: 'Computer Graphics, Vision and Physics-Based Animation',
      description: 'Graduate research in advanced computer graphics techniques and physics-based animation systems.',
      certificateLink: 'https://drive.google.com/file/d/18Wju3POgVUioTfwf3sm-07t2J7oPpwVB/view'
    },
    {
      id: 2,
      degree: 'M.Sc, Computer Science',
      institution: 'Banaras Hindu University',
      location: 'Varanasi, India',
      duration: '2014-2016',
      gpa: 'CGPA: 9.12/10',
      description: 'Advanced studies in computer science with focus on theoretical and practical applications.',
      certificateLink: 'https://drive.google.com/file/d/1XtlqOwYgUT9jT_GBDtP8TZ__gG7I2MK6/view'
    },
    {
      id: 3,
      degree: 'B.Sc, Computer Science (Honors)',
      institution: 'University of Calcutta',
      location: 'Kolkata, India',
      duration: '2011-2014',
      gpa: 'Percentage: 77/100',
      description: 'Comprehensive computer science education with honors distinction. Ranked 10th among over 8,000 students university-wide.',
      certificateLink: 'https://drive.google.com/file/d/1XlAI-WodGCly0BnAljX6B7ZK1wYLpHGI/view'
    }
  ];

  return (
    <Container id="education" className="py-4">
      <h2 className="border-bottom pb-2 mb-3">Education</h2>
      {educationData.map(edu => (
        <Card key={edu.id} className="mb-3 border-0 shadow-sm">
          <Card.Body className="p-3">
            <Row>
              <Col md={9}>
                <h4 className="mb-1">{edu.degree}</h4>
                <h5 className="text-secondary mb-2">{edu.institution}, {edu.location}</h5>
                <p className="text-muted mb-2"><strong>Duration:</strong> {edu.duration}</p>
                <p className="text-muted mb-2"><strong>{edu.gpa}</strong></p>
                {edu.specialization && (
                  <p className="text-muted mb-3"><strong>Specialization:</strong> {edu.specialization}</p>
                )}
                <p className="text-muted mb-3">{edu.description} {edu.specialization}</p>
              </Col>
              <Col md={3} className="d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                <a href={edu.certificateLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">
                  <i className="bi bi-file-earmark-pdf me-2"></i>View Certificate
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