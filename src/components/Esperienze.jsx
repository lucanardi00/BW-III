import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { differenceInMonths } from "date-fns";
import Button from "react-bootstrap/Button";
import FormEsperienze from "./FormEsperienze"

function Experiences({ userId }) {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const calculateMonthsWorked = (startDate, endDate) => {
    const monthsWorked = differenceInMonths(new Date(endDate), new Date(startDate));
    return monthsWorked;
  };

  userId = "6553f136dd99ef0019a09496";

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzAxZTE2N2U1MzAwMTVmYTY5NzciLCJpYXQiOjE3MTU1ODUwNTUsImV4cCI6MTcxNjc5NDY1NX0.oMCLB4PAEReTiWGPS97aY6U0owrc4rQySh7kmp9695Y`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }
        const data = await response.json();
        setExperiences(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchExperiences()
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
        {experiences.map((experience, index) => (
          <div key={index}>
            <Row>
              <Col xs={2}>
                <img src={experience.image} alt="IMG AZIENDA" style={{ width: "100px", height: "100px" }} />
              </Col>
              <Col xs={4}>
                <h5>{experience.company}</h5>
                <p>{experience.role}</p>
                <p>{experience.description}</p>
                <p className="text-secondary">
                  {formatDate(experience.startDate)} - {formatDate(experience.endDate)} ∙{" "}
                  {calculateMonthsWorked(experience.startDate, experience.endDate)} mesi
                </p>
                <p className="text-secondary">{experience.location}</p>
              </Col>
            </Row>
            {index !== experiences.length - 1 && <hr />}
          </div>
        ))}
      </Card.Body>
    </Card>
    <FormEsperienze modalShow={modalShow} handleClose={handleClose} />
    </>
  );
}

export default Experiences;
