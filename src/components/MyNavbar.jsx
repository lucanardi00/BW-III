import { useEffect } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import MySearchBar from "./MySearchBar";
import { Button, Dropdown, DropdownMenu, Image } from "react-bootstrap";
import { fetchUserProfileAction } from "../redux/actions";

function MyNavbar(props) {
  const dispatch = useDispatch();
  const me = useSelector((state) => state.getFetch.profile);
  console.log(me);

  useEffect(() => {
    dispatch(fetchUserProfileAction(props.query));
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
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
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center"
            >
              <i className="bi bi-house-fill"></i>Home
            </Nav.Link>
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
                    <p className="m-0">
                      {me.name} {me.surname}
                    </p>
                    <span>--</span>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="text-align-center">
                  <Button variant="outline-info" className="p-0 w-100">
                    Visualizza profilo
                  </Button>
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
                  className="d-flex flex-column align-items-center"
                  id="dropdown-basic"
                >
                  <i className="bi bi-grid-3x3-gap-fill"></i> Per le aziende
                </Dropdown.Toggle>
                <DropdownMenu>
                  <NavDropdown.Item href="#action3">Tu</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </DropdownMenu>
              </Dropdown>
            </div>
            <Nav.Link className="d-flex flex-column align-items-center premium">
              Da non perdere: <span> Premium per 0EUR</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
