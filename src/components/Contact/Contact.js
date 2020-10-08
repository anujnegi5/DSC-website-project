import React, { useState } from "react";

//import css
import classes from "./Contact.module.css";

//import COmponents
import Logo from "../Logo/Logo";
import ContactForm from "./ContactForm/ContactForm";
import Success from "./Success/Success";

const Contact = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitContact() {
    setIsSubmitted(true);
  }
  return (
    <div className={classes.Contact}>
      <div className={classes.Container}>
        Contact US
        <div className={classes.wrapper}>
          <Logo />
          {!isSubmitted ? (
            <ContactForm submitContact={submitContact} />
          ) : (
            <Success />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
