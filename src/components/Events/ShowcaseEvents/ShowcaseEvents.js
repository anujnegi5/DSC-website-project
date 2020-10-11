import React from "react";

//import css
import classes from "./ShowcaseEvents.module.css";

const ShowcaseEvents = () => {
  return (
    <div className={classes.ShowcaseEvents}>
      <div className={classes.Container}>
        <div className={classes.topContent}>
          <h1 className={classes.eventsHeading}>Events</h1>
          <p className={classes.eventsInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            aut?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseEvents;
