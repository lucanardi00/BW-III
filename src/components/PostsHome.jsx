import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";

const PostsHome = () => {
  const [allpost, setAllpost] = useState([]);
  const showAllPost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMWFlOTU1NjIxYTAwMTVjMTVmZDIiLCJpYXQiOjE3MTU2NzM4MzMsImV4cCI6MTcxNjg4MzQzM30.ri-G1Ow1lNp8ezUcHFJPFvJs5VRkCvBr3P-y85XpdAw",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("allpost", data);
      } else {
        console.log("error");
        throw new Error("Errore nellrecupero dei post 😥");
      }
    } catch (error) {
      console.log("Errore nell'aggiornamento dei post", error);
    }
    useEffect(() => {
      showAllPost();
    }, []);
  };
  return (
    <Col md={7}>
      <div className="bg-white containerPostHome mb-2">
        <div className="p-3 pb-2">
          <div className="d-flex">
            <img
              src="https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Immagine"
              className="rounded-circle img-fluid mouseHover me-2"
              style={{ width: "50px", height: "50px" }}
            />

            <div>
              <h5 className="m-0 name-HomePost">Luigione</h5>
              <p className="m-0 text-postHomep">Kebbabaro_frontend/kebab</p>
              <p className="mb-0 text-postHomep d-flex align-items-center">
                2s ∙ <i className="bi bi-globe-americas ms-1 mb-0"></i>
              </p>
            </div>
            <div className="ms-auto">
              <i className="bi bi-three-dots"></i>
              <i className="bi bi-x-lg ms-3"></i>
            </div>
          </div>
          <p className="m-0">Testo da scrivere</p>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="p-2 ">
          <div className="d-flex align-items-center border-bottom pb-2 px-2">
            <Button className="btnLike p-0 rounded-circle d-flex justify-content-center">
              <i className="bi bi-hand-thumbs-up btnLikeIcon"></i>
            </Button>
            <p className="m-0 textOtherPeeople ms-2">Nicole e altre 3persone</p>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3">
            <Button className="btnPostHome p-2 mt-1">
              <i className="bi bi-hand-thumbs-up me-1"></i>Consiglia
            </Button>
            <Button className="btnPostHome p-2 mt-1">
              <i className="bi bi-chat-dots me-1"></i>Commenta
            </Button>
            <Button className="btnPostHome p-2 mt-1">
              <i className="bi bi-arrow-left-right me-1"></i>Diffondi il post
            </Button>
            <Button className="btnPostHome p-2 mt-1">
              <i className="bi bi-send-fill me-1"></i>Invia
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PostsHome;
