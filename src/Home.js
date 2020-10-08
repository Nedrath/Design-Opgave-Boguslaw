import React from "react";
import { css } from "emotion";
import Header from "./components/Header";
import SectionLeft from "./components/SectionLeft";
import SectionRight from "./components/SectionRight";

const Home = () => {
  const styleWrapper = css`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 132px 1.2fr 0.8fr;
    column-gap: 42px;
  `;
  const styleMainLayout = css`
    display: grid;
    gap: 64px;
  `;
  return (
    <div className={styleWrapper}>
      <Header />
      <main className={styleMainLayout}>
        <SectionLeft />
        <SectionRight />
      </main>
    </div>
  );
};

export default Home;
