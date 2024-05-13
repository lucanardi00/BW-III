import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Profile() {
  return (
    <Card className="profile">
      <Card.Header>Informazioni</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={3} className="text-center">
            <Image
              src="https://i.imgur.com/fP2SkUg.jpg" // Replace with your profile picture URL
              roundedCircle
              fluid
            />
          </Col>
          <Col xs={9}>
            <h3>Hey there, I'm Luca!</h3>
            <p>
              At 23 years old, I've already spent over a decade diving into the
              world of computer video games and crafting modded servers. It all
              started when I was just 12, and my passion for gaming and
              technology has only grown since then.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <Card className="esperienza">
              <Card.Header>Esperienza</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p>
                    <strong>Junior Game Developer (Freelance)</strong>
                    <br />
                    <span className="text-muted">August 2021 - Present</span>
                  </p>
                  <p>
                    Description of experience 1. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    <strong>Game Design Intern (ABC Company)</strong>
                    <br />
                    <span className="text-muted">June 2020 - August 2020</span>
                  </p>
                  <p>
                    Description of experience 2. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <Card className="competenze">
              <Card.Header>Competenze principali</Card.Header>
              <p>
                Web Development, Game Development, Programming Languages,
                Multilingual, Problem Solving
              </p>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <Card className="interessi">
              <Card.Header>Mi piace</Card.Header>
              <p>
                Musica, Soccer, Videogiochi, Travel
              </p>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Profile