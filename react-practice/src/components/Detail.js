import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Detail = () => {
  const id = useParams().id;
  const { forms } = useContext(GlobalContext);
  const targetObj = forms.filter((form) => form.id.toString() === id);
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
