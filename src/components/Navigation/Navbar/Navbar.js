import React from "react";

import classes from "./Navbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Navbar = () => (
  <header>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} />*/}
    <div className={classes.Navbar}>
      <div className={classes.Container}>
        <div className={classes.NavbarLeft}>
          <a href="#" className={classes.NavbarLogo}>
            <Logo />
          </a>
        </div>
        <div className={classes.NavbarRight}>
          <NavigationItems />
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
