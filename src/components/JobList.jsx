import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        const jobsArray = data.data;
        if (Array.isArray(jobsArray)) {
          setJobs(jobsArray.slice(0, 10));
        } else {
          console.error("Jobs array not found in data");
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
              <a href="#"><h6>{job.title}</h6></a>
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
        <Card>
          <Card.Header className="border-0 bg-transparent">
          <h4>Esplora con le raccolte di offerte di lavoro</h4>
          <p>Amplia la tua ricerca di lavoro con raccolte selezionate</p>
          </Card.Header>
    <div className="slider-container mb-4">
        <Slider {...settings} className="ms-4 me-4">
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAGUw8e-8bzxaRR22c5hRQ54vUA.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark " href="">
              All Others
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAE3nax2gpcxPTTGdIPhUjvp7dg.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark " href="">
                Data
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAFC1RDG63zMHQAm-bzdsGoeLSg.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark " href="">
              Product
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAH0xQAWsoLrvTlepMrZ6WJ8YOQ.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark " href="">
              Marketing
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAEmbTAVHpVUtRweT5C8Y-1s9xQ.png.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark" href="">
              Finance / Legal
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAHQ6aN5reK1uQ5KEGefSsKiCtA.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark " href="">
              Customer Service
              </a>
            </div>
          </div>
          <div className="p-2">
            <div className="containerCarousel p-2 pb-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-between ">
              </div>
              <img src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAFdF4uCQPxSGRHuCilSVk4O9BQ.png" alt="" className='mt-4' width={100} height={100} />
              <a className="ancorCaourusel mt-2 text-decoration-none text-dark" href="">
              Software Development
              </a>
            </div>
          </div>
        </Slider>
      </div>
      </Card>
    </Col>
  );
}

export default JobsList;
