import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaNewspaper, FaBuilding, FaHistory, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const [experienceTime, setExperienceTime] = useState({ years: 0, months: 0, days: 0 });

  // Calculate total professional experience
  useEffect(() => {
    // Starting date of professional career (from your first job)
    const careerStartDate = new Date('2016-02-01'); // Feb 2016 (Threadsol)
    
    // Function to update experience
    const calculateExperience = () => {
      const now = new Date();
      let years = now.getFullYear() - careerStartDate.getFullYear();
      let months = now.getMonth() - careerStartDate.getMonth();
      let days = now.getDate() - careerStartDate.getDate();
      
      if (days < 0) {
        months -= 1;
        // Get the last day of the previous month
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }
      
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      
      setExperienceTime({ years, months, days });
    };
    
    // Calculate initially
    calculateExperience();
    
    // Update every day
    const timer = setInterval(calculateExperience, 1000 * 60 * 60 * 24);
    
    return () => clearInterval(timer);
  }, []);

  const experiences = [
    {
      id: 1,
      role: 'Senior Staff Engineer XR',
      company: 'Stryker',
      logo: '/aboutme/images/companies/Stryker_logo.svg',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Sept 2024 - Current',
      description: 'Delivering high-performance visualization and interactive graphics for advanced robotic applications. Working on the visualisation pipeline of Stryker Mako robots.'
    },
    {
      id: 2,
      role: 'Lead Engineer',
      company: 'Valeo',
      logo: '/aboutme/images/companies/valeo_Logo.svg',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Jul 2023 - Sept 2024',
      description: 'Optimised vehicle graphics rendering for low power ECUs. Working in streamlining and render frame optimisation. Leading research related to mesh processing and correcting distortions in fish-eye camera output.'
    },
    {
      id: 3,
      role: 'Senior Graphics Engineer',
      company: 'Snaptrude',
      logo: '/aboutme/images/companies/snaptrude_logo.png',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Jan 2023 - Jul 2023',
      description: 'Collaborated with the graphics R&D team to engineer a rapid prototyping platform for building architects. Innovated and implemented new features in the CAD software, such as real-time collaboration and advanced modelling tools, to enhance the platform\'s functionality and improve the design process.'
    },
    {
      id: 4,
      role: 'Senior Software Engineer',
      company: 'Toshiba',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Feb 2022 - Jan 2023',
      description: 'Maintained an image processing library that facilitates the 3D reconstruction of specific anatomical structures, such as bones and organs, from 2D segmented biomedical images. This library enables doctors to accurately assess their patients\' vulnerabilities and conditions.'
    },
    {
      id: 5,
      role: 'Project Scientist',
      company: 'Indian Institute of Technology, Delhi',
      logo: '/aboutme/images/companies/iitd.png',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Nov 2018 - Jan 2022',
      description: 'Implemented a Virtual Reality based 3D surgical simulator providing an immersive and realistic training environment for students studying neurosurgery. Implemented fast approximate algorithms for light transport using rasterization. Replicated immersive surgical scenes with complex deformable 3-D anatomies. Implemented mesh-walking for transfer of parameterization. Managed a team of undergraduate students. Used ML-based texture synthesis for anatomical textures. Implemented Physics-based deformations and real-time tearing of thin membranes.',
      featuredLink: {
        url: 'https://timesofindia.indiatimes.com/city/delhi/aiims-ai-based-neurosurgery-simulation-training/articleshow/106463303.cms',
        title: 'AIIMS, IIT-D design AI-based neurosurgery simulation training - Times of India'
      }
    },
    {
      id: 6,
      role: 'Software Engineer',
      company: 'Threadsol (now COATS Digital)',
      logo: '/aboutme/images/companies/coats_logo.png',
      logoFallback: <FaBuilding className="company-logo-fallback" />,
      period: 'Feb 2016 - Jun 2018',
      description: 'Contributed to the Algorithm Development team that designed technical solutions for reducing garment waste in large-scale manufacturing industries. Developed Cut-Order Planning and other optimization algorithms to improve the efficiency of the production process and reduce the industry\'s carbon footprint.'
    }
  ];

  return (
    <section id="experience" className="py-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <h2 className="section-title mb-3 mb-md-0">Work Experience</h2>
          <div className="experience-counter p-2 p-sm-3 rounded-3 shadow-sm">
            <div className="d-flex align-items-center">
              <FaHistory className="experience-icon me-2" />
              <span className="experience-text">
                {experienceTime.years} years, {experienceTime.months} months, {experienceTime.days} days
              </span>
            </div>
          </div>
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="experience-card mb-4 border-0 shadow-sm">
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                  <div className="d-flex align-items-center mb-2 mb-md-0">
                    <div className="company-logo-container me-3">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="company-logo"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="company-fallback-logo" style={{ display: exp.logo ? 'none' : 'flex' }}>
                        {exp.logoFallback}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-0 role-title">{exp.role}</h4>
                      <h5 className="company-name mb-0">{exp.company}</h5>
                    </div>
                  </div>
                  <div className="period-badge">
                    <FaCalendarAlt className="period-icon me-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="experience-description mb-2">{exp.description}</p>
                
                {exp.featuredLink && (
                  <a 
                    href={exp.featuredLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="featured-link"
                  >
                    <FaNewspaper className="me-1" />
                    <span>{exp.featuredLink.title}</span>
                  </a>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      
      <style jsx="true">{`
        .experience-counter {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
        }
        
        .experience-icon {
          color: var(--text-color);
          font-size: 1.1rem;
        }
        
        .experience-text {
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .timeline-container {
          position: relative;
        }
        
        .experience-card {
          background-color: var(--card-bg);
          border-radius: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px var(--card-shadow) !important;
        }
        
        .company-logo-container {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .company-logo, .company-fallback-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .company-fallback-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--badge-bg);
          border-radius: 6px;
          color: var(--text-color);
        }
        
        .company-logo-fallback {
          font-size: 1.4rem;
        }
        
        .role-title {
          font-size: 1.2rem;
          color: var(--text-color);
        }
        
        .company-name {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        
        .period-badge {
          display: flex;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-muted);
          padding: 0.25rem 0.75rem;
          background-color: var(--badge-bg);
          border-radius: 30px;
          margin-top: 0.5rem;
        }
        
        .period-icon {
          font-size: 0.8rem;
        }
        
        .experience-description {
          color: var(--text-color);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .featured-link {
          display: inline-flex;
          align-items: center;
          color: var(--text-color);
          background-color: var(--badge-bg);
          padding: 0.25rem 0.75rem;
          border-radius: 30px;
          font-size: 0.8rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .featured-link:hover {
          background-color: var(--active-bg);
        }
        
        @media (max-width: 768px) {
          .role-title {
            font-size: 1.1rem;
          }
          
          .company-name {
            font-size: 0.9rem;
          }
          
          .period-badge {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience; 