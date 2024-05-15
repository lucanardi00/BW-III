import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormPost from "./FormPost";
import { useSelector } from "react-redux";

function Post() {
  const user = useSelector((state) => state.getFetch.profile);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const me = user._id;
  console.log(me, "ilmiopost");

  const [myPost, setMyPost] = useState([]);
  const showMyPost = async () => {
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
        setMyPost(data);
        console.log(myPost);
      } else {
        console.log("error");
        throw new Error("Errore nellrecupero dei post 😥");
      }
    } catch (error) {
      console.log("Errore nell'aggiornamento dei post", error);
    }
  };

  const myFilteredPosts = myPost.filter((post) => post.user._id === me);
  console.log(myFilteredPosts);

  useEffect(() => {
    showMyPost();
  }, []);

  return (
    <>
      <Card className="risorse">
        <Card.Header className="cardheader d-flex justify-content-between">
          <div>
            <h5>Attività</h5>
            <li-icon
              aria-hidden="true"
              type="visibility"
              class="v-align-bottom text-secondary"
              size="small"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </li-icon>
            <a href="#">
              <h6 className="text-secondary fw-light d-inline"> ? follower</h6>
            </a>
          </div>
          <div>
            <button
              onClick={handleShow}
              className="me-2 rounded bg-transparent text-primary border-primary"
            >
              Crea un Post
            </button>
            <i className="bi bi-pencil"></i>
          </div>
        </Card.Header>
        <Card.Body>
          {myFilteredPosts.map((me) => {
            return (
              <>
                <Row>
                  <Col>
                    <h6 className="text-muted fw-light">
                      {me.username} ha pubblicato questo post ∙ {me.createdAt}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p>POST IMG</p>
                  </Col>
                  <Col xs={4}>
                    <p>{me.text}</p>
                  </Col>
                </Row>
              </>
            );
          })}
        </Card.Body>
        <Card.Footer className="cardfooter">
          <a
            href="#"
            className="text-center d-block text-decoration-none text-dark"
          >
            Mostra tutte le risorse (?) →
          </a>
        </Card.Footer>
      </Card>
      <FormPost modalShow={modalShow} handleClose={handleClose} />
    </>
  );
}

export default Post;
