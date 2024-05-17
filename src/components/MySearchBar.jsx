import { useState } from "react";
import { Form, Button } from "react-bootstrap";
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
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchWork}
        onChange={handleChange}
      />
    </Form>
  );
};
export default MySearchBar;
