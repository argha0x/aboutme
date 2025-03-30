import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projectsData from '../data/ProjectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [legacyProject, setLegacyProject] = useState(false);

  useEffect(() => {
    if (projectId) {
      // Try to find by slug first
      let foundProject = projectsData.find(p => p.slug === projectId);
      
      // If not found by slug, try to find by ID (for legacy data)
      if (!foundProject) {
        foundProject = projectsData.find(p => p.id.toString() === projectId);
        if (foundProject) {
          setLegacyProject(true);
        }
      }
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Redirect to projects if not found
        navigate('/#projects');
      }
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Loading project...</h2>
          <p>If this persists, the project may not exist.</p>
        </div>
      </Container>
    );
  }

  // Handle legacy project data format
  if (legacyProject) {
    return (
      <Container className="py-4">
        <Row className="mb-4">
          <Col>
            <Link to="/#projects" className="btn btn-outline-secondary mb-4">
              <i className="bi bi-arrow-left me-2"></i>Back to Projects
            </Link>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="border-bottom pb-2 mb-4">{project.title}</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <div className="mb-4">
              <h3 className="mb-3">Project Overview</h3>
              <p className="lead">{project.description}</p>
              <div className="my-3">
                {project.technologies.map((tech, index) => (
                  <Badge bg="secondary" className="me-2 mb-2" key={index}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-3">Details</h3>
              <p>{project.longDescription}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  // New project data format
  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <Link to="/#projects" className="btn btn-outline-secondary mb-4">
            <i className="bi bi-arrow-left me-2"></i>Back to Projects
          </Link>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h1 className="border-bottom pb-2 mb-4">{project.snippet.title}</h1>
        </Col>
      </Row>

      {/* Main project image */}
      <Row className="mb-4">
        <Col>
          <img
            src={project.details.images[0].src}
            alt={project.details.images[0].alt}
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={8}>
          <div className="mb-4">
            <h3 className="mb-3">Project Overview</h3>
            <p className="lead">{project.snippet.description}</p>
            <div className="my-3">
              {project.snippet.technologies.map((tech, index) => (
                <Badge bg="secondary" className="me-2 mb-2" key={index}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-3">Details</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{project.details.fullDescription}</p>
          </div>

          <div className="mb-4">
            <h3 className="mb-3">Key Features</h3>
            <ul className="list-group list-group-flush">
              {project.details.features.map((feature, index) => (
                <li className="list-group-item" key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.details.challenges && (
            <div className="mb-4">
              <h3 className="mb-3">Challenges & Solutions</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{project.details.challenges}</p>
            </div>
          )}

          {project.details.outcome && (
            <div className="mb-4">
              <h3 className="mb-3">Outcome</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{project.details.outcome}</p>
            </div>
          )}
        </Col>
        
        <Col lg={4}>
          <div className="p-4 bg-light rounded shadow-sm mb-4">
            <h4 className="mb-3">Project Information</h4>
            <p><strong>Role:</strong> {project.details.role}</p>
            <p><strong>Completed:</strong> {project.details.completionDate}</p>
            
            {project.details.links && (
              <div className="mt-4">
                <h5 className="mb-2">Project Links</h5>
                {project.details.links.github && (
                  <p><a href={project.details.links.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-github me-2"></i>GitHub Repository
                  </a></p>
                )}
                {project.details.links.live && (
                  <p><a href={project.details.links.live} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-globe me-2"></i>Live Demo
                  </a></p>
                )}
                {project.details.links.documentation && (
                  <p><a href={project.details.links.documentation} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-file-text me-2"></i>Documentation
                  </a></p>
                )}
                {project.details.links.case_study && (
                  <p><a href={project.details.links.case_study} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-journal me-2"></i>Case Study
                  </a></p>
                )}
                {project.details.links.blog && (
                  <p><a href={project.details.links.blog} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-pencil me-2"></i>Blog Post
                  </a></p>
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>

      {/* Additional Project Images */}
      {project.details.images.length > 1 && (
        <div className="project-gallery-container mb-5">
          <h3 className="mb-4">Project Gallery</h3>
          <Row>
            {project.details.images.slice(1).map((image, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <div className="project-gallery-item">
                  <div className="project-gallery-image-wrapper">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="project-gallery-image"
                    />
                  </div>
                  <div className="project-gallery-caption">
                    {image.alt}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Call to action */}
      {project.details.links && project.details.links.live && (
        <Row>
          <Col className="text-center mb-5">
            <Button 
              variant="dark" 
              size="lg" 
              href={project.details.links.live} 
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProjectDetail; 