import React from "react";
import { css } from "emotion";
import Header from "./components/Header";
import Main from "./components/Main";

const Home = () => {
  const styleWrapper = css`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 132px 1.2fr 0.8fr;
    column-gap: 42px;
  `;
  return (
    <div className={styleWrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
