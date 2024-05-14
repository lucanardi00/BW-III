import { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAction } from "../redux/actions";
import "../profilePresentation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProfilePresentation = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.getFetch.profile);
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profile", image);
    updatePhotoProfileAction("6643806e3ff4a500155f4253", formData);
  };
  const updatePhotoProfileAction = async (userId, formData) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMWFlOTU1NjIxYTAwMTVjMTVmZDIiLCJpYXQiOjE3MTU2NzM4MzMsImV4cCI6MTcxNjg4MzQzM30.ri-G1Ow1lNp8ezUcHFJPFvJs5VRkCvBr3P-y85XpdAw",
          },
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("foto passata", data);
        dispatch(fetchUserProfileAction("me"));
      } else {
        console.log("error");
        throw new Error("Errore nell'aggiornamento della foto del profilo 😥");
      }
    } catch (error) {
      console.log("Errore nell'aggiornamento della foto del profilo", error);
    }
  };

  useEffect(() => {
    dispatch(fetchUserProfileAction("me"));
  }, [image]);

  console.log("mee", myProfile);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" containerProfilePresentation bg-white mb-2">
      <div className="containerBackgroundImage">
        <div
          className="position-relative"
          style={{ top: "70px", left: "30px" }}
          onClick={handleOpenModal}
        >
          <img
            src={myProfile.image}
            alt="Immagine"
            className="rounded-circle position-absolute mouseHover"
            style={{ width: "170px", height: "170px" }}
          />
        </div>
      </div>

      <div className="p-4">
        <div className="d-flex flex-row-reverse">
          <i className="bi bi-pen"></i>
        </div>
        <div className="d-flex align-items-center">
          <h1 className="m-0 me-2">{myProfile.name}</h1>
          <i className="bi bi-check-circle"></i>
        </div>
        <p className="m-0">{myProfile.title}</p>
        <div className="d-flex flex-column flex-md-row">
          <p className="m-0">{myProfile.area} ∙ </p>
          <a href="" className="aTagProfilePre">
            informazioni di contatto
          </a>
        </div>
        <a href="" className="d-block m-2 ms-0 aTagProfilePre">
          12 collegamenti
        </a>

        <div className="d-flex flex-column flex-sm-row">
          <Button className="px-1 px-3 me-2 mb-2 btn-rounded btn-roundedBlue">
            Disponibile per
          </Button>
          <Button className="px-1 px-3 me-2 mb-2 btn-rounded btn-roundedWhite">
            Aggiungi sezione del profilo
          </Button>
          <Button className="px-1 px-3 me-2 mb-2 btn-rounded btn-roundedGrey">
            Altro
          </Button>
        </div>
      </div>
      <div className="slider-container mb-4">
        <Slider {...settings} className="ms-4 me-4">
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 ">
              <div className="d-flex justify-content-between ">
                <h5 className="m-0">Disponibile a lavorare</h5>
                <i className="bi bi-pencil"></i>
              </div>
              <p className="m-0">Ruolo di sviluppatore web</p>
              <a className="ancorCaourusel" href="">
                Mostra Dettagli
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 ">
              <div className="d-flex justify-content-between ">
                <h5 className="m-0">Fai sapere cosa stai facendo seleziona</h5>
                <i className="bi bi-x-lg"></i>
              </div>
              <p className="m-0">e attrai candidati qualificati</p>
              <a className="ancorCaourusel" href="">
                Inizia
              </a>
            </div>
          </div>
        </Slider>
      </div>
      <Container>
        <Modal show={showModal} onHide={handleCloseModal}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title className="ms-4">Aggiungi foto</Modal.Title>
            </Modal.Header>
            <div className="containerInputFoto p-5 pb-2 text-center">
              <h5>La tua foto non deve essere per forza un pirmo piano!</h5>
              <h5>Ma qualcosa che ti rappresenti.</h5>
              <img
                src={myProfile.image}
                alt="Immagine"
                className="rounded-circle m-4"
                style={{ width: "120px", height: "120px" }}
              />
              <input
                type="file"
                name="profile"
                onChange={handleFileChange}
                className="m-4"
              />
              <p>
                Chiediamo agli utenti di LinkedIn di utilizzare le loro vere
                identità, quindi scatta o carica una tua foto
              </p>
            </div>
            <Modal.Footer className="d-flex justify-content-between">
              <Button className="btn-rounded" type="submit">
                Carica foto
              </Button>
              <Button
                className="btn-rounded"
                variant="secondary"
                onClick={handleCloseModal}
              >
                Chiudi
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </Container>
    </div>
  );
};

export default ProfilePresentation;
