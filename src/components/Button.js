import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>
        Submit
      </button>
    </div>
  );
};

export default Button;
