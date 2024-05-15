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
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { userId } = useParams();
  console.log("IDPROFILO", userId);
  return (
    <>
      <Container className="mainContainer">
        <Row>
          <Col md={9}>
            <ProfilePresentation idprofile={userId} />

            <Analisi />
            <Risorse />
            <Profile />
            <Post />
            <Experiences idprofile={userId}/>
            <Studies />
            <Projects />
          </Col>
          <SideBar />
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default ProfilePage;
