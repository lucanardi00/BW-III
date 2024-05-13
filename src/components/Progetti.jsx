import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  const name = "Luca Nardi";
  return (
    <Card className="risorse">
      <Card.Header className="cardheader d-flex justify-content-between">
        <div>
        <h5>Progetti</h5>
        </div>
        <div>
        <i class="bi bi-plus-lg me-2"></i>
        <i class="bi bi-pencil"></i>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <h5>Spotify Clone</h5>
            <p>feb 2024 - ago 2024</p>
            <p>Clone di Spotify: una piattaforma di streaming musicale che consente agli utenti di ascoltare musica</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Spotify Clone</h5>
            <p>feb 2024 - ago 2024</p>
            <p>Quiz con timer ad ogni domanda sviluppato in HTML, CSS, JAVASCRIPT Senza Bootstrap.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Projects;