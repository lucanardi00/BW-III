import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MySearchBar = () => {
  const [searchWork, setSearchWork] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchWork(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/jobs/search/${searchWork}`);
  };

  return (
    <Form className="d-flex" style={{ height: "35px" }} onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="fluid"
        aria-label="Search"
        value={searchWork}
        onChange={handleChange}
      />
    </Form>
  );
};
export default MySearchBar;
