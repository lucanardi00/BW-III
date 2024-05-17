import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import JobRxSidebar from "./JobRightSidebar";
import JobsSidebar from "./JobsSidebar";
import JobsMain from "./JobsMain";

function JobPage() {
  return (
    <Container className="mainContainer">
      <MyNavbar />
      <div className="container">
        <JobsSidebar/>
        <JobsMain/>
        <JobRxSidebar />
      </div>
    </Container>
  );
}

export default JobPage;
