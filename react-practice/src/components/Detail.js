import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = (props) => {
  const formArray = props.forms;
  const id = useParams().id;
  const targetObj = formArray.filter((form) => form.id.toString() === id);
  const selectForm = targetObj[0];

  return (
    <div style={{ marginTop: 20 }}>
      <h3>
        Description: <em>{selectForm.description}</em>
      </h3>
      <h3>
        Category: <em>{selectForm.category}</em>
      </h3>
      <h3>
        Content: <em>{selectForm.content}</em>
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  forms: state.user.forms,
});

export default connect(mapStateToProps)(Detail);
