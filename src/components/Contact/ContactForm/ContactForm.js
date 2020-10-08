import React, { useState } from "react";

//import css
import classes from "./ContactForm.module.css";

//import function
import validate from "./ValidateInfo";

const ContactForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);
  const submitForm = props.submitContact;

  const valueChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  return (
    <div className={classes.formContentRight}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Reach out to us</h1>
        <div className={classes.formInputs}>
          <label htmlFor="name" className={classes.formLabel}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className={classes.formInput}
            value={values.name}
            onChange={valueChangeHandler}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="email" className={classes.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className={classes.formInput}
            value={values.email}
            onChange={valueChangeHandler}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="message" className={classes.formLabel}>
            Message
          </label>
          <textarea
            id="message"
            type="message"
            name="message"
            placeholder="Write here..."
            className={classes.formInput}
            value={values.message}
            onChange={valueChangeHandler}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button className={classes.formInputBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
