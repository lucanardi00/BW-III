import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://strive-benchmark.herokuapp.com/api/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data); // Log the data received from the API
        const jobsArray = data.data; // Assuming the array is inside a property called "jobs"
        if (Array.isArray(jobsArray)) {
          setJobs(jobsArray.slice(0, 10)); // Extract the first 10 jobs if available
        } else {
          console.error("Jobs array not found in data");
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <Col md={6}>
    <Card className="risorse">
      <Card.Header className="cardheader">
        <h5>Sulla base del tuo profilo e della tua cronologia delle ricerche</h5>
        <h6 className="text-secondary fw-light d-inline">Sulla base del tuo profilo e della tua cronologia delle ricerche</h6>
      </Card.Header>
      <Card.Body>
        {jobs.map((job) => (
          <Row key={job._id} className="mb-3 align-items-center border-bottom">
            <Col>
              <h6>{job.title}</h6>
              <p className="ms-3">{job.company_name}</p>
              <p className="ms-3">Candidate Location: {job.candidate_required_location}</p>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="cardfooter">
        <a href="#" className="text-center d-block text-decoration-none text-dark">
          Mostra tutto →
        </a>
      </Card.Footer>
    </Card>
    </Col>
  );
}

export default JobsList;
