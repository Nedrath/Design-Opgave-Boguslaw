import React from "react";
import { css } from "emotion";

const CourseCounter = ({ counter, text }) => {
  const styleWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 210px;
    height: 97px;
    background-color: #f5f5f7;
    border-radius: 8px;
  `;
  const styleCounter = css`
    font-size: 3.5em;
    font-weight: 700;
    margin-right: 15px;
    margin-left: 35px;
    margin-top: 10px;
  `;
  const styleText = css`
    font-size: 1em;
    font-weight: 500;
    width: 60%;
    margin-top: 10px;
  `;

  return (
    <div className={styleWrapper}>
      <h1 className={styleCounter}>{counter}</h1>
      <p className={styleText}>{text}</p>
    </div>
  );
};

export default CourseCounter;
