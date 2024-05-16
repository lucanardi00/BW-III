import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const JobSearch = () => {
  const params = useParams();
  const [allWork, setAllWork] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <Container>
      <Col
        className="col-5 bg-white"
        style={{ marginTop: "100px", overflowY: "auto" }}
      >
        <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
          {isLoading ? (
            <p>Attendi il caricamento dei dati...</p>
          ) : (
            allWork.data.map((work, index) => (
              <div className="d-flex p-2" key={index}>
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
    </Container>
  );
};

export default JobSearch;
