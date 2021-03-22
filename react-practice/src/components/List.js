import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

export const List = () => {
  const { forms, deleteList } = useContext(GlobalContext);
  return (
    <ListGroup
      className="ml-2"
      style={{ maxWidth: "55rem", textAlign: "center", marginLeft: "0" }}
    >
      <Button
        type="submit"
        className="btn btn-danger"
        style={{ maxWidth: "150px", marginBottom: "25px" }}
      >
        Delete selected
      </Button>
      <ListGroupItem>
        <Row className="d-flex">
          <Col>
            <Input type="checkbox"></Input>
          </Col>
          <Col>
            <Label>Description</Label>
          </Col>
          <Col>
            <Label>Category</Label>
          </Col>
          <Col>
            <Label>Operate</Label>
          </Col>
        </Row>
      </ListGroupItem>

      {forms.map((form) => (
        <ListGroupItem key={form.id}>
          <Row className="d-flex">
            <Col>
              <Input type="checkbox"></Input>
            </Col>
            <Col>
              <Link to={`/todo/${form.id}`} style={{ color: "black" }}>{form.description}</Link>
            </Col>
            <Col>
              <Label>{form.category}</Label>
            </Col>
            <Col>
              <Button
                type="submit"
                name="delete"
                value="delete"
                style={{ color: "red", background: "none", border: "none" }}
                onClick = {() => deleteList(form.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
