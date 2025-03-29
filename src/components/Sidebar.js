import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mainLinks = [
    { id: 'about', title: 'About Me' },
    { id: 'education', title: 'Education' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Work Experience' },
    { id: 'publications', title: 'Publications' },
    { id: 'contact', title: 'Contact' }
  ];

  const externalLinks = [
    { id: 'hobbies', title: 'Hobbies', url: '#' },
    { id: 'journal', title: 'Journal', url: '#' },
    { id: 'blog', title: 'Blog', url: '#' }
  ];

  const handleExternalClick = (e, link) => {
    e.preventDefault();
    // In a real app, you would have actual URLs here
    alert(`The ${link.title} page will be available soon!`);
  };

  // Mobile Navigation
  if (isMobile) {
    return (
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Argha Chakraborty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {mainLinks.map(link => (
                <Nav.Link key={link.id} as={Link} to={`/#${link.id}`}>{link.title}</Nav.Link>
              ))}
              {externalLinks.map(link => (
                <Nav.Link 
                  key={link.id} 
                  href={link.url}
                  onClick={(e) => handleExternalClick(e, link)}
                >
                  {link.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // Desktop Sidebar
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100vh', position: 'fixed' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4 fw-bold">Argha Chakraborty</span>
      </Link>
      <hr />
      <Nav className="flex-column mb-auto">
        {mainLinks.map(link => (
          <Nav.Link key={link.id} as={Link} to={`/#${link.id}`} className="link-dark">{link.title}</Nav.Link>
        ))}
        <hr className="my-2" />
        {externalLinks.map(link => (
          <Nav.Link 
            key={link.id} 
            href={link.url} 
            className="link-dark text-muted"
            onClick={(e) => handleExternalClick(e, link)}
          >
            {link.title} <small><i className="bi bi-arrow-up-right"></i></small>
          </Nav.Link>
        ))}
      </Nav>
      <hr />
      <div className="text-center text-muted small">
        &copy; {new Date().getFullYear()} Argha Chakraborty
      </div>
    </div>
  );
};

export default Sidebar; 