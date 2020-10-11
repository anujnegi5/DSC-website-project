import React, { Component } from "react";

// components Import
import ShowcaseHome from "./ShowcaseHome/ShowcaseHome";
import AboutHome from "./AboutHome/AboutHome";
import EventsHome from "./EventsHome/EventsHome";
import ProjectsHome from "./ProjectsHome/ProjectsHome";
import BlogHome from "./BlogHome/BlogHome";
import TeamHome from "./TeamHome/TeamHome";

class Home extends Component {
  render() {
    return (
      <div>
        <ShowcaseHome />
        <AboutHome />
        <EventsHome />
        <ProjectsHome />
        <BlogHome />
        <TeamHome />
      </div>
    );
  }
}

export default Home;
