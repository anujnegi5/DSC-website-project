import React from "react";

// import CSS
import classes from "./AboutHome.module.css";

// import image
import about from "../../../assets/images/aboutUS.png";

const AboutHome = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.AboutHome}>
          <div>
            <h2>
              What <strong>DSC-AKGEC</strong> do?
            </h2>
            <p>
              We at
              <strong>&nbsp;DSC-AKGEC&nbsp;</strong>
              are a passionate group of people who work towards bringing a
              change in the ecosystem of development around the campus. We want
              to create a healthy environment for the budding developers to
              create solutions to real life problems and promote the
              <strong>&nbsp;developer culture</strong>.
            </p>
            <img src={about} alt="" />
          </div>
          <div className={classes.Domains}>
            <h2>Fields we work in</h2>
            <div>
              <h3>Web Development</h3>
            </div>
            <div>
              <h3>Machine Learning</h3>
            </div>
            <div>
              <h3>App Development</h3>
            </div>
            <div>
              <h3>Management</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
