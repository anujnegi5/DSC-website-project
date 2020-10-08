import React from "react";

//import css
import classes from "./Success.module.css";

//import image
import successImg from "../../../assets/images/success.svg";

const Success = () => {
  return (
    <div className={classes.formContentRight}>
      <div className={classes.formSuccess}>
        Thank you for reaching out to us.
      </div>
      <img src={successImg} alt="success" className={classes.formImg2} />
    </div>
  );
};

export default Success;
