import React, { useState } from "react";
import { Link } from "react-router-dom";
// import CSS
import classes from "./SideDrawer.module.css";

// import icons
import * as MdIcons from "react-icons/md";

// import components
import Logo from "../../Logo/Logo";

const SideDrawer = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navMenuActive = [classes.navMenu, classes.navActive];
  return (
    <div className={classes.Container}>
      <div className={classes.SideDrawer}>
        <Link to="/" className={classes.menuBars}>
          <MdIcons.MdMenu onClick={showSidebar} />
        </Link>
        <Logo />
      </div>
      <nav className={sidebar ? navMenuActive.join(" ") : classes.navMenu}>
        <ul className={classes.navMenuItems} onClick={showSidebar}>
          <li className={classes.SideDrawerToggle}>
            <Link to="/" className={classes.menuBars}>
              <MdIcons.MdClose />
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/" className={classes.menuBars}>
              <MdIcons.MdHome />
              <span>Home</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/projects" className={classes.menuBars}>
              <MdIcons.MdWork />
              <span>Projects</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/events" className={classes.menuBars}>
              <MdIcons.MdEvent />
              <span>Events</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/blogs" className={classes.menuBars}>
              <MdIcons.MdBook />
              <span>Blogs</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/team" className={classes.menuBars}>
              <MdIcons.MdPeople />
              <span>Team</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/contact" className={classes.menuBars}>
              <MdIcons.MdMessage />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
