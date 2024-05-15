import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormEsperienze(props) {
  const [showInput, setShowInput] = useState(false);
  const [show, setShow] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [show2, setShow2] = useState(true);
  const [startYear, setStartYear] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescriprion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExp = {
      role: `${role}`,
      company: `${company}`,
      startDate: `${startYear}-${startMonth}-1`,
      endDate: `${endYear}-${endMonth}-1`,
      description: `${description}`,
      area: `${area}`,
    };
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userId}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(newExp),
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
          },
        }
      );
      if (response.ok) {
        newExp({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        throw new Error("Failed to fetch experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(fetchToPost());

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
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p>* indica che è obbligatorio</p>
          <Form.Group className="mb-3">
            <Form.Label className="m-0">Qualifica*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Esempio: Full-Stack Developer"
              required
              className="mb-3"
              onChange={(e) => setRole(e.target.value)}
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
              onChange={(e) => setCompany(e.target.value)}
            />
            <Form.Label className="m-0">Località</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Esempio: Roma, Italia"
              className="mb-3"
              onChange={(e) => setArea(e.target.value)}
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
                <Form.Select
                  size="sm"
                  className="mb-3"
                  onChange={(e) => setStartMonth(e.target.value)}
                >
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
                <Form.Select
                  size="sm"
                  className="mb-3"
                  onChange={(e) => setStartYear(e.target.value)}
                >
                  <option>Anno</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Form.Label className="m-0">Data di fine*</Form.Label>
              <Col>
                <Form.Select
                  size="sm"
                  onChange={(e) => setEndMonth(e.target.value)}
                >
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
                <Form.Select
                  size="sm"
                  className="mb-3"
                  onChange={(e) => setEndYear(e.target.value)}
                >
                  <option>Anno</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                </Form.Select>
              </Col>
            </Row>
            <Form.Label className="m-0">Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-3"
              onChange={(e) => setDescriprion(e.target.value)}
            />
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
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-pill" variant="info" type="submit">
            Salva
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FormEsperienze;
