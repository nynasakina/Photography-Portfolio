import React from "react";

const Label = (props) => {
  return (
    <div>
      <label id={props.id}>{props.name}</label>
    </div>
  );
};

export default Label;
