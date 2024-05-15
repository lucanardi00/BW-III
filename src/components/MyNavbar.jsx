import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import MySearchBar from "./MySearchBar";
import { Button, Dropdown, DropdownMenu, Image } from "react-bootstrap";
import { fetchUserProfileAction } from "../redux/actions";
import MyOffcanvas from "./MyOffcanvas";
import { Link } from "react-router-dom";

function MyNavbar() {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.getFetch.profile);
  console.log(me);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchUserProfileAction());
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#">
            <i className="bi bi-linkedin"></i>
          </Navbar.Brand>
          <MySearchBar />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to={"/"}>
                <Nav.Link
                  href="#action1"
                  className="d-flex flex-column align-items-center"
                >
                  <i className="bi bi-house-fill"></i>Home
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center"
              >
                <i className="bi bi-people-fill"></i>Rete
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center"
              >
                <i className="bi bi-briefcase-fill"></i> Lavoro
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center"
              >
                <i className="bi bi-chat-square-dots-fill"></i> Messaggistica
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center"
              >
                <i className="bi bi-bell-fill"></i> Notifiche
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  className="d-flex flex-column align-items-center"
                  id="dropdown-basic"
                >
                  <Image
                    src={me.image}
                    alt="profile-photo"
                    className="miniPic"
                    roundedCircle
                  />
                  Tu
                </Dropdown.Toggle>
                <DropdownMenu>
                  <NavDropdown.Item href="#action3" className="d-flex gap-3">
                    <Image
                      src={me.image}
                      alt="profile-photo"
                      className="dropPic"
                      roundedCircle
                    />
                    <div>
                      <Link to={"/profile/me"}>
                        <p className="m-0">
                          {me.name} {me.surname}
                        </p>
                        <span>--</span>
                      </Link>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action4"
                    className="text-align-center"
                  >
                    {" "}
                    <Link to={`/profile/${me._id}`}>
                      <Button variant="outline-info" className="p-0 w-100">
                        Visualizza profilo
                      </Button>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6>Account</h6>
                  <NavDropdown.Item href="#action5">
                    Prova premium per 0EUR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Impostazioni e privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Guida</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Lingua</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6>Gestisci</h6>
                  <NavDropdown.Item href="#action5">
                    Post e attività
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Acoount per la pubblicazione di offerte
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Esci</NavDropdown.Item>
                </DropdownMenu>
              </Dropdown>
              <div className="border-start">
                <Dropdown>
                  <Dropdown.Toggle
                    onClick={handleShow}
                    className="d-flex flex-column align-items-center"
                    id="dropdown-basic"
                  >
                    <i className="bi bi-grid-3x3-gap-fill"></i> Per le aziende
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
              <Nav.Link className="d-flex flex-column align-items-center premium">
                Da non perdere: <span> Premium per 0EUR</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MyOffcanvas show={show} handleClose={handleClose} />
    </>
  );
}

export default MyNavbar;
