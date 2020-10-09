import React, { useState, useEffect } from "react";

//import css
import classes from "./ContactForm.module.css";

//import function
import validate from "./ValidateInfo";

//import component
import Logo from '../../Logo/Logo';

const ContactForm = (props) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    year: "",
    branch: "",
    section:"",
    studentNumber: "",
    universityRollNumber:"",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { successHandler } = props;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      successHandler();
    }
  }, [errors]);

  const valueChangeHandler = (e) => {
    setValues({ ...values, [e.target.fullName]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  return (
    <div className={classes.formContentLeft}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.logo}>
          <Logo/>
        </div>
        <h1>Register</h1>
        <div className={classes.formFields}>
          <div className={classes.formInputs}>
            <label htmlFor="fullName" className={classes.formLabel}>
              Full Name
            </label>
            <div>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                className={classes.formInput}
                value={values.fullName}
                onChange={valueChangeHandler}
              />
              {errors.fullName && <p>{errors.fullName}</p>}
            </div>

          </div>
          <div className={classes.formInputs}>
            <label htmlFor="email" className={classes.formLabel}>
              Email
            </label>
            <div>
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
          </div>
          <div className={classes.formInputs}>
            <label htmlFor="year" className={classes.formLabel}>
              Year
            </label>
              
            <select id="year" name="year" value={values.year} onChange={valueChangeHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={classes.formInputs}>
            <label htmlFor="branch" className={classes.formLabel}>
              Branch
            </label>
              
            <select id="branch" name="branch" value={values.branch} onChange={valueChangeHandler}>
              <option value="CSE">CSE</option>
              <option value="CS">CS</option>
              <option value="CS/IT">CS/IT</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>
          </div>
          <div className={classes.formInputs}>
            <label htmlFor="section" className={classes.formLabel}>
              Section
            </label>
            <input
              id="section"
              type="text"
              name="section"
              placeholder="Enter your Section"
              className={classes.formInput}
              value={values.fullName}
              onChange={valueChangeHandler}
            />
            {errors.section && <p>{errors.section}</p>}
          </div>
          <div className={classes.formInputs}>
            <label htmlFor="student_number" className={classes.formLabel}>
              Student Number
            </label>
            <input
              id="student_number"
              type="text"
              name="student_number"
              placeholder="Enter your Student Number"
              className={classes.formInput}
              value={values.fullName}
              onChange={valueChangeHandler}
            />
            {errors.studentNumber && <p>{errors.studentNumber}</p>}
          </div>
          <div className={classes.formInputs}>
            <label htmlFor="university_roll_number" className={classes.formLabel}>
              University Roll Number
            </label>
            <input
              id="university_roll_number"
              type="text"
              name="university_roll_number"
              placeholder="Enter your University Roll Number"
              className={classes.formInput}
              value={values.fullName}
              onChange={valueChangeHandler}
            />
            {errors.universityRollNumber && <p>{errors.universityRollNumber}</p>}
          </div>
        </div>
        <button className={classes.formInputBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
