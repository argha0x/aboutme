import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { publicationsData } from '../data/PublicationsData';

const Publications = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Publications</h2>
      <Row>
        {publicationsData.map((publication, index) => (
          <Col key={`publication-${index}`} xs={12} className="mb-4">
            <Card className="h-100 publication-card">
              <Card.Body>
                <Card.Title>{publication.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {publication.authors}
                </Card.Subtitle>
                <Card.Text>
                  <strong>{publication.venue}</strong>
                  <br />
                  {publication.year}
                </Card.Text>
                {publication.description && (
                  <Card.Text className="mt-3">
                    {publication.description}
                  </Card.Text>
                )}
                {publication.keywords && (
                  <div className="mt-3">
                    {publication.keywords.map((keyword, keywordIndex) => (
                      <Badge key={`keyword-${index}-${keywordIndex}`} bg="secondary" className="me-2 mb-2">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                )}
                {publication.links && (
                  <div className="publication-links mt-3">
                    {publication.links.map((link, linkIndex) => (
                      <a
                        key={`link-${index}-${linkIndex}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        {link.type}
                      </a>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Publications; 