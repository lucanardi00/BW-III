import { Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsSidebar = () => {
  return (
    <>
      <Col md={2}>
        <Card className="mt-2">
          <Card.Body className="p-1">
            <ListGroup>
            <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-bookmark-fill"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Le mie offerte di lavoro{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>

              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-list-ul"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Preferenze{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>
              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-clipboard2-check"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Valutazioni delle competenze{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>
              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 align-items-center justiify-content-center">
                <i class="bi bi-play-btn-fill"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Indicazioni per chi cerca lavoro{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default JobsSidebar;
