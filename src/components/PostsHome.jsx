import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import ImageUserPostHomepage from "./ImageUserPostHomepage";
import HomePost from "./HomePost";

const PostsHome = () => {
  const [allPosts, setAllPosts] = useState([]);
  console.log(allPosts);
  //   const randomImagePost = [
  //     "https://plus.unsplash.com/premium_photo-1714229505201-072ef1c6edcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://plus.unsplash.com/premium_photo-1671430149410-0f3d554127a2?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://plus.unsplash.com/premium_photo-1669144690665-17dde1269f68?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1715428019327-fa9363fba1ef?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1714715362537-4aa538a6f0ab?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://plus.unsplash.com/premium_photo-1666277012792-08955a43e51c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1715090039874-cf28b78a9f08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1715604723666-866e18a5d257?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ];

  useEffect(() => {
    const fetchPosts = async () => {
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
          setAllPosts(data);
        } else {
          console.log("error");
          throw new Error("Errore nell recupero dei post 😥");
        }
      } catch (error) {
        console.log("Errore nell'aggiornamento dei post", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <Col md={7}>
      <HomePost />
      {allPosts.slice(50, 60).map((post, index) => (
        <div className="bg-white containerPostHome mb-2" key={index}>
          <div className="p-2 px-3 pb-2">
            <div className="d-flex">
              <ImageUserPostHomepage userId={post.user._id} />

              <div className="ms-auto">
                <i className="bi bi-three-dots"></i>
                <i className="bi bi-x-lg ms-3"></i>
              </div>
            </div>
            <p className="m-0">{post.text}</p>
          </div>
          <div className="text-center">
            <img src={post.image} alt="" className="img-fluid" />
          </div>
          <div className="p-2 ">
            <div className="d-flex align-items-center border-bottom pb-2 px-2">
              <Button className="btnLike p-0 rounded-circle d-flex justify-content-center">
                <i className="bi bi-hand-thumbs-up btnLikeIcon"></i>
              </Button>
              <p className="m-0 textOtherPeeople ms-2">
                Nicole e altre 3persone
              </p>
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
      ))}
    </Col>
  );
};

export default PostsHome;
