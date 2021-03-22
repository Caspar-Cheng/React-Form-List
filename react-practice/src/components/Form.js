import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const SubmitForm = () => {
    const { addList } = useContext(GlobalContext);
    const history = useHistory();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = () => {
        const newForm = {
            id: uuid(),
            description: description,
            category: category,
            content: content
        }
        addList(newForm);
        history.push("/todo");
    };

    const onDesChange = e => {
        setDescription(e.target.value);  
    };
    const onCategoryChange = e => {
        setCategory(e.target.value);
    };
    const onContentChange = e => {
        setContent(e.target.value)
    }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup className="ml-2">
        <div className="d-flex my-2">
          <Label for="description">Description: </Label>
          <Input
            type="text"
            value={description}
            onChange={onDesChange}
            id="description"
            style={{ maxWidth: "250px", marginLeft:"8px"}}
          ></Input>
        </div>
        <div className="d-flex my-2">
          <Label for="category">Category: </Label>
          <Input
            type="select"
            value={category}
            onChange={onCategoryChange}
            id="category"
            style={{ maxWidth: "100px", marginLeft:"8px"}}
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
            value={content}
            onChange={onContentChange}
            id="content"
            style={{ maxWidth: "300px", marginLeft:"8px"}}
          ></Input>
        </div>
      </FormGroup>
      <Button type="submit" className="btn btn-success ml-2 my-2">
        Submit
      </Button>
    </Form>
  );
};
