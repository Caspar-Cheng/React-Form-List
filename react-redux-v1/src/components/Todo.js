import React from "react";
import { SubmitForm } from "./Form";
import { List } from "./List";
import { Row, Col } from "reactstrap";

export const Todo = () => {
  return (
    <Row className="d-flex mx-3 my-3">
      <Col md="4">
        <SubmitForm />
      </Col>
      <Col md="8">
        <List />
      </Col>
    </Row>
  );
};
