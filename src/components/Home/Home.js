import React, { Component } from "react";

// components Import
import ShowcaseHome from "./ShowcaseHome/ShowcaseHome";
import AboutHome from "./AboutHome/AboutHome";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <ShowcaseHome />
          <AboutHome />
        </div>
      </>
    );
  }
}

export default Home;
