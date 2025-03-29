import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'Advanced Machine Learning Techniques for Time Series Analysis',
      authors: 'Chakraborty, A., Smith, J., & Johnson, R.',
      journal: 'Journal of Machine Learning Research',
      year: '2023',
      link: '#'
    },
    {
      id: 2,
      title: 'A Novel Approach to Neural Network Optimization',
      authors: 'Williams, T., Chakraborty, A., & Davis, M.',
      journal: 'IEEE Transactions on Neural Networks',
      year: '2022',
      link: '#'
    },
    {
      id: 3,
      title: 'Efficient Data Processing for Large-Scale Analytics',
      authors: 'Chakraborty, A., & Miller, S.',
      journal: 'International Conference on Data Engineering',
      year: '2021',
      link: '#'
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
              </small>
            </Card.Text>
            <a href={pub.link} className="btn btn-sm btn-outline-dark">View Publication</a>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Publications; 