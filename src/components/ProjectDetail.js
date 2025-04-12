import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Button, Modal, Carousel } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projectsData } from '../data/ProjectsData';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Gallery.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [legacyProject, setLegacyProject] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

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

  // Ensure we have valid images before rendering the carousel
  const images = project.details.images || [];
  const hasImages = images.length > 0;

  // Image modal with carousel
  const imageModal = (
    <Modal
      show={showModal && hasImages}
      onHide={handleCloseModal}
      size="lg" 
      centered
      contentClassName="carousel-modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title>{project.snippet.title} - Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        {hasImages && (
          <Carousel
            activeIndex={activeIndex}
            onSelect={(index) => setActiveIndex(index)}
            interval={null}
            indicators={images.length > 1}
            controls={images.length > 1}
            className="project-carousel"
            wrap={true}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-container">
                  <img
                    className="carousel-image"
                    src={image.src || "#"}
                    alt={image.alt || "Project image"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Available";
                    }}
                  />
                </div>
                {image.alt && (
                  <Carousel.Caption className="carousel-caption-custom">
                    <p>{image.alt}</p>
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Modal.Body>
    </Modal>
  );

  // New project data format
  return (
    <Container fluid className="py-4 project-detail-container">
      {imageModal}
      
      <Row className="mb-4">
        <Col>
          <Link to="/#projects" className="btn btn-outline-secondary mb-4">
            <i className="bi bi-arrow-left me-2"></i>Back to Projects
          </Link>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h1 className="project-title border-bottom pb-2 mb-4">{project.snippet.title}</h1>
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
            <div className="feature-cards-container">
              {project.details.features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-card-content">
                    <span className="feature-number">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
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
          {project.showInfo !== false && (
            <div className="p-4 bg-light rounded shadow-sm mb-4">
              <h4 className="mb-3">Project Information</h4>
              <p><strong>Role:</strong> {project.details.role}</p>
              <p><strong>Completed:</strong> {project.details.completionDate}</p>
              
              {project.details.links && project.showLinks !== false && (
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
          )}
        </Col>
      </Row>

      {/* Project Gallery - all images, including the first one */}
      {hasImages && (
        <div className="project-gallery-container mb-5">
          <h3 className="mb-4">Project Gallery</h3>
          <Row>
            {images.map((image, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <div 
                  className="project-gallery-item" 
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-gallery-image-wrapper">
                    <img 
                      src={image.src} 
                      alt={image.alt || "Project image"}
                      className="project-gallery-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
                      }}
                    />
                  </div>
                  <div className="project-gallery-caption">
                    {image.alt || "Project image"}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Call to action */}
      {project.details.links && project.details.links.live && project.showLinks !== false && (
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