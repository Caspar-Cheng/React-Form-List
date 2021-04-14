import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchForms, deleteForm } from "../store/user/thunk";
import { Link } from "react-router-dom";
import PopUp from "./shared/PopUp";
import { ListGroup, ListGroupItem, Label, Input, Row, Col } from "reactstrap";

const List = ({ forms, fetchForms, deleteForm }) => {
  const [checkedForm, setCheckedForm] = useState([]);

  useEffect(() => {
    fetchForms();
    // eslint-disable-next-line
  }, []);

  const onSingleChecked = (e, id) => {
    if (e.target.checked) {
      setCheckedForm([...checkedForm, id]);
    } else {
      setCheckedForm(checkedForm.filter((d) => d !== id));
    }
  };

  const onMultipleChecked = (e) => {
    let newArr = [];
    if (e.target.checked) {
      newArr = forms.map((d) => {
        const a = { ...d };
        a.select = e.target.checked;
        return a.id;
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
      <div style={{ textAlign: "left", marginBottom: 20 }}>
        <PopUp
          buttonName="Delete Selected"
          title="Confirmation"
          content="Are you sure to delete those selected data?"
          option1="yes"
          option2="No"
          next={() => {
            forms.forEach((d) => {
              if (checkedForm.find((x) => x === d.id)) {
                deleteForm(d.id);
              }
            });
          }}
        />
      </div>

      <ListGroupItem key="3">
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
              <PopUp
                buttonName="Delete"
                title="Confirmation"
                content="Are you sure to delete this data?"
                option1="yes"
                option2="No"
                next={() => {
                  if (checkedForm.find((d) => d === form.id)) {
                    deleteForm(form.id);
                  }
                }}
              />
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
  fetchForms: () => dispatch(fetchForms()),
  deleteForm: (id) => dispatch(deleteForm(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
