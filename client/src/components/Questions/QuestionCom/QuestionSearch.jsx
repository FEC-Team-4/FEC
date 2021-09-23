import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const QuestionSearch = () => (
  <div>
    <form className="qa-search" noValidate autoComplete="off">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </form>
  </div>
);

export default QuestionSearch;
