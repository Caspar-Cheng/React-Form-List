import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { connect } from "react-redux";
import { searchForm } from "../store/user/thunk";

const Search = ({ searchForm }) => {
  const [toInput, setToInput] = useState(false);
  const [input, setInput] = useState("");

  const onSubmit = () => {
    setToInput(!toInput);
    searchForm(input);
  };

  return (
    <div>
      <Button color="warning" onClick={() => setToInput(!toInput)}>
        Search?
      </Button>
      {toInput && (
        <div>
          <Input type="text" onChange={(e) => setInput(e.target.value)} />
          <Button type="submit" onClick={onSubmit} color="primary">
            Go!
          </Button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchForm: (content) => dispatch(searchForm(content)),
});

export default connect(null, mapDispatchToProps)(Search);
