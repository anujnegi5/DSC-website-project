import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import classes from "./Navbar.module.css";
import Logo from "../../Logo/Logo";

// Components
import Home from "../../Home/Home";

// import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Navbar = () => (
  <header>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} />*/}
    <div className={classes.Navbar}>
      <div className={classes.Container}>
        <div className={classes.NavbarLeft}>
          <NavLink to="/" className={classes.NavbarLogo}>
            <Logo />
          </NavLink>
        </div>
        <div className={classes.NavbarRight}>
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/" exact activeClassName={classes.selected}>
                Home
              </NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/projects" activeClassName={classes.selected}>
                Projects
              </NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/events" activeClassName={classes.selected}>
                Events
              </NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/blog" activeClassName={classes.selected}>
                Blog
              </NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/team" activeClassName={classes.selected}>
                Team
              </NavLink>
            </li>
            <li className={classes.NavigationItem}>
              <NavLink to="/contact" activeClassName={classes.selected}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Switch>
      <Route path="/" exact component={Home} />
      {/* HOME COMPonent */}
    </Switch>
    {/* Project COMPonent */}
    {/* Event COMPonent */}
    {/* Blog COMPonent */}
    {/* Team COMPonent */}
    {/* Contact COMPonent */}
  </header>
);

export default Navbar;
