import React, { useState } from "react";
import { Button } from "reactstrap";
import FormItem from "./shared/FormItem";
import update from "immutability-helper";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateForm } from "../store/user/thunk";

const Detail = ({ forms, updateForm }) => {
  const id = useParams().id;
  const selectedForm = forms.filter((form) => form.id.toString() === id)[0];
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState(selectedForm);

  const onChange = (e) => {
    const changedValue = update(form, {
      [e.target.name]: { $set: e.target.value },
    });
    setForm(changedValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateForm(form);
  };

  return (
    <>
      <FormItem
        editable={editable}
        title="description"
        value={form.description}
        onChange={onChange}
      />

      <FormItem
        editable={editable}
        type="select"
        title="category"
        value={form.category}
        onChange={onChange}
        style={{ maxWidth: 100 }}
      />

      <FormItem
        editable={editable}
        type="textarea"
        title="content"
        value={form.content}
        onChange={onChange}
      />

      <Button
        onClick={() => {
          setEditable(!editable);
        }}
        type="submit"
        className="btn btn-info ml-2 my-2"
      >
        {editable ? "Update" : "Edit"}
      </Button>
      <Button
        disabled={editable}
        onClick={onSubmit}
        type="submit"
        className="btn btn-success ml-2 my-2"
      >
        Submit
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  forms: state.user.forms,
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (form) => dispatch(updateForm(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
