import React, { useEffect } from "react";
import Form, { Group, Control } from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function SearchForm({ handleInputChange, handleSearch, search, resetSearch }) {
  return (
    <>
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
      <Button onClick={resetSearch} variant="secondary" size="sm">
        Reset List
      </Button>
    </>
  );
}

export default SearchForm;
