import React from "react";

//css classes
import classes from "./Button.module.css";

const Button = (props) => (
  <a href={props.href} className={classes.Button} style={props.style}>
    {props.children}
  </a>
);

export default Button;
