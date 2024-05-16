import React from "react";
import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import JobRxSidebar from "./JobRightSidebar";
import JobsSidebar from "./JobsSidebar";

function JobPage() {
  return (
    <Container className="mainContainer">
      <MyNavbar  />
      <div className="container">
        <JobRxSidebar />
      </div>
    </Container>
  );
}

export default JobPage;
