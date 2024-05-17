import { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const PostComment = (props) => {
  const user = useSelector((state) => state.getFetch.profile);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  console.log(props.postId);
  const singleComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMWFlOTU1NjIxYTAwMTVjMTVmZDIiLCJpYXQiOjE3MTU2NzM4MzMsImV4cCI6MTcxNjg4MzQzM30.ri-G1Ow1lNp8ezUcHFJPFvJs5VRkCvBr3P-y85XpdAw",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setComments(data);
        console.log(comments);
      } else {
        console.log("error");
        throw new Error("Errore nellrecupero dei commenti 😥");
      }
    } catch (error) {
      console.log("Errore nell'aggiornamento dei commenti", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      comment: `${comment}`,
      rate: "5",
      elementId: `${props.postId}`,
    };
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
          },
        }
      );
      if (response.ok) {
        newComment({
          comment: "",
          rate: "5",
          elementId: `${props.postId}`,
        });
      } else {
        throw new Error("Failed to fetch experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y",
          },
        }
      );
      if (response.ok) {
        setComments(
          comments.filter((comments) => comments._id !== myFilteredComments._id)
        );
        console.log("Post deleted");
      } else {
        console.log("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    singleComment();
  }, []);

  const myFilteredComments = comments.filter(
    (comments) => comments.elementId === props.postId
  );
  const commentId = myFilteredComments.map((elem) => elem._id);
  console.log(commentId);
  return (
    <div>
      <div className="d-flex gap-2 p-3">
        <Image
          src={user.image}
          alt="profile-photo"
          className="dropPic"
          roundedCircle
        />
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Aggiungi un commento..."
              className="rounded-pills"
              onChange={(e) => setComment(e.target.value)}
            />
          </Form>
        </div>
      </div>
      {myFilteredComments.map((com) => {
        return (
          <>
            <div className="d-flex gap-2">
              <Image
                src=""
                alt="profile-photo"
                className="dropPic"
                roundedCircle
              />
              <div className="bg-secondary rounded p-2">
                <div className="d-flex ">
                  <span>{com.author}</span>
                  <p className="m-0">• 3° e oltre</p>
                  <p className="ms-auto m-0">58 minuti fa</p>
                </div>
                <div>
                  <p> {com.comment} </p>
                </div>
                <Button onClick={() => deleteComment(com._id)} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default PostComment;
