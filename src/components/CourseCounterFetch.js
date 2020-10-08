import React, { useContext } from "react";
import { css } from "emotion";
import { userContext } from "../contexts/UserContext";

const CourseCounter = () => {
  const { user } = useContext(userContext);

  const styleWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 210px;
    height: 97px;
    background-color: #f5f5f7;
    border-radius: 8px;
    margin: 0px 15px;
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
    user && (
      <section
        className={css`
          display: flex;
        `}
      >
        <div className={styleWrapper}>
          <h1 className={styleCounter}>{user.courseStatus[0].count}</h1>
          <p className={styleText}>{user.courseStatus[0].label}</p>
        </div>
        <div className={styleWrapper}>
          <h1 className={styleCounter}>{user.courseStatus[1].count}</h1>
          <p className={styleText}>{user.courseStatus[1].label}</p>
        </div>
      </section>
    )
  );
};

export default CourseCounter;
