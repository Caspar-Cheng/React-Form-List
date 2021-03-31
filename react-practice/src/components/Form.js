import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const SubmitForm = () => {
  const { addList } = useContext(GlobalContext);
  const history = useHistory();
  const [form, setForm] = useState({
    id: uuid(),
    description: "",
    category: "html",
    content: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addList(form);
    history.push("/todo");
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <Form onSubmit={onSubmit}>
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
      <Button type="submit" className="btn btn-success ml-2 my-2">
        Submit
      </Button>
    </Form>
  );
};
