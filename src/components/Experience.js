import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaNewspaper, FaBuilding, FaHistory } from 'react-icons/fa';

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
      logo: '/aboutme/images/companies/stryker_logo.png',
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
      period: 'Sept 2024 - Current',
      description: 'Delivering high-performance visualization and interactive graphics for advanced robotic applications. Working on the visualisation pipeline of Stryker Mako robots.'
    },
    {
      id: 2,
      role: 'Lead Engineer',
      company: 'Valeo',
      logo: '/aboutme/images/companies/valeo_Logo.svg',
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
      period: 'Jul 2023 - Sept 2024',
      description: 'Optimised vehicle graphics rendering for low power ECUs. Working in streamlining and render frame optimisation. Leading research related to mesh processing and correcting distortions in fish-eye camera output.'
    },
    {
      id: 3,
      role: 'Senior Graphics Engineer',
      company: 'Snaptrude',
      logo: '/aboutme/images/companies/snaptrude_logo.png',
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
      period: 'Jan 2023 - Jul 2023',
      description: 'Collaborated with the graphics R&D team to engineer a rapid prototyping platform for building architects. Innovated and implemented new features in the CAD software, such as real-time collaboration and advanced modelling tools, to enhance the platform\'s functionality and improve the design process.'
    },
    {
      id: 4,
      role: 'Senior Software Engineer',
      company: 'Toshiba',
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
      period: 'Feb 2022 - Jan 2023',
      description: 'Maintained an image processing library that facilitates the 3D reconstruction of specific anatomical structures, such as bones and organs, from 2D segmented biomedical images. This library enables doctors to accurately assess their patients\' vulnerabilities and conditions.'
    },
    {
      id: 5,
      role: 'Project Scientist',
      company: 'Indian Institute of Technology, Delhi',
      logo: '/aboutme/images/companies/iitd_logo.png',
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
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
      logoFallback: <FaBuilding className="company-logo-fallback text-primary" />,
      period: 'Feb 2016 - Jun 2018',
      description: 'Contributed to the Algorithm Development team that designed technical solutions for reducing garment waste in large-scale manufacturing industries. Developed Cut-Order Planning and other optimization algorithms to improve the efficiency of the production process and reduce the industry\'s carbon footprint.'
    }
  ];

  return (
    <Container id="experience" className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="border-bottom pb-2 mb-0">Work Experience</h2>
        <div className="d-flex align-items-center bg-light p-2 rounded-3">
          <FaHistory className="text-primary me-2" />
          <span className="fw-bold">
            {experienceTime.years} years, {experienceTime.months} months, {experienceTime.days} days
          </span>
        </div>
      </div>
      
      {experiences.map(exp => (
        <div key={exp.id} className="mb-4">
          <Row className="mb-2">
            <Col>
              <div className="d-flex align-items-center">
                <div className="company-logo me-2" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {exp.logo ? (
                    <Image 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      width={32} 
                      height={32} 
                      onError={(e) => {
                        if (e.target) {
                          e.target.style.display = 'none';
                          const parent = e.target.parentNode;
                          if (parent && parent.querySelector('.company-logo-fallback')) {
                            parent.querySelector('.company-logo-fallback').style.display = 'block';
                          }
                        }
                      }}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  ) : null}
                  <div className="company-logo-fallback" style={{ display: exp.logo ? 'none' : 'block' }}>
                    {exp.logoFallback}
                  </div>
                </div>
                <h4 className="mb-0 me-2">
                  {exp.role}
                </h4>
                {exp.featuredLink && (
                  <a 
                    href={exp.featuredLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-decoration-none" 
                    title={exp.featuredLink.title}
                  >
                    <FaNewspaper className="text-primary fs-5" />
                  </a>
                )}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-muted mb-0">{exp.company}</h5>
                <span className="text-muted small">{exp.period}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{exp.description}</p>
              {exp.featuredLink && (
                <div className="mt-2">
                  <a 
                    href={exp.featuredLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none small"
                  >
                    <FaNewspaper className="me-1" /> Featured in: {exp.featuredLink.title}
                  </a>
                </div>
              )}
            </Col>
          </Row>
          {exp.id !== experiences.length && <hr />}
        </div>
      ))}

      <style jsx="true">{`
        .company-logo-fallback {
          font-size: 24px;
        }
      `}</style>
    </Container>
  );
};

export default Experience; 