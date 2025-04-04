import React, { useState, useEffect, useMemo } from 'react';
import { Nav, Navbar, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeLink, setActiveLink] = useState('about');
  
  // Define links first to avoid the initialization error
  const mainLinks = useMemo(() => [
    { id: 'about', title: 'About Me', icon: 'bi-person' },
    { id: 'education', title: 'Education', icon: 'bi-mortarboard' },
    { id: 'skillset', title: 'Skillset', icon: 'bi-award' },
    { id: 'projects', title: 'Projects', icon: 'bi-code-square' },
    { id: 'experience', title: 'Work Experience', icon: 'bi-briefcase' },
    { id: 'publications', title: 'Publications', icon: 'bi-journal-text' },
    { id: 'contact', title: 'Contact', icon: 'bi-envelope' }
  ], []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Add a small delay before starting scroll detection
    const scrollTimeout = setTimeout(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        // If we're at the top of the page, highlight About Me
        if (scrollPosition < 100) {
          setActiveLink('about');
          return;
        }
        
        // If we're at the bottom of the page, highlight the last section
        if (scrollPosition + window.innerHeight >= documentHeight - 50) {
          const lastLink = mainLinks[mainLinks.length - 1];
          setActiveLink(lastLink.id);
          return;
        }
        
        // Track if we found any section in view
        let foundSection = false;
        
        // Check each section in the order they appear on the page
        for (let i = 0; i < mainLinks.length; i++) {
          const sectionId = mainLinks[i].id;
          const section = document.getElementById(sectionId);
          
          if (section) {
            const rect = section.getBoundingClientRect();
            
            // Check if this section is in the viewport (with some buffer)
            // A section is considered "in view" when its top is within 40% from the top of the viewport
            if (rect.top <= viewportHeight * 0.4 && rect.bottom > 0) {
              setActiveLink(sectionId);
              foundSection = true;
              break;
            }
          }
        }
        
        // If no section was found in view and we're not at the bottom,
        // check each section again to find the one closest to the viewport
        if (!foundSection && scrollPosition + window.innerHeight < documentHeight - 50) {
          let closestSection = null;
          let closestDistance = Infinity;
          
          for (let i = 0; i < mainLinks.length; i++) {
            const sectionId = mainLinks[i].id;
            const section = document.getElementById(sectionId);
            
            if (section) {
              const rect = section.getBoundingClientRect();
              const distance = Math.abs(rect.top - viewportHeight * 0.3);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = sectionId;
              }
            }
          }
          
          if (closestSection) {
            setActiveLink(closestSection);
          }
        }
      };
      
      // Run handleScroll on initial load
      handleScroll();
      
      // Add event listener for scrolling
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, 500); // 500ms delay before starting scroll detection
    
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [mainLinks]);

  const externalLinks = [
    { id: 'hobbies', title: 'Hobbies', url: '#', icon: 'bi-heart', wip: true },
    { id: 'journal', title: 'Journal', url: '#', icon: 'bi-journal', wip: true },
    { id: 'blog', title: 'Blog', url: '#', icon: 'bi-rss', wip: true }
  ];

  const handleNavClick = (linkId) => {
    setActiveLink(linkId);
  };

  const handleExternalClick = (e, link) => {
    e.preventDefault();
    // In a real app, you would have actual URLs here
    alert(`The ${link.title} page is currently under development and will be available soon!`);
  };

  // Mobile Navigation
  if (isMobile) {
    return (
      <Navbar bg="white" expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">About Me</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {mainLinks.map(link => (
                <Nav.Link 
                  key={link.id} 
                  as={Link} 
                  to={`/#${link.id}`}
                  className={activeLink === link.id ? 'active px-3' : 'px-3'}
                  onClick={() => handleNavClick(link.id)}
                >
                  <i className={`bi ${link.icon} me-2`}></i>
                  {link.title}
                </Nav.Link>
              ))}
              <div className="border-top my-2 d-lg-none"></div>
              {externalLinks.map(link => (
                <OverlayTrigger
                  key={link.id}
                  placement="right"
                  overlay={
                    <Tooltip id={`tooltip-mobile-${link.id}`}>
                      {link.wip ? 'Work in progress - Coming soon!' : ''}
                    </Tooltip>
                  }
                >
                  <div 
                    key={link.id}
                    className="px-3 d-lg-none wip-link nav-link"
                    style={{ opacity: link.wip ? '0.6' : '1', cursor: 'default' }}
                  >
                    <i className={`bi ${link.icon} me-2`}></i>
                    {link.title}
                    {link.wip && <FaTools className="wip-icon" />}
                  </div>
                </OverlayTrigger>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  // Desktop Sidebar
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 shadow-sm" style={{ width: '280px', height: '100vh', position: 'fixed' }}>
      <Nav className="flex-column sidebar-nav">
        {mainLinks.map(link => (
          <Nav.Link 
            key={link.id} 
            as={Link} 
            to={`/#${link.id}`} 
            className={`nav-link-custom mb-2 ${activeLink === link.id ? 'active' : ''}`}
            onClick={() => handleNavClick(link.id)}
          >
            <div className="d-flex align-items-center">
              <i className={`bi ${link.icon} me-3`}></i>
              <span>{link.title}</span>
            </div>
          </Nav.Link>
        ))}
        
        <div className="text-muted small text-uppercase px-3 my-3">
          External Links
        </div>
        
        {externalLinks.map(link => (
          <OverlayTrigger
            key={link.id}
            placement="right"
            overlay={
              <Tooltip id={`tooltip-${link.id}`}>
                {link.wip ? 'Work in progress - Coming soon!' : ''}
              </Tooltip>
            }
          >
            <div
              className={`nav-link-custom mb-2 ${link.wip ? 'wip-link' : ''}`}
              style={{ cursor: 'default' }}
            >
              <div className="d-flex align-items-center">
                <i className={`bi ${link.icon} me-3`}></i>
                <span>{link.title}</span>
                {link.wip && <FaTools className="wip-icon" />}
              </div>
            </div>
          </OverlayTrigger>
        ))}
      </Nav>
      
      <div className="mt-auto pt-3 border-top text-center text-muted small">
        <p className="mb-0">&copy; {new Date().getFullYear()} Argha Chakraborty</p>
        <div className="social-icons mt-2">
          <a href="https://github.com" className="me-2"><i className="bi bi-github"></i></a>
          <a href="https://linkedin.com" className="me-2"><i className="bi bi-linkedin"></i></a>
          <a href="https://twitter.com" className="me-2"><i className="bi bi-twitter"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 