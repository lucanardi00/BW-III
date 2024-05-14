import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Footer = () => {
  return (
      <footer className="footer">
        <Container>
          <Row>
            <Col sm={2}>
              <ul className="footer-list">
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Informazioni</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Linee guida della community</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Privacy e condizioni</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Sales Solutions</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Centro sicurezza</a>
                </li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul className="footer-list">
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Accessibilità</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Carriera</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Opzioni per gli annunci pubblicitari</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Mobile</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Talent Solutions</a>
                </li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul className="footer-list">
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Soluzioni di marketing</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Pubblicità</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'>Piccole imprese</a>
                </li>
              </ul>
            </Col>
            <Col sm={2}>
              <ul className="footer-list">
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'><i class="bi bi-question-circle-fill"></i> Domande</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'><i class="bi bi-gear-fill"></i> Gestisci il tuo account e la tua privacy</a>
                </li>
                <li>
                  <a href="#" className='text-decoration-none text-secondary fw-normal footlink'><i class="bi bi-shield-shaded"></i> Trasparenza sui contenuti</a>
                </li>
              </ul>
            </Col>
            <Col sm={2}>
                  <p className='text-decoration-none text-secondary fw-normal'>Seleziona lingua</p>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-autoclose-true" className='drop text-secondary'>
                      Italiano (Italiano)
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">English(Inglese)</Dropdown.Item>
                      <Dropdown.Item href="#">Portuguese (Portoghese)</Dropdown.Item>
                      <Dropdown.Item href="#">Spanish (Spagnolo)</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            </Col>
          </Row>
          <div className="footer-copyright">
        <p>LinkedIn Corporation © 2024</p>
      </div>
        </Container>
      </footer>
  );
};

export default Footer;
