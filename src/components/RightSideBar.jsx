import React, { useEffect, useState } from 'react';
import { Col, Card, ListGroup, Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileAction } from '../redux/actions';

function Sidebar() {
    const dispatch = useDispatch();
    const myProfile = useSelector((state) => state.getFetch.profile);
    const [image] = useState("");

    useEffect(() => {
        dispatch(fetchUserProfileAction("me"));
      }, [image]);

  return (
    <Col md={3}>
      <Card className="mb-2">
        <ListGroup>
          <ListGroup.Item className="p-3 border-0">
            <div className="d-flex justify-content-between">
              <h5>LinkedIn Notizie</h5>
              <span>
              <i class="bi bi-info-square-fill infoIcon"></i>
              </span>
            </div>
            <div>
              <p className="mb-0 fw-medium">Storie principali</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className='item'>
            <a href=""><div>
                <p className='fw-medium text-dark mb-1'>Priorità sostenibilità per la Gen Z</p>
                <span className='text-secondary info'>1 giorno fa • 1.564 lettori</span>
            </div></a>
          </ListGroup.Item>
          <ListGroup.Item className='item'>
            <a href=""><div>
                <p className='fw-medium text-dark mb-1'>Dove sventolano le bandiere blu</p>
                <span className='text-secondary info'>17 ore fa • 155 lettori</span>
            </div></a>
          </ListGroup.Item>
          <ListGroup.Item className='item'>
            <a href=""><div>
                <p className='fw-medium text-dark mb-1'>Scalapay e Deutsche Bank Uniscono I...</p>
                <span className='text-secondary info'>4 giorni fa • 840 lettori</span>
            </div></a>
          </ListGroup.Item>
          <ListGroup.Item className='item'>
            <a href=""><div>
                <p className='fw-medium text-dark mb-1'>Come nasce un punto vendita autom...</p>
                <span className='text-secondary info'>20 ore fa • 245 lettori</span>
            </div></a>
          </ListGroup.Item>
          <ListGroup.Item className='item'>
            <a href=""><div>
                <p className='fw-medium text-dark mb-1'>Alle smart city mancano tecnici</p>
                <span className='text-secondary info'>1 giorno fa • 297 lettori</span>
            </div></a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="mb-2">
            <Container className='p-2'>
            <div className="d-flex flex-row-reverse headerBar">
                <span className='ms-3'>•••</span>
                <span>Annuncio</span>
            </div>
            <div className='text-center mb-3'>
                <span className='text-secondary infoAd'>Luca, reactivate your Premium free trial today!</span>
            </div>
            <div className='text-center mb-3'>
            <img
            src={myProfile.image}
            alt="Immagine"
            className="rounded-circle me-2"
            style={{ width: "80px", height: "80px" }}
          />
          <img src="https://media.licdn.com/dms/image/C560EAQEnfVYdDx5SNg/rightRail-logo-shrink_200_200/0/1650379295752?e=1716364800&v=beta&t=bmuSLHE4sylMasRLEIx6PiVSrEibrETYriZAOaja5Z4" alt=""  style={{ width: "80px", height: "80px" }}/>
          </div>
          <div className='text-center mb-3'>
                <p>See who's viewed your profile in the last 365 days</p>
         </div>
         <div className='text-center'>
         <Button type='button' className='btn btn-primary bg-transparent text-primary fw-medium trial'>Reactivate Trial</Button>
         </div>
            </Container>
      </Card>
      <Row className='text-center footer'>
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
      <span className='copyright'>
        <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="linkedin logo" /> LinkedIn Corporation © 2024
      </span>
      </Col>
  );
}

export default Sidebar;