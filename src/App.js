import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import User from "./components/User";
import UserContextProvider from "./contexts/UserContext";

import "./scss/Style.scss";

const App = () => {
  // path:"/:" når der står : er det et URL parameter.
  return (
    <UserContextProvider>
      <Router>
        <User path="/*" />
        <Home path="/" />
      </Router>
    </UserContextProvider>
  );
};

render(<App />, document.querySelector("#root"));
