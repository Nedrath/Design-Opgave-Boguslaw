import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
