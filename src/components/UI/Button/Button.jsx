import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes["custom-button"] + " " + props.className}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
