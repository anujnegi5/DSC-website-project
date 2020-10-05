import React, { Component } from "react";

// components Import
import ShowcaseHome from "./ShowcaseHome/ShowcaseHome";
import AboutHome from "./AboutHome/AboutHome";
import EventsHome from "./EventsHome/EventsHome";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <ShowcaseHome />
          <AboutHome />
          <EventsHome />
        </div>
      </>
    );
  }
}

export default Home;
