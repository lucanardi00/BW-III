import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import JobRxSidebar from "./JobRightSidebar";
import JobsList from "./JobList";
import JobsSidebar from "./JobsSidebar";

function JobPage() {
  return (
    <Container className="mainContainer">
      <MyNavbar />

        <JobsSidebar/>
        <JobsList />
        <JobRxSidebar />

    </Container>
  );
}

export default JobPage;
