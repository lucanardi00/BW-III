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
        <Container className="d-flex align-items-center justify-content-center">
          <div width="40%" className="d-flex search">
          <Navbar.Brand href="#">
          <li-icon type="app-linkedin-bug-color-icon" class="ivm-view-attr__icon  " size="large" role="img" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0A66C2" class="mercado-match" width="40" height="40" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg></li-icon>
          </Navbar.Brand>
          <MySearchBar />
          </div>
          <div width="60%" className="ms-5">
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
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-house-fill"></i><span><small>Home</small></span>
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center me-3"
              >
                <i className="bi bi-people-fill"></i><span><small>Rete</small></span>
              </Nav.Link>
              <Link to={"/jobs"}>
                <Nav.Link
                  href="#action2"
                  className="d-flex flex-column align-items-center me-3"
                >
                  <i className="bi bi-briefcase-fill"></i><span><small>Lavoro</small></span>
                </Nav.Link>
              </Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center me-3"
              >
                <i className="bi bi-chat-square-dots-fill"></i><span><small>Messaggistica</small></span>
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="d-flex flex-column align-items-center me-3"
              >
                <i className="bi bi-bell-fill"></i><span><small>Notifiche</small></span>
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
                      <Link to={"/profile/me"} className="text-decoration-none">
                        <p className="m-0 fs-6">
                          {me.name} {me.surname}
                        </p>
                        <span className="text-dark fw-lighter">{me.title}</span>
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
          </div>
        </Container>
      </Navbar>
      <MyOffcanvas show={show} handleClose={handleClose} />
    </>
  );
}

export default MyNavbar;
