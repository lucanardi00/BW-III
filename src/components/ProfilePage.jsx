import { Col, Container, Row } from "react-bootstrap";
import ProfilePresentation from "./ProfilePresentation";
import SideBar from "./SideBar";

const ProfilePage = () => {
  return (
    <>
      <Container className="mainContainer">
        <Row>
          <Col md={9}>
            <ProfilePresentation />
          </Col>
          <SideBar />
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
