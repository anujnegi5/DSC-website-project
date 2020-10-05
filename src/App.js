import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
