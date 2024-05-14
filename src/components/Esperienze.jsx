import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experiences() {
  const name = "Luca Nardi";
  return (
    <Card className="risorse">
      <Card.Header className="cardheader d-flex justify-content-between">
        <div>
        <h5>Esperienza</h5>
        </div>
        <div>
        <i class="bi bi-plus-lg me-2"></i>
        <i class="bi bi-pencil"></i>
        </div>
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
        <hr />
        <Row>
          <Col xs={2}>
            <p>AZIENDA IMG</p>
          </Col>
          <Col xs={4}>
            <h5>Esperienza 2</h5>
            <p>Nome Azienda ∙ A tempo pieno</p>
            <p className="text-secondary">nov 2023 - feb 2024 ∙ 4 mesi</p>
            <p className="text-secondary">Location</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Experiences;