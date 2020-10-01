import React from "react";
import { css } from "emotion";

const CoursesButtons = ({ all, newest, top, popular }) => {
  const styleWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 70%;
  `;
  const styleActive = css`
    font-weight: bolder;
    font-size: 16px;
  `;
  const styleNotActive = css`
    font-weight: 700;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.247);
  `;
  return (
    <div className={styleWrapper}>
      <p className={styleActive}>{all}</p>
      <p className={styleNotActive}>{newest}</p>
      <p className={styleNotActive}>{top}</p>
      <p className={styleNotActive}>{popular}</p>
    </div>
  );
};

export default CoursesButtons;
