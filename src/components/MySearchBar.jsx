import { Form } from "react-bootstrap";

const MySearchBar = () => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
};
export default MySearchBar;
