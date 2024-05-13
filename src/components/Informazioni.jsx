import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    const bio = 'Test bio'
  return (
    <Card className="profile">
      <Card.Header className='cardheader'>
        <h5>Informazioni</h5>
        </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={9}>
            <p>{bio}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Profile