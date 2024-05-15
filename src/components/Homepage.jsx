import { Container } from "react-bootstrap";
import Sidebar from "./RightSideBar";

const Homepage = () => {
  return( 
  <div>
    <Container className="mainContainer">
    <Sidebar />
    </Container>
  </div>
  )
};

export default Homepage;
