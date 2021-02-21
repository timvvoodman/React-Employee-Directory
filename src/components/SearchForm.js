import React, { useEffect } from "react";
import Form, { Group, Control } from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function SearchForm({ handleInputChange, handleSearch, search }) {
  return (
    <>
      <h5>Sort by Gender</h5>
      <Form.Group>
        <Form.Control size="sm" as="select">
          <option>Female</option>
          <option>Male</option>
        </Form.Control>
      </Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button onClick={handleSearch} variant="outline-secondary">
            Search by Last Name
          </Button>
        </InputGroup.Prepend>
        <Form.Control
          onChange={handleInputChange}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default SearchForm;
