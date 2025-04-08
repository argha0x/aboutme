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
      specialization: 'Computer Graphics, Physics-Based Animation',
      description: 'Engaged in graduate-level research focused on advanced rendering techniques, mesh processing, and physics-based animation. The program combined rigorous coursework with cutting-edge research in visual computing and simulation technologies. Worked under the guidance of Prof. Rahul Narain, a renowned expert in physics-based simulation and computer graphics, whose mentorship deeply influenced research direction and technical maturity. Also had the opportunity to collaborate with Prof. Prem Kalra and Prof. Subodh Kumar, both prominent figures in the Indian computer graphics research community. Research focused on developing realistic simulation frameworks for medical and interactive applications, bridging visual realism with physical accuracy.',
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
      description: 'Completed a rigorous undergraduate program in Computer Science with Honors distinction, covering foundational and advanced topics including algorithms, data structures, computer architecture, and programming paradigms. Achieved Top 10 rank among more than 8,000 students across the university. Received consistent academic and project guidance from Professor Gautam Mahapatra, whose mentorship played a key role in developing a deep interest in algorithms, computer graphics, and low-level systems programming.',
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
                  <p className="mb-3">
                    <strong className="fw-bold">Specialization: </strong>
                    <span className="fw-semibold specialization-text">{edu.specialization}</span>
                  </p>
                )}
                
                <p className="text-muted mb-3">{edu.description}</p>
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