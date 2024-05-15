import { Container, Row } from "react-bootstrap";
import Sidebar from "./RightSideBar";
import BarraProfiloHomepage from "./BarraProfiloHomepage";
import PostsHome from "./PostsHome";

const Homepage = () => {
  return (
    <div>
      <Container className="mainContainer">
        <Row>
          <BarraProfiloHomepage />
          <PostsHome />
          <Sidebar />
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
