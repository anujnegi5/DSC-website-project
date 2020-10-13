import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./Layout.module.css";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Home from "../Home/Home";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Projects from "../Projects/Projects";
// import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <div>
          <Navbar />
          <SideDrawer />
          {/* <Navbar drawerToggleClicked={this.sideDrawerToggleHandler} /> */}
          {/* <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          /> */}
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
