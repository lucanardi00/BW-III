import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Analisi() {
  return (
    <Card className="analisi">
      <Card.Header className="cardheader">
        <h5>Analisi</h5>
        <li-icon aria-hidden="true" type="visibility" class="v-align-bottom text-secondary" size="small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
        </li-icon>
        <h6 className="text-secondary fw-light d-inline"> Solo per te</h6>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4}>
            <div className="d-flex justify-content-between">
              <h6>
                <li-icon
                  aria-hidden="true"
                  type="people"
                  class="ivm-view-attr__icon ivm-view-attr__icon--icon "
                  size="large"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </li-icon>
                17 visualizzazioni del profilo
              </h6>
            </div>
          </Col>
          <Col xs={4} className="text-center">
            <div className="d-flex justify-content-center">
              <h6>
              <li-icon aria-hidden="true" type="analytics" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
    </svg></li-icon>
                110 impressioni del post
                </h6>
            </div>
          </Col>
          <Col xs={4} className="text-center">
            <div className="d-flex justify-content-center">
              <h6>
              <li-icon aria-hidden="true" type="search" class="ivm-view-attr__icon ivm-view-attr__icon--icon  " size="large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
    </svg></li-icon>
                7 comparsa nei motori di ricerca
                </h6>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="cardfooter">
        <Row>
          <Col className="text-center">
            <a href="#" className="analisi-link text-decoration-none text-dark">
              Mostra tutte le analisi →
            </a>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Analisi;
