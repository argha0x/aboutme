import React from 'react';
import { Container } from 'react-bootstrap';

const Skillset = () => {
  const courses = [
    "COL781 Computer Graphics",
    "COL859 Advanced Computer Graphics",
    "COL783 Digital Image Analysis",
    "COL780 Computer Vision",
    "COL774 Machine Learning",
    "SIL801 Special Topics in Multimedia",
    "COL726 Numerical Algorithms",
    "COL761 Data Mining",
    "HSL800 Research Writing",
    "SID890 MS Research Project"
  ];

  return (
    <section id="skillset" className="py-5">
      <Container>
        <h2 className="section-title mb-4">Skillset</h2>
        <p className="section-description mb-4">
          Academic courses I've completed:
        </p>
        
        <div className="course-tags-container">
          {courses.map((course, index) => (
            <span key={index} className="course-tag">
              {course}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skillset; 