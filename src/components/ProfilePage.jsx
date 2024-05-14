import { Col, Container, Row } from "react-bootstrap";
import ProfilePresentation from "./ProfilePresentation";
import SideBar from "./SideBar";
import Analisi from "./Analisi";
import Experiences from "./Esperienze";
import Studies from "./Formazione";
import Profile from "./Informazioni";
import Post from "./Post";
import Projects from "./Progetti";
import Risorse from "./Risorse";

const ProfilePage = () => {
  return (
    <>
      <Container className="mainContainer">
        <Row>
          <Col md={9}>
            <ProfilePresentation />

            <Analisi />
            <Risorse />
            <Profile />
            <Post />
            <Experiences />
            <Studies />
            <Projects />
          </Col>
          <SideBar />
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
