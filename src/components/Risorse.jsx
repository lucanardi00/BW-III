import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

function Risorse() {
  return (
    <Card className="risorse">
      <Card.Header>Risorse</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6}>
            <p>Solo per te</p>
            <div className="d-flex justify-content-between">
            </div>
          </Col>
          <Col xs={6} className="text-center">
            <p>La mia rete</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Elementi salvati</p>
            <p>Monitora le tue offerte di lavoro, i corsi e gli articoli salvati</p>
            <a href="#" className="text-center d-block">
              Mostra tutte le risorse (4) →
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

const styles = {
  risorse: {
    marginBottom: '2rem',
  },
  risorseLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Risorse;
