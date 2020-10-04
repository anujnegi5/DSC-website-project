import React, { Component } from "react";

import classes from "./Layout.module.css";
import Navbar from "../Navigation/Navbar/Navbar";
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
          Navbar,SideDrawer
          {/* <Navbar drawerToggleClicked={this.sideDrawerToggleHandler} /> */}
          {/* <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          /> */}
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
