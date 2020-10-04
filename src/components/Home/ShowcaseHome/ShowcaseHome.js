import React from "react";

// css import
import classes from "./ShowcaseHome.module.css";

// image import
import showcaseImage from "../../../assets/images/showcaseImage.svg";

//componentImport
import Button from "../../UI/Button/Button";

const ShowcaseHome = (props) => {
  return (
    <div className={classes.ShowcaseHome}>
      <div>
        <h1>
          Developer Student Clubs <span>AKGEC</span>
        </h1>
        <p>
          Developer Student Clubs are university based community groups for
          students interested in Google developer technologies. Students from
          all undergraduate or graduate programs with an interest in growing as
          a developer are welcome. By joining a DSC, students grow their
          knowledge in a peer-to-peer learning environment and build solutions
          for local businesses and their community.
        </p>
        <Button href="#" icon="info">
          &nbsp;LEARN MORE
        </Button>
      </div>
      <div>
        <img src={showcaseImage} alt="DSC" />
      </div>
    </div>
  );
};

export default ShowcaseHome;
