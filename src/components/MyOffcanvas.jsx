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
              <div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-learning-@1-a"
                        x1="7.18"
                        y1="6.98"
                        x2="13.8"
                        y2="20.22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#33aada"></stop>
                        <stop offset="1" stopColor="#0091ca"></stop>
                      </linearGradient>
                      <linearGradient
                        id="app-learning-@1-b"
                        x1="12.96"
                        y1="-17.55"
                        x2="27.9"
                        y2="24.33"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                      fill="url(#app-learning-@1-a)"
                    ></path>
                    <path
                      d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                      fill="url(#app-learning-@1-b)"
                    ></path>
                    <path
                      fill="#33aada"
                      d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                    ></path>
                    <path
                      fill="#006097"
                      d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                    ></path>
                    <path
                      d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <p>Learning</p>
                </a>
              </div>
              <div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-talent-insights-medium-a"
                        x1="34.05"
                        y1="44.47"
                        x2="13.67"
                        y2="19.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#665ed0"></stop>
                        <stop offset="1" stopColor="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                      fill="#caedff"
                    ></path>
                    <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                    <path
                      d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                      fill="url(#app-talent-insights-medium-a)"
                    ></path>
                  </svg>
                  <p>Talent Insights</p>
                </a>
              </div>
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
