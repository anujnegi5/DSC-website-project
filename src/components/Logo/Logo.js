import React from "react";

import dscLogo from "../../assets/Logo/Logo.svg";
import classes from "./Logo.module.css";

const Logo = () => (
  <>
    <img className={classes.Logo} src={dscLogo} alt="MyBurger-Logo" />
  </>
);

export default Logo;
