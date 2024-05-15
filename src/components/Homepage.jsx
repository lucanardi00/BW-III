import { Container, Row } from "react-bootstrap";
import Sidebar from "./RightSideBar";
import BarraProfiloHomepage from "./BarraProfiloHomepage";

const Homepage = () => {
  return (
    <div>
      <Container className="mainContainer">
        <Row>
          <BarraProfiloHomepage />
          <Sidebar />
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
