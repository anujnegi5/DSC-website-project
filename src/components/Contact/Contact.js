import React, { useState } from "react";

//import css
import classes from "./Contact.module.css";

//image import
import registerImg from "../../assets/images/register.png"

//import COmponents
import ContactForm from "./ContactForm/ContactForm";
import Success from "./Success/Success";

const Contact = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitContact() {
    console.log("Success");
    setIsSubmitted(true);
  }

  return (
    <div className={classes.Contact}>
      <div className={classes.Container}>
        <h1>Registration Open</h1>
        <div className={classes.wrapper}>
          {!isSubmitted ? (
            <ContactForm submitContact={submitContact} />
          ) : (
              <Success />
            )}
          <div className={classes.formContentRight}>
            <img src={registerImg} alt="register" className={classes.imgContainer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
