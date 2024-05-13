import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAction } from "../redux/actions";
import "../profilePresentation.css";

const ProfilePresentation = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.getFetch.profile);

  useEffect(() => {
    dispatch(fetchUserProfileAction("me"));
  }, []);

  console.log("mee", myProfile);

  return (
    <div className=" containerProfilePresentation">
      <div className="containerBackgroundImage">
        <div
          className="position-relative"
          style={{ top: "70px", left: "30px" }}
        >
          <img
            src={myProfile.image}
            alt="Immagine"
            className="rounded-circle position-absolute"
            style={{ width: "150px", height: "150px" }}
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
        <div className="d-flex">
          <p className="m-0">{myProfile.area}</p>
        </div>
        <a href="" className="aTagProfilePre">
          informazioni di contatto
        </a>
        <a href="" className="d-block m-2 ms-0 aTagProfilePre">
          12 collegamenti
        </a>

        <div className="d-flex flex-column flex-sm-row">
          <Button className="me-2 mb-2 btn-rounded btn-roundedBlue">
            Disponibile per
          </Button>
          <Button className="me-2 mb-2 btn-rounded btn-roundedWhite">
            Aggiungi sezione del profilo
          </Button>
          <Button className="me-2 mb-2 btn-rounded btn-roundedGrey">
            Altro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePresentation;
