import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import projectsData from '../data/ProjectsData';

const Projects = () => {
  return (
    <Container id="projects" className="py-4">
      <h2 className="border-bottom pb-2 mb-3">Projects</h2>
      <Row>
        {projectsData.map(project => (
          <Col xs={12} md={6} lg={4} className="mb-3" key={project.id}>
            <Card className="h-100 shadow-sm project-card">
              <div className="card-inner-container">
                <div className="project-image-wrapper">
                  <Card.Img 
                    src={project.snippet?.thumbnailImage || project.image} 
                    alt={project.snippet?.title || project.title}
                    className="project-image-horizontal"
                  />
                </div>
                <div className="card-content">
                  <Card.Title className="mb-1 fs-6 project-title">{project.snippet?.title || project.title}</Card.Title>
                  <Card.Text className="small-text mb-1">{project.snippet?.description || project.description}</Card.Text>
                  <div className="badge-container">
                    {(project.snippet?.technologies || project.technologies).map((tech, index) => (
                      <span key={index} className="badge me-1 mb-1 small">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link 
                      to={`/project/${project.slug || project.id}`} 
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