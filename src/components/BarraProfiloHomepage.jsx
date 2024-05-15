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
      <Card className="my-2">
        <Card.Img variant="top" src="" style={{ height: "50px" }}></Card.Img>
        <Card.Body className="position-relative text-center">
          <div className="position-absolute top-0 start-50 translate-middle">
            <Image
              src={myProfile.image}
              roundedCircle
              fluid
              thumbnail
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <Card.Title className="mt-5">
            <h4 className="text-black">
              {myProfile.name} {myProfile.surname}
            </h4>
          </Card.Title>
          <Card.Text className="fw-light text-secondary">
            {myProfile.title}
          </Card.Text>
          <ListGroup className="list-group-flush d-none d-md-block">
            <ListGroup.Item className="text-secondary m-0 fw-small">
              Collegamenti
              <span className="d-block text-black fw-small">
                Espandi la tua rete
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="fw-small">
              Raggiungi i tuoi obiettivi con Premium
              <span className="fw-light fw-small d-block fs-6">
                <i className="bi bi-square-half text-warning"></i> Prova Premium
                per 0 EUR
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="fw-small">
              <i className="bi bi-bookmark-fill text-secondary"></i> I miei
              elementi
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default BarraProfiloHomepage;
