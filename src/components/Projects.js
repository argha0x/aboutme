import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectsData from './ProjectsData';

const Projects = () => {
  return (
    <Container id="projects" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Projects</h2>
      <Row>
        {projectsData.map(project => (
          <Col md={4} className="mb-4" key={project.id}>
            <Card className="h-100 shadow-sm project-card">
              <div className="card-inner-container">
                <div className="project-image-wrapper">
                  <Card.Img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image-horizontal rounded"
                  />
                </div>
                <div className="card-content">
                  <Card.Title className="mb-1">{project.title}</Card.Title>
                  <Card.Text className="small-text mb-2">{project.description}</Card.Text>
                  <div className="mb-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-light text-dark me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link 
                      to={`/${project.link}`} 
                      className="btn btn-sm btn-outline-dark" 
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects; 