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
  const [shadow, setShadow] = useState(false);

  const boxShadowHandler = () => {
    if (window.scrollY >= 100) {
      setShadow(true);
    } else if (window.scrollY < 100) {
      setShadow(false);
    }
  };

  let shadowActiveclass = [classes.SideDrawer, null];

  if (shadow === true) {
    shadowActiveclass = [classes.SideDrawer, classes.active];
  }

  window.addEventListener("scroll", boxShadowHandler);

  const showSidebar = () => setSidebar(!sidebar);

  const navMenuActive = [classes.navMenu, classes.navActive];
  return (
    <div className={classes.Container}>
      <div className={shadowActiveclass.join(" ")}>
        <MdIcons.MdMenu onClick={showSidebar} className={classes.menuBars} />
        &nbsp;
        <Link to="/" exact>
          <Logo />
        </Link>
      </div>
      <nav className={sidebar ? navMenuActive.join(" ") : classes.navMenu}>
        <ul className={classes.navMenuItems} onClick={showSidebar}>
          <li className={classes.SideDrawerToggle}>
            <Link className={classes.menuBars}>
              <MdIcons.MdClose className={classes.close} />
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
