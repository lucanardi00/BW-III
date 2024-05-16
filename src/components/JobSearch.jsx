import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import JobDetails from "./JobDetails";

const JobSearch = () => {
  const params = useParams();
  const [allWork, setAllWork] = useState([]);
  const [detailsWork, setDetailsWork] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();
  const work = params.searchWork;
  const randomImagePost = [
    "https://assets.materialup.com/uploads/161b53b4-553d-4753-91f9-eed2daa424f2/preview.png",
    "https://cdn.dribbble.com/users/401103/screenshots/6143465/dribble07.jpg",
    "https://images-platform.99static.com//M5AEUhiOwxJ993lo8UM7hkXiJr8=/500x360:1000x860/fit-in/500x500/99designs-contests-attachments/101/101005/attachment_101005040",
    "https://st.depositphotos.com/53993084/58979/v/450/depositphotos_589794618-stock-illustration-creative-letter-logo-design-letter.jpg",
    "https://www.zilliondesigns.com/blog/wp-content/uploads/Advertising-Agency-Logo-9.jpg",
    "https://t4.ftcdn.net/jpg/04/16/88/83/360_F_416888318_DCDiepJmsRw0qMQ6zhfIfC1dvlPnlxno.jpg",
    "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2001/05/esa_logo/9173490-7-eng-GB/ESA_Logo_pillars.jpg",
  ];

  const handleNavigate = (category) => {
    navigate(`/jobs/category/${category}`);
  };

  const handleJobClick = (job, index) => {
    setDetailsWork(job);
    setClickedIndex(index);
  };

  useEffect(() => {
    const fetchAllSearchWork = async () => {
      try {
        const response = await fetch(
          `https://strive-benchmark.herokuapp.com/api/jobs?search=${work}`
        );
        if (response.ok) {
          const data = await response.json();
          setAllWork(data);
          setIsLoading(false);
        } else {
          console.log("error");
          throw new Error("Errore nella ricerca dei lavori 😥");
        }
      } catch (error) {
        console.log(
          "Errore nell'aggiornamento della ricerca dei lavori",
          error
        );
      }
    };
    fetchAllSearchWork();
  }, [params]);

  return (
    <Container style={{ marginTop: "100px" }}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categorie
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ height: "100px", overflowY: "auto" }}>
          <Dropdown.Item onClick={() => handleNavigate("writing")}>
            Scrittore
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Data")}>
            Data
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Product")}>
            Product
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Marketing")}>
            Marketing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Finance / Legal")}>
            Finance / Legal
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Customer Service")}>
            Customer Service
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleNavigate("Software Development")}>
            Software Development
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        <Col className="col-5 bg-white" style={{ marginTop: "", overflowY: "auto" }}>
          <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
            {isLoading ? (
              <p>Attendi il caricamento dei dati...</p>
            ) : (
              allWork.data.map((work, index) => (
                <div
                  className={`d-flex p-2 ${clickedIndex === index ? 'bg-secondary-subtle' : ''}`}
                  key={index}
                  onClick={() => handleJobClick(work, index)}
                >
                  <div className="me-2">
                    <img
                      src={
                        randomImagePost[
                          Math.floor(Math.random() * randomImagePost.length)
                        ]
                      }
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="container-fluid border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="m-0">{work.title}</h5>
                      <i className="bi bi-x"></i>
                    </div>
                    <p className="m-0">{work.company_name}</p>
                    <p className="mb-1">
                      Luogo: {work.candidate_required_location}
                    </p>
                    <p className="d-flex mb-0 mt-2">
                      {new Date(work.publication_date).toLocaleDateString()} ∙
                      <i className="bi bi-linkedin logoLinkedinSearchWork d-flex align-items-center">
                        <p className="m-0 ms-1">candidatura semplice</p>
                      </i>
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Col>
        <JobDetails />
      </Row>
    </Container>
  );
};

export default JobSearch;
