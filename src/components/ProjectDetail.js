import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Button, Carousel } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import projectsData from './ProjectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  // Sample additional images for each project (in a real app, these would be part of project data)
  const additionalImages = {
    'ml-framework': [
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
    'ecommerce': [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
    'data-viz': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
    'fitness-app': [
      'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
    'iot-home': [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565227480671-5ad00328a29c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
    'blockchain': [
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1639322537176-7ef2bc1667a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ],
  };

  useEffect(() => {
    if (projectId) {
      const id = projectId.split('/').pop();
      const foundProject = projectsData.find(p => p.link.includes(id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Redirect to projects if not found
        navigate('/');
      }
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <Container className="py-5">
        <h2>Loading project...</h2>
      </Container>
    );
  }

  // Extract ID from link
  const projectIdFromLink = project.link.split('/').pop();
  const images = [project.image, ...(additionalImages[projectIdFromLink] || [])];

  return (
    <Container className="py-5">
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

      <Row className="mb-5">
        <Col lg={8}>
          <Carousel className="mb-4 project-carousel shadow">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${project.title} - slide ${index + 1}`}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col lg={4}>
          <div className="p-4 bg-light rounded shadow-sm">
            <h4 className="mb-3">Project Overview</h4>
            <p><strong>Project Type:</strong> {project.title.split(' ')[0]}</p>
            <p><strong>Technologies:</strong></p>
            <div className="mb-3">
              {project.technologies.map((tech, index) => (
                <Badge bg="secondary" className="me-2 mb-2" key={index}>
                  {tech}
                </Badge>
              ))}
            </div>
            <hr />
            <p><strong>Completed:</strong> 2023</p>
            <p><strong>Role:</strong> Lead Developer</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3 className="mb-3">Project Description</h3>
          <p className="lead mb-4">{project.description}</p>
          <p>{project.longDescription}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at metus in nisi consequat 
            vestibulum. Vivamus vel felis vel magna tincidunt faucibus. Sed euismod lectus ac leo ultricies, 
            vel malesuada turpis sollicitudin. In hac habitasse platea dictumst.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h3 className="mb-3">Features</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Feature 1: Lorem ipsum dolor sit amet</li>
            <li className="list-group-item">Feature 2: Consectetur adipiscing elit</li>
            <li className="list-group-item">Feature 3: Nullam at metus in nisi consequat vestibulum</li>
            <li className="list-group-item">Feature 4: Vivamus vel felis vel magna tincidunt</li>
            <li className="list-group-item">Feature 5: Sed euismod lectus ac leo ultricies</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button variant="dark" size="lg" href={`https://example.com/${projectIdFromLink}`} target="_blank">
            Visit Project
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail; 