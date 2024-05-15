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
      <div className="d-flex gap-2">
        <Image
          src={user.image}
          alt="profile-photo"
          className="dropPic"
          roundedCircle
        />
        <Button onClick={handleShow}>Avvia un post</Button>
      </div>
      <div>
        <Button className="postBtn">
          <i className="bi bi-card-image"> Contenuti multimediali</i>
        </Button>
        <Button className="postBtn">
          <i className="bi bi-calendar4-event"> Evento</i>
        </Button>
        <Button className="postBtn">
          <i className="bi bi-journal-text"> Scrivi un articolo</i>
        </Button>
      </div>
      <FormPost modalShow={modalShow} handleClose={handleClose} />
    </>
  );
};
export default HomePost;
