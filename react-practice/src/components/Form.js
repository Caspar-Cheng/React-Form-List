import React, { useState, useCallback } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";
import update from "immutability-helper";

import { connect } from "react-redux";
import { addList } from "../store/user/actions";

const initialState = {
  select: false,
  id: "",
  description: "",
  category: "html",
  content: "",
};

const SubmitForm = (props) => {
  const [form, setForm] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!!form.description && !!form.content) {
      props.addList(form);
    } else {
      alert("Please finish required input!");
    }
    setForm(initialState);
  };

  const onChange = useCallback(
    (e) => {
      const value = update(form, {
        [e.target.name]: { $set: e.target.value },
        id: { $set: uuid() },
        select: { $set: false },
      });

      setForm(value);
    },
    [form]
  );

  return (
    <Form>
      <FormGroup className="ml-2">
        <div className="d-flex my-2">
          <Label for="description">Description: </Label>
          <Input
            type="text"
            value={form.description}
            onChange={onChange}
            name="description"
            style={{ maxWidth: 250, marginLeft: 8 }}
          ></Input>
        </div>
        <div className="d-flex my-2">
          <Label for="category">Category: </Label>
          <Input
            type="select"
            value={form.category}
            onChange={onChange}
            name="category"
            style={{ maxWidth: 100, marginLeft: 8 }}
          >
            <option>html</option>
            <option>css</option>
            <option>js</option>
          </Input>
        </div>
        <div className="d-flex my-2">
          <Label for="content">Content: </Label>
          <Input
            type="textarea"
            value={form.content}
            onChange={onChange}
            name="content"
            style={{ maxWidth: 300, marginLeft: 8 }}
          ></Input>
        </div>
      </FormGroup>
      <Button
        onClick={onSubmit}
        type="submit"
        className="btn btn-success ml-2 my-2"
      >
        Submit
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addList: (form) => dispatch(addList(form)),
});

export default connect(null, mapDispatchToProps)(SubmitForm);
