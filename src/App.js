import React from "react";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Splash path="./" />
      <Home path="./Home" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
