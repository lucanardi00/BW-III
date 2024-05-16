import { Button, Col, Image } from "react-bootstrap";

const JobDetails = (props) => {
  console.log(props.allWork);
  console.log(props.data);
  return (
    <Col md={7} className="bg-white p-2">
      <div className="d-flex">
        <div>
          <p>Azienda</p>
          <h2>Lavoro</h2>
          <span>Luogo</span>
        </div>
        <div className="ms-auto ">
          <Button className="main-buttons">
            <i className="bi bi-share "></i>
          </Button>
          <Button className="main-buttons">
            <i className="bi bi-three-dots"></i>
          </Button>
        </div>
      </div>
      <div className="d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>
        <p>In sede ∙ A tempo pieno</p>
      </div>
      <div className="d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
        </svg>
        <p>5-8 dipendenti</p>
      </div>
      <div className="d-flex">
        <i className="bi bi-list-check"></i>

        <p>Competenze: teamwork, coding e altre 4</p>
      </div>
      <div className="d-flex">
        <i className="bi bi-lightbulb"></i>
        <p>Vedi un confronto con altri 100 candidati. </p>
        <p>Prova Premium per 0 EUR</p>
      </div>
      <Button variant="info" className="rounded-pill me-3">
        <i className="bi bi-linkedin"></i> Candidatura semplice{" "}
      </Button>
      <Button variant="outline-info" className="rounded-pill">
        Salva
      </Button>
      <div>
        <h2>Informazioni sull'offerta di lavoro</h2>
        <p>Sede:</p>
        <p>Contratto;</p>
        <p>Ral:</p>
        <p>
          Il presente annuncio è rivolto ad entrambi i sessi, ai sensi delle
          leggi 903/77 e 125/91, e a persone di tutte le età e tutte le
          nazionalità, ai sensi dei decreti legislativi 215/03 e 216/03.
        </p>
      </div>
      <div className="border rounded p-2">
        <h4>Raggiungi i tuoi obiettivi più velocemente con Premium</h4>
        <p>
          Accedi a informazioni esclusive sui candidati, scopri le offerte di
          lavoro per cui rientreresti fra i migliori candidati, e tanto altro
        </p>
        <div className="d-flex ">
          <Image
            width="32"
            src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAhCAAAAJDBmNzFjMzUzLWFlNTAtNDRkZi1hNmZlLTljNjI0MzRlMmY4YQ.png"
            loading="lazy"
            height="32"
            alt=""
            id="ember7379"
            className="rounded-circle"
          />
          <Image
            width="32"
            src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAdKAAAAJDQ1YjQ5MTk5LTY2ZGUtNDI2MC05YmQ1LTE3YjE4ZWNlN2ZkYg.png"
            loading="lazy"
            height="32"
            alt=""
            id="ember7380"
            className="rounded-circle personMiniPic"
          />
          <Image
            width="32"
            src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAHzAAAAJGJiZDM1MGJkLTIzOTAtNDhmMS1hZTM5LTEzZDk2NWQ4ZDhjYQ.png"
            loading="lazy"
            height="32"
            alt=""
            id="ember7381"
            className="rounded-circle person2MiniPic"
          />

          <p className="m-0 ">Milioni di utenti usano Premium</p>
        </div>
        <div className="mt-2">
          <Button className="rounded-pill">Prova Premium per 0 EUR</Button>
          <p>
            Prova gratuita di 1 mese. Ti invieremo un promemoria 7 giorni prima
            della fine del periodo di prova.
          </p>
        </div>
      </div>
      <div className="border rounded mt-3 p-2">
        <h4>Informazioni sull'azienda</h4>
        <div className="d-flex">
          <div>
            <h4>nome azienda</h4>
            <p>185 folower</p>
          </div>
          <div className="ms-auto">
            <Button variant="outline-primary rounded-pill">+ segui</Button>
          </div>
        </div>
        <p>categoria</p>
        <p>info</p>
      </div>
    </Col>
  );
};
export default JobDetails;
