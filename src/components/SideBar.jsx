import { Col, Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProfileAction,
  fetchUserProfileAction,
} from "../redux/actions";
import { useEffect } from "react";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const allProfileData = useSelector((state) =>
    state.getFetch.allProfile.slice(0, 10)
  );
  const similarProfileData = useSelector((state) =>
    state.getFetch.allProfile.slice(10, 20)
  );

  const changeProfile = (personId) => {
    dispatch(fetchUserProfileAction(personId));
    dispatch(fetchExperiences(personId));
  };

  useEffect(() => {
    dispatch(fetchAllProfileAction());
  }, []);
  console.log("allprofile", allProfileData);
  return (
    <Col md={3}>
      <Card className="mb-2">
        <ListGroup>
          <ListGroup.Item className="p-3">
            <div className="d-flex justify-content-between">
              <span>Lingua del Profilo</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-0">Italiano</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <div className="d-flex justify-content-between">
              <span>Public Profile & URL</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </span>
            </div>
            <div>
              <p className="mb-0">
                www.linkedin.com/in/matteo-moscardini-1a7735304
              </p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Header className="bg-white color-black">
          <h5 className="mb-0">Persone che potresti conoscere</h5>
          <h5> dalla tua scuola o la tua università</h5>
        </Card.Header>
        {similarProfileData.map((person, index) => (
          <div key={index} className="d-lg-flex p-3 ">
            <div>
            <Link to={`/profile/:userId/${person._id}`}>
              <img
                src={person.image}
                alt={person.name}
                className="rounded-circle me-2"
                style={{ width: "45px", height: "45px" }}
                />
                </Link>
            </div>
            <div>
              <h5 className="m-0">{person.name}</h5>
              <p className="m-0">{person.title}</p>
              <Button className="d-flex align-items-center buttonColleg px-3 py-1 mt-1">
                <i className="bi bi-person-plus"></i>Collegati
              </Button>
            </div>
          </div>
        ))}
      </Card>
      <div>
        <Card>
          <Card.Header className="bg-white color-black">
            <h5 className="mb-0">Persone che potresti conoscere</h5>
            <h5> dalla tua scuola o la tua università</h5>
          </Card.Header>
          {allProfileData.map((person, index) => (
            <div key={index} className="d-lg-flex p-3 ">
              <div>
                <img
                  onClick={() => changeProfile(person._id)}
                  src={person.image}
                  alt={person.name}
                  className="rounded-circle me-2"
                  style={{ width: "45px", height: "45px" }}
                />
              </div>
              <div>
                <h5 className="m-0">{person.name}</h5>
                <p className="m-0">{person.title}</p>
                <Button className="d-flex align-items-center buttonColleg px-3 py-1 mt-1">
                  <i className="bi bi-person-plus"></i>Collegati
                </Button>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Col>
  );
};
export default SideBar;
