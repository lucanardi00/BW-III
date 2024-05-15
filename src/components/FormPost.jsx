import { useState } from "react";
import { Form, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function FormPost(props) {
  const user = useSelector((state) => state.getFetch.profile);
  const [newPost, setNewPost] = useState({
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
          },
        }
      );
      if (response.ok) {
        setNewPost({
          text: "",
        });
      } else {
        throw new Error("Failed to fetch experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFieldChange = (propertyName, propertyValue) => {
    setNewPost({ ...newPost, [propertyName]: propertyValue });
  };

  return (
    <Modal
      show={props.modalShow}
      onHide={props.handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <Button className="d-flex gap-3 postProfileBtn">
              <Image
                src={user.image}
                alt="profile-photo"
                className="dropPic"
                roundedCircle
              />
              <div>
                <h6 className="m-0">
                  {user.name} {user.surname}
                </h6>
                <p>Pubblica: Chiunque</p>
              </div>
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="pb-0">
          <Form.Group>
            <Form.Control
              required
              as="textarea"
              rows={12}
              className=""
              placeholder="Di cosa vorresti parlare?"
              onChange={(e) => handleFieldChange("text", e.target.value)}
            />
            <Button className="postBtn">
              <i className="bi bi-card-image"></i>
            </Button>
            <Button className="postBtn">
              <i className="bi bi-calendar4-event"></i>
            </Button>
            <Button className="postBtn">
              <i className="bi bi-emoji-laughing"></i>
            </Button>
            <Button className="postBtn">
              <i className="bi bi-plus-lg"></i>
            </Button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="rounded-pill" variant="info" type="submit">
            Pubblica
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FormPost;
