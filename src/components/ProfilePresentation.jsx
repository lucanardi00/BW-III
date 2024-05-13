import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAction } from "../redux/actions";
import "../profilePresentation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProfilePresentation = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.getFetch.profile);

  useEffect(() => {
    dispatch(fetchUserProfileAction("me"));
  }, []);

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
    <div className="m-4 containerProfilePresentation">
      <div className="containerBackgroundImage">
        <div
          className="position-relative"
          style={{ top: "70px", left: "30px" }}
        >
          <img
            src={myProfile.image}
            alt="Immagine"
            className="rounded-circle position-absolute"
            style={{ width: "170px", height: "170px" }}
          />
        </div>
      </div>

      <div className="p-4">
        <div className="d-flex flex-row-reverse">
          <i class="bi bi-pen"></i>
        </div>
        <div className="d-flex align-items-center">
          <h1 className="m-0 me-2">{myProfile.name}</h1>
          <i class="bi bi-check-circle"></i>
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
                <i class="bi bi-pencil"></i>
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
                <i class="bi bi-x-lg"></i>
              </div>
              <p className="m-0">e attrai candidati qualificati</p>
              <a className="ancorCaourusel" href="">
                Inizia
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProfilePresentation;
