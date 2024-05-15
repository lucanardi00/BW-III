import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormPost from "./FormPost";
import { useSelector } from "react-redux";

function Post() {
  const user = useSelector((state) => state.getFetch.profile);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleCloseCreatePostModal = () => setShowCreatePostModal(false);
  const handleShowCreatePostModal = () => setShowCreatePostModal(true);

  const handleCloseEditPostModal = () => {
    setShowEditPostModal(false);
    setEditPost(null);
    setUpdatedText("");
  };

  const handleShowEditPostModal = () => setShowEditPostModal(true);

  const me = user._id;


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


  const deletePost = async (postId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
          },
        }
      );
      if (response.ok) {
        setMyPost(myPost.filter((post) => post._id !== postId));
        console.log("Post deleted");
      } else {
        console.log("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const updatePost = async (postId, updatedData) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (response.ok) {
        console.log("Post aggiornato!");
        showMyPost();
        handleCloseEditPostModal();
      } else {
        console.log("Errore nella moidifica");
      }
    } catch (error) {
      console.error("Errore nella modifica", error);
    }
  };

  const handleModify = (post) => {
    setEditPost(post);
    setUpdatedText(post.text);
    handleShowEditPostModal();
  };

  const handleUpdate = () => {
    if (editPost) {
      updatePost(editPost._id, { text: updatedText });
    }
  };

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
              onClick={handleShowCreatePostModal}
              className="me-2 rounded bg-transparent text-primary border-primary"
            >
              Crea un Post
            </button>
            <i className="bi bi-pencil"></i>
          </div>
        </Card.Header>
        <Card.Body>
        {myFilteredPosts.map((me, index) => {
  return (
    <React.Fragment key={index}>
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
        <Col>
          <i
            className="bi bi-trash3 trash"
            onClick={() => deletePost(me._id)}
          ></i>
          <li-icon
            aria-hidden="true"
            type="edit"
            class="v-align-bottom text-secondary"
            size="small"
            onClick={() => handleModify(me)}
            style={{ cursor: "pointer" }}
          >
            <i class="bi bi-pencil ms-4"></i>
          </li-icon>
        </Col>
      </Row>
    </React.Fragment>
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
      <FormPost modalShow={showCreatePostModal} handleClose={handleCloseCreatePostModal} />
      {editPost && (
        <Modal show={showEditPostModal} onHide={handleCloseEditPostModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditPostModal}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Applica Cambiamenti
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Post;
