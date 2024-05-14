import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { differenceInMonths } from "date-fns";
import Button from "react-bootstrap/Button";
import FormEsperienze from "./FormEsperienze";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences } from "../redux/actions/experienceActions";

function Experiences() {
  const dispatch = useDispatch();
  const allExperience = useSelector((state) => state.getExpereince.expereince);
  const myProfile = useSelector((state) => state.getFetch.profile);
  const isLoading = useSelector((state) => state.getExpereince.loading);
  const isError = useSelector((state) => state.getExpereince.error);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  console.log("allExp", allExperience);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const calculateMonthsWorked = (startDate, endDate) => {
    const monthsWorked = differenceInMonths(
      new Date(endDate),
      new Date(startDate)
    );

    return monthsWorked;
  };

  const userId = myProfile._id;

  useEffect(() => {
    dispatch(fetchExperiences(userId));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Errore nel recupero dei dati</div>;
  }

  return (
    <>
      <Card className="risorse">
        <Card.Header className="cardheader d-flex justify-content-between">
          <div>
            <h5>Esperienza</h5>
          </div>
          <div>
            <Button className="main-buttons" onClick={handleShow}>
              <i className="bi bi-plus-lg me-2"></i>
            </Button>
            <Button className="main-buttons">
              <i className="bi bi-pencil pe-0"></i>
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          {allExperience.map((experience, index) => (
            <div key={index}>
              <Row>
                <Col xs={2}>
                  <img
                    src={experience.image}
                    alt="IMG AZIENDA"
                    style={{ width: "100px", height: "100px" }}
                  />
                </Col>
                <Col xs={4}>
                  <h5>{experience.company}</h5>
                  <p>{experience.role}</p>
                  <p>{experience.description}</p>
                  <p className="text-secondary">
                    {formatDate(experience.startDate)} -{" "}
                    {formatDate(experience.endDate)} ∙{" "}
                    {calculateMonthsWorked(
                      experience.startDate,
                      experience.endDate
                    )}{" "}
                    mesi
                  </p>
                  <p className="text-secondary">{experience.location}</p>
                </Col>
              </Row>
              {index !== allExperience.length - 1 && <hr />}
            </div>
          ))}
        </Card.Body>
      </Card>
      <FormEsperienze modalShow={modalShow} handleClose={handleClose} />
    </>
  );
}

export default Experiences;
