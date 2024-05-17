import { Card, CardBody, Col, ListGroup } from "react-bootstrap";

const JobsMain = () => {
  return (
    <Col md={7}>
      <Card>
        <Card.Header>
          <h5 className="fw-semibold">
            Le principali offerte di lavoro per te
          </h5>
          <h6 className="text-muted">
            {" "}
            <small>
              Sulla base del tuo profilo e della tua cronologia delle ricerche{" "}
            </small>{" "}
          </h6>
        </Card.Header>
        <CardBody>
          <ListGroup variant="flush"></ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JobsMain;
