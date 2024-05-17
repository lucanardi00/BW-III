import { Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsSidebar = () => {
  return (
    <>
      <Col md={3}>
        <Card className="mt-2">
          <Card.Body className="p-1">
            <ListGroup>
            <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-bookmark-fill me-2"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Le mie offerte di lavoro{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>

              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-list-ul me-2"></i>
                <span>
                  {" "}
                  <small className="fw-semibold"> Preferenze </small>
                </span>
              </ListGroup.Item></Link>
              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 rounded align-items-center justiify-content-center">
                <i className="bi bi-clipboard2-check me-2"></i>
                <span>
                  {" "}
                  <small className="fw-semibold">
                    {" "}
                    Valutazioni delle competenze{" "}
                  </small>
                </span>
              </ListGroup.Item></Link>
              <Link to={"#"} className="text-decoration-none"><ListGroup.Item className="d-flex linkside border-0 align-items-center justiify-content-center">
                <i class="bi bi-play-btn-fill me-2"></i>
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
        <Button
              id=" Pubblica-offerta-gratuita"
              variant="primary"
              style={{
                color: "#0c6dfd",
                maxWidth: "fit-content",
                height: "60px",
              }}
              className="rounded-pill d-flex bg-white fw-semibold justify-content-center align-items-center bg-transparent my-2"
            >
              <i className="bi bi-pencil-square text-primary fs-5 me-1"></i>
              Pubblica offerta gratuita
            </Button>
      </Col>
    </>
  );
};
export default JobsSidebar;

