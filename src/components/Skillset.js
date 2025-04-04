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

  const languages = [
    "C/C++11",
    "GLSL",
    "MSL",
    "HLSL",
    "Python",
    "Swift",
    "Ruby"
  ];

  return (
    <section id="skillset" className="py-5">
      <Container>
        <h2 className="section-title mb-4">Skillset</h2>
        
        <div className="mb-4">
          <h5 className="mb-3">Languages I Speak</h5>
          <p className="mb-3">
            I don't play favorites with programming languages—they're just tools in my toolbox.
            Whether it's the raw power of C/C++, the elegance of Python, the crispness of Swift, or the expressiveness of Ruby,
            I'll speak whatever language your project requires:
          </p>
          <div className="language-tags-container">
            {languages.map((language, index) => (
              <span key={index} className="language-tag">
                {language}
              </span>
            ))}
            <span className="language-tag language-tag-special">Your project's language here...</span>
          </div>
        </div>
        
        <div>
          <h5 className="mb-3">Academic Courses</h5>
          <p className="section-description mb-3">
            Courses I've completed:
          </p>
          <div className="course-tags-container">
            {courses.map((course, index) => (
              <span key={index} className="course-tag">
                {course}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skillset; 