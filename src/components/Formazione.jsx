import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/epicodeschool_logo.jpeg"

function Studies() {
  const name = "Luca Nardi";
  return (
    <Card className="risorse">
      <Card.Header className="cardheader">
        <h5>Formazione</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={2}>
          <img src={logo} alt="Logo" />
          </Col>
          <Col xs={4}>
            <h5>EPICODE</h5>
            <p>Information Technology</p>
            <p className="text-secondary">feb 2024 - ago 2024</p>
            <p className="text-secondary">At Epicode, we understand that learning web development such as the basics of HTML and CSS to advanced topics like full stack development and modern JavaScript frameworks.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Studies;