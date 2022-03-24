import React from "react";

const Input = (props) => {
  return (
    <div>
      <input className={props.className} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
