import { Col, Row } from "react-bootstrap";

const JobRxSidebar = () => {
  return (
    <Col md={3}>
      <Row className="text-center footer">
        <Col xs={6}>
          <p>Informazioni</p>
          <p>Centro Assistenza</p>
          <p>Opzioni per gli annunci pubblicitari</p>
          <p>Pubblicità</p>
          <p>Scarica l'app LinkedIn</p>
        </Col>
        <Col xs={6}>
          <p>Acessibilità</p>
          <p>Privacy e condizioni</p>
          <p>Servizi alle aziende</p>
          <p>Altro</p>
        </Col>
      </Row>
      <span className="copyright">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
          alt="linkedin logo"
        />{" "}
        LinkedIn Corporation © 2024
      </span>
    </Col>
  );
};
export default JobRxSidebar;
