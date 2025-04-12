import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'A review of virtual reality simulators for neuroendoscopy',
      authors: 'Baby, B., Singh, R., Suri, A., Dhanakshirur, R. R., Chakraborty, A., Kumar, S., Kalra, P. K., & Banerjee, S.',
      journal: 'Neurosurgical Review',
      year: '2019',
      doi: '10.1007/s10143-019-01164-7',
      link: 'https://pubmed.ncbi.nlm.nih.gov/31444716/'
    },
    {
      id: 2,
      title: 'Towards Generalised Position Based Dynamics: Theoretical and Empirical Analysis',
      authors: 'Chakraborty, A., Narain, R. (Guide)',
      journal: "Master's Thesis, Indian Institute of Technology Delhi",
      year: '2024',
      description: "This work explores algorithmic deformation of soft bodies in real-time. The thesis introduces Generalised Position Based Dynamics (GPBD), proving its equivalence to Extended Position Based Dynamics (XPBD) while overcoming limitations for non-linear energy forces. It demonstrates the algorithm's flexibility, stability, and accuracy for both linear and non-linear interaction models.",
      link: ''
    },
    {
      title: "Towards Generalized Position Based Dynamics",
      authors: "Manas Chaudhary*, Chandradeep Pokhariya*, Abhay Pratap Singh Rathore, Argha Chakraborty, Rahul Narain",
      journal: "SIGGRAPH 2024 (Rejected)",
      year: "2024",
      description: "The position-based dynamics (PBD) algorithm is a popular and versatile technique for real-time simulation of deformable bodies, but is only applicable to forces that can be expressed as linearly compliant constraints. In this work, we explore a generalization of PBD that is applicable to arbitrary nonlinear force models. We do this through a force-centric reformulation of implicit time integration, to which applying Gauss-Seidel iterations naturally leads to a PBD-type algorithm. We further show how the basic algorithm can be extended to enable robust handling of inverted elements, and exploit rigid invariance to reduce the computational cost. As we demonstrate, our method allows interactive simulation of various material models that cannot be represented by existing variations of position-based dynamics, such as neo-Hookean elasticity with an inversion barrier, and homogenized yarn-level cloth.",
      keywords: ["Position Based Dynamics", "Physics Simulation", "Deformable Bodies", "Nonlinear Force Models", "Implicit Time Integration", "Gauss-Seidel", "Neo-Hookean Elasticity", "Cloth Simulation"],
      pdfLink: "#"
    },
    {
      title: "Position-Based Simulation of Homogenized Yarn-Level Cloth",
      authors: "Manas Chaudhary*, Chandradeep Pokhariya*, Abhay Pratap Singh Rathore, Argha Chakraborty, Rahul Narain",
      journal: "SIGGRAPH 2025 (Rejected)",
      year: "2025",
      description: "The position-based dynamics (PBD) algorithm is a popular and versatile technique for real-time simulation of deformable bodies, but is only applicable to forces that can be expressed as linearly compliant constraints. In this work, we explore a generalization of PBD that is applicable to arbitrary nonlinear force models. We do this by reformulating the implicit time integration equations in terms of the individual forces in the system, to which applying Gauss-Seidel iterations naturally leads to a PBD-type algorithm. As we demonstrate, our method allows simulation of homogenized yarn-level cloth that cannot be represented by existing variations of position-based dynamics. We also show significant performance improvements over the ARCSim implementation by sperl2020hylc for high mesh resolutions.",
      keywords: ["Position Based Dynamics", "Cloth Simulation", "Yarn-Level Simulation", "Nonlinear Force Models", "Implicit Time Integration", "Gauss-Seidel", "Performance Optimization", "ARCSim"],
      pdfLink: "#"
    }
  ];

  return (
    <Container id="publications" className="py-5">
      <h2 className="border-bottom pb-2 mb-4">Publications</h2>
      {publications.map(pub => (
        <Card key={pub.id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{pub.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{pub.authors}</Card.Subtitle>
            <Card.Text>
              <small>
                <strong>{pub.journal}</strong>, {pub.year}
                {pub.doi && <span> | DOI: {pub.doi}</span>}
              </small>
            </Card.Text>
            {pub.description && (
              <Card.Text>
                {pub.description}
              </Card.Text>
            )}
            {pub.link && pub.link.trim() !== '' && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">View Publication</a>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Publications; 