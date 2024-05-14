import { useEffect, useState } from "react";
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
  const [image, setImage] = useState("");
  console.log("immagine", image);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("profile", image);
    updatePhotoProfileAction("66431ae955621a0015c15fd2", formData);
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
    <div className=" containerProfilePresentation bg-white mb-2">
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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" name="profile" onChange={handleFileChange} />
          <button type="submit">Upload Photo</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePresentation;
