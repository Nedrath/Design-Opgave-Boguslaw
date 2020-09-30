import React from "react";
import { css } from "emotion";
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight'

const Main = () => {
  const styleMainLayout = css`
    display: grid;
    gap: 64px;
  `;

  return (
    <main className={styleMainLayout}>
      <SectionLeft />
      <SectionRight />
    </main>
  );
};

export default Main;
