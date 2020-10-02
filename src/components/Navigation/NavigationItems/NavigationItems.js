import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/">Projects</NavigationItem>
    <NavigationItem link="/">Events</NavigationItem>
    <NavigationItem link="/">Blog</NavigationItem>
    <NavigationItem link="/">Team</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
