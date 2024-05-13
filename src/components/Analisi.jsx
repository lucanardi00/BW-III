import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Analisi() {
  return (
    <Card className="analisi">
      <Card.Header>Analisi</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6}>
            <p>Solo per te</p>
            <div className="d-flex justify-content-between">
              <p>17 visualizzazioni del profilo</p>
              <p>110 impressioni del post</p>
            </div>
          </Col>
          <Col xs={6} className="text-center">
            <p>Ultimi 7 giorni</p>
            <div className="d-flex justify-content-center">
              <p>7 comparsa nei motori di ricerca</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>Scopri chi ha visitato il tuo profilo</p>
            <a href="#" className="analisi-link">Mostra tutte le analisi→</a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

const styles = {
  analisi: {
    marginBottom: '2rem',
  },
  analisiLink: {
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'transform 0.2s ease-in-out',
  },
  analisiLinkHover: {
    transform: 'scale(1.1)',
  },
};

export default Analisi;
