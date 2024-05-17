import { useEffect } from "react";
import { Card, Image, ListGroup, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAction } from "../redux/actions";

const BarraProfiloHomepage = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.getFetch.profile);

  useEffect(() => {
    dispatch(fetchUserProfileAction("me"));
  }, []);
  return (
    <Col md={2}>
      <Card className="">
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/thumbnails/006/709/644/small/abstract-modern-tech-of-programming-code-screen-developer-free-photo.jpg"
          style={{ height: "50px" }}
        ></Card.Img>
        <Card.Body className="position-relative p-0">
          <div className="position-absolute top-0 start-50 translate-middle text-center ">
            <Image
              src={myProfile.image}
              roundedCircle
              fluid
              thumbnail
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <Card.Title className="mt-5 text-center px-3">
            <h4 className="text-black fs-5">
              {myProfile.name} {myProfile.surname}
            </h4>
          </Card.Title>
          <Card.Text className="fw-light text-secondary text-center">
            {myProfile.title}
          </Card.Text>
          <ListGroup className="list-group-flush d-none d-md-block">
            <ListGroup.Item className="text-secondary m-0 fw-small px-3 spanBarrProfile greyHover">
              Collegamenti
              <span className="d-block text-black fw-small ">
                Espandi la tua rete
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="fw-small px-3 spanBarrProfile greyHover">
              Raggiungi i tuoi obiettivi con Premium
              <span className="fw-light fw-small d-block  spanBarrProfilePremium">
                <i className="bi bi-square-half text-warning spanBarrProfilePremium"></i>{" "}
                Prova Premium per 0 EUR
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="fw-small px-3 d-flex align-items-center  ">
              <i className="bi bi-bookmark-fill text-secondary spanBarrProfile me-1"></i>{" "}
              I miei elementi
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default BarraProfiloHomepage;
