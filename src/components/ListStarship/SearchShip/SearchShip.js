import React from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";

const SearchShip = (props) => {
  const [searchShip, setSearchShip] = React.useState("");

  function handleChange(e) {
    setSearchShip(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchShip === "") {
      alert("Starship cannot be empty");
    } else {
      props.GetShip(searchShip);
      setSearchShip("");
      e.target.reset()
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={10}>
            <Input
              name="searchShip"
              onChange={handleChange}
              placeholder="Search your starship..."
            />
          </Col>
          <Col md={2}>
            <Button color="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchShip;
