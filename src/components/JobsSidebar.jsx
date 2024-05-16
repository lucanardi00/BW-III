import { Col, Card } from "react-bootstrap";

const JobsSidebar = () => {
  return (
    <>
      <Col>
        <Card className="mt-2">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
                <ul className="p-1 list-unstyled">
                    <div className="d-flex justify-content-between align-items-center px-2">
                        <li className="d-flex justify-content-start">
                        <i className="bi bi-bookmark-fill"></i>
                        <span className="ms-2 ">Le mie offerte di lavoro</span>
                        </li>
                        <div className="d-md-none">
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="d-flex bg-white fw-semibold border-0 text-secondary  align-items-center"
                          style={{ maxWidth: "fit-content" }}
                        >
                          Altro
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-2">
                            <FaListUl className="fs-5 me-3" />
                            <span className="fw-semibold">Preferenze</span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <LiaClipboardCheckSolid className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Valutazioni per le competenze
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <RiVideoFill className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Indicazioni per chi cerca lavoro
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <IoSettingsSharp className="fs-5 me-2" />
                            <span className="fw-semibold">
                              Impostazioni candidatura
                            </span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    </div>
                </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default JobsSidebar