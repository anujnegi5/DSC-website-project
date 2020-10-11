import React from "react";

//import component
import ShowcaseEvents from "./ShowcaseEvents/ShowcaseEvents";
import EventsList from "./EventsList/EventsList";

const Events = (props) => {
  return (
    <div>
      <ShowcaseEvents />
      <EventsList />
    </div>
  );
};

export default Events;
