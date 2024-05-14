import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormEsperienze(props) {
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [show2, setShow2] = useState(true);

  const toggleInput = () => {
    setShowInput(!showInput);
    setShow(!show);
  };
  const toggleInput2 = () => {
    setShowInput2(!showInput2);
    setShow2(!show2);
  };
  return (
    <Modal
      show={props.modalShow}
      onHide={props.handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>* indica che è obbligatorio</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="m-0">Qualifica*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Esempio: Full-Stack Developer"
              required
              className="mb-3"
            />
            <Form.Label className="m-0">Tipo di impiego</Form.Label>
            <Form.Select size="sm">
              <option>Seleziona</option>
              <option value="1">A tempo pieno</option>
              <option value="2">Part-Time</option>
              <option value="3">Autonomo</option>
              <option value="4">Freelance</option>
              <option value="5">A Contratto</option>
              <option value="6">Stage</option>
              <option value="7">Apprendistato</option>
              <option value="8">Stagionale</option>
            </Form.Select>
            <p className="mb-3">
              Scopri di più sui <a>tipi di impiego</a>
            </p>
            <Form.Label className="m-0">Nome Azienda*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Esempio: Epicode"
              required
              className="mb-3"
            />
            <Form.Label className="m-0">Località</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Esempio: Roma, Italia"
              className="mb-3"
            />
            <Form.Label className="m-0">Tipo di località</Form.Label>
            <Form.Select size="sm">
              <option>Seleziona</option>
              <option value="1">In sede</option>
              <option value="2">Ibrida</option>
              <option value="3">Da remoto</option>
            </Form.Select>
            <p className="mb-3">Scegli un tipo di località (es. da remoto)</p>
            <Form.Check
              className="mb-3"
              size="lg"
              label="Attualmente ricopro questo ruolo"
            />
            <Row>
              <Form.Label className="m-0">Data di inizio*</Form.Label>
              <Col>
                <Form.Select size="sm" className="mb-3">
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select size="sm" className="mb-3">
                  <option>Anno</option>
                  <option value="1">2024</option>
                  <option value="2">2023</option>
                  <option value="3">2022</option>
                  <option value="4">2021</option>
                  <option value="5">2020</option>
                  <option value="6">2019</option>
                  <option value="7">2018</option>
                  <option value="8">2017</option>
                  <option value="9">2016</option>
                  <option value="10">2015</option>
                  <option value="11">2014</option>
                  <option value="12">2013</option>
                  <option value="13">2012</option>
                  <option value="14">2011</option>
                  <option value="15">2010</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Form.Label className="m-0">Data di fine*</Form.Label>
              <Col>
                <Form.Select size="sm">
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select size="sm" className="mb-3">
                  <option>Anno</option>
                  <option value="1">2024</option>
                  <option value="2">2023</option>
                  <option value="3">2022</option>
                  <option value="4">2021</option>
                  <option value="5">2020</option>
                  <option value="6">2019</option>
                  <option value="7">2018</option>
                  <option value="8">2017</option>
                  <option value="9">2016</option>
                  <option value="10">2015</option>
                  <option value="11">2014</option>
                  <option value="12">2013</option>
                  <option value="13">2012</option>
                  <option value="14">2011</option>
                  <option value="15">2010</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Label className="m-0">Descrizione</Form.Label>
            <Form.Control as="textarea" rows={3} className="mb-3" />
            <Form.Label className="m-0">Sommario del profilo</Form.Label>
            <Form.Control size="sm" type="text" placeholder="--" />
            <h4 className="mb-0">Competenze</h4>
            <Form.Label className="m-0">
              Ti consigliamo di aggiungere le 5 competenze più utilizzate in
              questo ruolo. Appariranno anche nella sezione Competenze.
            </Form.Label>
            <div>
              {show && (
                <Button
                  className="mb-3"
                  variant="outline-primary"
                  onClick={toggleInput}
                >
                  + Aggiungi competenza
                </Button>
              )}
              {showInput && (
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Competenza (es.HTML5)"
                  className="mb-3"
                />
              )}
            </div>
            <h4 className="mb-0">Media</h4>
            <Form.Label className="m-0">
              Aggiungi contenuti multimediali come immagini, documenti, siti o
              presentazioni. Scopri di più sui{" "}
              <a>tipi di file multimediali supportati</a>
            </Form.Label>
            <div>
              {show2 && (
                <Button
                  className="mb-3"
                  variant="outline-primary"
                  onClick={toggleInput2}
                >
                  + Aggiungi media
                </Button>
              )}
              {showInput2 && (
                <Form.Control
                  size="sm"
                  type="file"
                  placeholder="Media: es. .png .jpeg"
                />
              )}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="rounded-pill" variant="info">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormEsperienze;