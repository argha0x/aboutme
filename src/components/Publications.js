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