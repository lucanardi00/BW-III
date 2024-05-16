import { Button, Col, Image } from "react-bootstrap";

const JobDetails = () => {
  return (
    <Col md={7}>
      <div className="d-flex">
        <div>
          <p>Azienda</p>
          <h2>Lavoro</h2>
          <span>Luogo</span>
        </div>
        <div>
          <Button></Button>
          <Button></Button>
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
      <Button></Button>
      <Button></Button>
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
      <div className="border rounded">
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
          <Button>Prova Premium per 0 EUR</Button>
          <p>
            Prova gratuita di 1 mese. Ti invieremo un promemoria 7 giorni prima
            della fine del periodo di prova.
          </p>
        </div>
      </div>
      <div className="border rounded"></div>
    </Col>
  );
};
export default JobDetails;
