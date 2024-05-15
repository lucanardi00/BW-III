import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormPost from "./FormPost";

function Post() {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const name = "Luca Nardi";
  return (
    <>
      <Card className="risorse">
        <Card.Header className="cardheader d-flex justify-content-between">
          <div>
            <h5>Attività</h5>
            <li-icon
              aria-hidden="true"
              type="visibility"
              class="v-align-bottom text-secondary"
              size="small"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </li-icon>
            <a href="#">
              <h6 className="text-secondary fw-light d-inline"> ? follower</h6>
            </a>
          </div>
          <div>
            <button
              onClick={handleShow}
              className="me-2 rounded bg-transparent text-primary border-primary"
            >
              Crea un Post
            </button>
            <i className="bi bi-pencil"></i>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h6 className="text-muted fw-light">
                {name} ha pubblicato questo post ∙ 1s
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <p>POST IMG</p>
            </Col>
            <Col xs={4}>
              <p>
                Ho il piacere di condividere questo progeto ?, a cui ho
                lavorato.
              </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h6 className="text-muted fw-light">
                {name} ha pubblicato questo post ∙ 1s
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <p>POST IMG</p>
            </Col>
            <Col xs={4}>
              <p>
                Ho il piacere di condividere questo progeto ?, a cui ho
                lavorato.
              </p>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="cardfooter">
          <a
            href="#"
            className="text-center d-block text-decoration-none text-dark"
          >
            Mostra tutte le risorse (?) →
          </a>
        </Card.Footer>
      </Card>
      <FormPost modalShow={modalShow} handleClose={handleClose} />
    </>
  );
}

export default Post;
