import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Studies() {
  const name = "Luca Nardi";
  return (
    <Card className="risorse">
      <Card.Header className="cardheader">
        <h5>Esperienza</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={2}>
            <p>AZIENDA IMG</p>
          </Col>
          <Col xs={4}>
            <h5>Esperienza 1</h5>
            <p>Nome Azienda ∙ A tempo pieno</p>
            <p className="text-secondary">nov 2023 - feb 2024 ∙ 4 mesi</p>
            <p className="text-secondary">Location</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Studies;