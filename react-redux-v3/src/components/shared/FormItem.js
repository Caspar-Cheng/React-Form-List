import React from "react";
import { Label, Input } from "reactstrap";

const options = [
  { id: 1, value: "html" },
  { id: 2, value: "css" },
  { id: 3, value: "js" },
];

const FormItem = ({
  title,
  value,
  onChange,
  type = "text",
  style = { maxWidth: 250, marginLeft: 8 },
  editable = true,
  className = "d-flex my-2",
}) => {
  return (
    <div className={className}>
      <Label for={title}>{title}:</Label>
      {editable ? (
        <Input
          type={type}
          value={value}
          name={title}
          style={style}
          onChange={onChange}
        >
          {type === "select"
            ? options.map((item, id) => {
                return (
                  <option key={id} value={item.value}>
                    {item.value}
                  </option>
                );
              })
            : null}
        </Input>
      ) : (
        `${value}`
      )}
    </div>
  );
};

export default FormItem;
