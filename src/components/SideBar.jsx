import {
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  Button,
  Image,
} from "react-bootstrap";

const SideBar = () => {
  const ProfilesURL = "https://striveschool-api.herokuapp.com/api/profile";
  const myKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y";

  return (
    <Col md={3}>
      <Card>
        <ListGroup>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Lingua del Profilo</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </span>
              <p>Italiano</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <span>Public Profile & URL</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                <p>www.linkedin.com/in/matteo-moscardini-1a7735304</p>
              </span>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Header>Altri Profili simili</Card.Header>
        <ListGroup>
          <ListGroup.Item>
            <div className="d-flex flex-row justify-content-start">
              <span>
                <Image src={""} roundedCircle />
              </span>
              <div className="d-flex flex-column justify-content-end">
                <div className="d-flex flex-row"></div>
                <p> </p>
                <div className="d-flex justify-content-center">
                  <Button>Collegati</Button>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Header>
          <span>Persone che potresti conoscere</span>
          <span>Dalla tua scuola o la tua università</span>
        </Card.Header>
        <ListGroup>
          <ListGroup.Item>
            <div className="d-flex flex-row justify-content-start align-items-baseline">
              <span>
                {" "}
                <Image src={""} roundedCircle />
              </span>
              <div className="d-flex flex-column justify-content-end">
                <div className="d-flex flex-row">
                  <p></p>
                  <div className="d-flex align-items-center justify-content-center mt-2 text-center">
                    <Button>Collegati</Button>
                  </div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};
export default SideBar;
