import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImmagineUtentePostHomepage = ({ userId }) => {
  const [utente, impostaUtente] = useState(null);
  console.log(utente);

  useEffect(() => {
    const fetchImmagineUtente = async () => {
      try {
        const risposta = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMWFlOTU1NjIxYTAwMTVjMTVmZDIiLCJpYXQiOjE3MTU2NzM4MzMsImV4cCI6MTcxNjg4MzQzM30.ri-G1Ow1lNp8ezUcHFJPFvJs5VRkCvBr3P-y85XpdAw",
            },
          }
        );
        if (risposta.ok) {
          const dati = await risposta.json();
          impostaUtente(dati);
        } else {
          console.log("errore");
          throw new Error("Errore nel recupero della foto 😥");
        }
      } catch (errore) {
        console.log("Errore nell'aggiornamento della foto", errore);
      }
    };

    fetchImmagineUtente();
  }, [userId]);

  return (
    <>
      {utente ? (
        <div className="d-flex align-items-center">
          <Link to={`/profile/${userId}`}>
            <img
              src={utente.image}
              alt="Immagine"
              className="rounded-circle img-fluid mouseHover me-2"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <div>
            <h5 className="m-0 name-HomePost">{utente.name}</h5>
            <p className="m-0 text-postHomep">{utente.title}</p>
            <p className="mb-0 text-postHomep d-flex align-items-center">
              2s ∙ <i className="bi bi-globe-americas ms-1 mb-0"></i>
            </p>
          </div>
        </div>
      ) : (
        <div>Caricamento...</div>
      )}
    </>
  );
};

ImmagineUtentePostHomepage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ImmagineUtentePostHomepage;
