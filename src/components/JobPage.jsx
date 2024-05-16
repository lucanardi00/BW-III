import React from "react";
import MyNavbar from "./MyNavbar";
import { Container } from "react-bootstrap";
import JobRxSidebar from "./JobRightSidebar";
import JobsList from "./JobList";

function JobPage() {
  return (
    <Container className="mainContainer">
      <MyNavbar  />
      <div className="container">
        <JobRxSidebar />
        <JobsList />
      </div>
    </Container>
  );
}

export default JobPage;