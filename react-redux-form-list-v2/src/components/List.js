import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteList } from "../store/user/actions";
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
  const [checkedForm, setCheckedForm] = useState([]);

  const onSingleChecked = (e, id) => {
    if (e.target.checked) {
      setCheckedForm([...checkedForm, id]);
    } else {
      setCheckedForm(checkedForm.filter((d) => d !== id));
    }
  };

  const onMultipleChecked = (e) => {
    if (e.target.checked) {
      const newArr = forms.map((d) => {
        d.select = e.target.checked;
        return d.id;
      });
      setCheckedForm(newArr);
    } else {
      setCheckedForm([]);
    }
  };

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
            if (checkedForm.find((x) => x === d.id)) {
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
                onMultipleChecked(e);
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

      {forms.map((form) => (
        <ListGroupItem key={form.id}>
          <Row className="d-flex">
            <Col>
              <Input
                onChange={(e) => {
                  onSingleChecked(e, form.id);
                }}
                type="checkbox"
                checked={!!checkedForm.find((d) => d === form.id)}
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
                  if (checkedForm.find((d) => d === form.id)) {
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
