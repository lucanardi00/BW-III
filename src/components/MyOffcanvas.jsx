import { Card, Offcanvas } from "react-bootstrap";

const MyOffcanvas = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.handleClose}
      {...props}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Per le aziende</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Card>
          <Card.Header>
            <Card.Title>Special title treatment</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Scopri altro per il businness</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <a href="#">
                <h5>Assumi su Linkedin</h5>
                <p>Trova, attrai, assumi</p>
              </a>
              <a href="#">
                <h5>Vendi con Linkedin</h5>
                <p>Sblocca nuove oppurtunità di vendita</p>
              </a>
              <a href="#">
                <h5>Offerta di lavoro gratuita</h5>
                <p>Ottieni rapidamente candidati qualificati</p>
              </a>
              <a href="#">
                <h5>Fai pubblicità su Linkedin</h5>
                <p>Acquisisci clienti e fai crescere la tua azienda</p>
              </a>
              <a href="#">
                <h5>Impara con Linkedin</h5>
                <p>Assumi su Linkedin</p>
              </a>
              <a href="#">
                <h5>Centro amministrazione</h5>
                <p>Gestisci i dettagli di fatturazione e account</p>
              </a>
            </Card.Text>
          </Card.Body>
          <Card.Header>
            <a>
              <h5>Crea una pagina aziendale +</h5>
            </a>
          </Card.Header>
        </Card>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyOffcanvas;
