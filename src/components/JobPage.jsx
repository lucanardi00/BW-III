import MyNavbar from "./MyNavbar";
import { Container, Row } from "react-bootstrap";
import JobRxSidebar from "./JobRightSidebar";
import JobsList from "./JobList";
import JobsSidebar from "./JobsSidebar";


function JobPage() {
  return (
    <Container className="mainContainer">
      <Row>
        <JobsSidebar />
        <JobsList />
        <JobRxSidebar />
      </Row>
    </Container>
  );
}

export default JobPage;
