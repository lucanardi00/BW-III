import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileAction } from "../redux/actions";

function Profile() {
  const dispatch = useDispatch();
  const bio = useSelector((state) => state.getFetch.profile);
  useEffect(() => {
    dispatch(fetchUserProfileAction("me"));
  }, []);
  return (
    <Card className="profile">
      <Card.Header className="cardheader d-flex justify-content-between">
        <h5>Informazioni</h5>
        <i className="bi bi-pencil"></i>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={9}>
            <p>{bio.bio}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Profile;
