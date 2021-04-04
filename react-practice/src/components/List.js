import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteList } from "../redux/user/user-actions";
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

const List = (props) => {
  const { forms, deleteList } = props;
  const [formObj, setFormObj] = useState(forms);
  useEffect(() => {
    initalForms.forEach((d) => {
      if (d.key !== formObj.key) {
        setFormObj(...formObj, d);
      }
    });
  }, [initalForms, formObj]);

  return (
    <ListGroup
      className="ml-2"
      style={{ maxWidth: "55rem", textAlign: "center", marginLeft: "0" }}
    >
      <Button
        type="submit"
        className="btn btn-danger"
        style={{ maxWidth: 150, marginBottom: 25 }}
        onClick={() => {
          forms.forEach((d) => {
            if (d.select) {
              deleteList(d.id);
            }
          });
        }}
      >
        Delete selected
      </Button>
      <ListGroupItem>
        <Row className="d-flex">
          <Col>
            <Input
              type="checkbox"
              onChange={(e) => {
                setFormObj(
                  formObj.map((d) => {
                    d.select = e.target.checked;
                    return d;
                  })
                );
              }}
            ></Input>
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

      {initalForms.map((form) => (
        <ListGroupItem key={form.id}>
          <Row className="d-flex">
            <Col>
              <Input
                onChange={(e) => {
                  setFormObj(
                    formObj.map((d) => {
                      if (form.id === d.id) {
                        d.select = e.target.checked;
                      }
                      return d;
                    })
                  );
                }}
                type="checkbox"
                checked={form.select}
              ></Input>
            </Col>
            <Col>
              <Link to={`/todo/${form.id}`} style={{ color: "black" }}>
                {form.description}
              </Link>
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
                onClick={() => {
                  if (form.select) {
                    deleteList(form.id);
                  }
                }}
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

const mapStateToProps = (state) => ({
  forms: state.user.forms,
});

const mapDispatchToProps = (dispatch) => ({
  deleteList: (id) => dispatch(deleteList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
