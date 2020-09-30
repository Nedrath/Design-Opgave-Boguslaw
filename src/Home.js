import React from "react";
import { css } from "emotion";
import Header from "./components/Header";
import Main from "./components/Main";

const Home = () => {
  const styleRoot = css`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 132px 1fr;
    column-gap: 42px;
  `;
  return (
    <div className={styleRoot}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
