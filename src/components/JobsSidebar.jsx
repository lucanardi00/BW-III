import { Col, Card, ListGroup } from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <>
      <Col md={2}>
        <Card className="mt-2">
          <Card.Body>
            <ListGroup className="text-center">
              <ListGroup.Item className="d-flex">
                <i className="bi bi-bookmark-fill"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Le mie offerte di lavoro{" "}
                  </small>
                </span>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex">
                <i className="bi bi-list-ul"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Preferenze{" "}
                  </small>
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <i className="bi bi-clipboard2-check"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Valutazioni delle competenze{" "}
                  </small>
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                <i class="bi bi-play-btn-fill"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Indicazioni per chi cerca lavoro{" "}
                  </small>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default JobsSidebar;
