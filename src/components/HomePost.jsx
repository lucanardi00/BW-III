import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormPost from "./FormPost";

const HomePost = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const user = useSelector((state) => state.getFetch.profile);

  return (
    <>
      <div className="bg-white containerPostHome mb-2">
        <div className="d-flex gap-2 p-3">
          <Image
            src={user.image}
            alt="profile-photo"
            className="dropPic"
            roundedCircle
          />
          <Button
            onClick={handleShow}
            className="w-100 rounded-pill postHomeBtn"
          >
            Avvia un post
          </Button>
        </div>
        <div className="p-3 pt-0 d-flex">
          <Button className="postBtn d-flex align-items-center gap-2">
            <i className="bi bi-card-image"> </i>
            <p className="m-0">Contenuti multimediali </p>
          </Button>
          <Button className="postBtn d-flex align-items-center gap-2">
            <i className="bi bi-calendar4-event"></i>
            <p className="m-0">Evento</p>
          </Button>
          <Button className="postBtn d-flex align-items-center gap-2">
            <i className="bi bi-journal-text"></i>
            <p className="m-0">Scrivi un articolo </p>
          </Button>
        </div>
      </div>
      <FormPost modalShow={modalShow} handleClose={handleClose} />
    </>
  );
};
export default HomePost;
