import React, { useContext }  from 'react';
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const Detail = () => {
  const id = useParams();
  const { forms } = useContext(GlobalContext);
  const selectedForm = forms[id];

  return (
    <div>
      <h3>
        <em>Description: </em>
        {selectedForm.description}
      </h3>
      <h3>
        <em>Category: </em>
        {selectedForm.category}
      </h3>
      <h3>
        <em>Content: </em>
        {selectedForm.content}
      </h3>
    </div>
  );
};
