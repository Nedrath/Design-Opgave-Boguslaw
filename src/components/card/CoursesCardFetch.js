import React, { Fragment, useContext, useState } from "react";
import { css } from "emotion";
import CardImgTxt from "./CardImgTxt";
import Button from "../Button";
import imgLand from "../../img/Group 71.svg";
import Completion from "../Completion";
import { userContext } from "../../contexts/UserContext";

const CourseCardFetch = () => {
  const styleCard = css`
    background-color: #f5f5f7;
    border-radius: 14px;
    height: 80px;
    width: 500px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6em;
    display: flex;
  `;

  const { user } = useContext(userContext);
  // console.log("from context: ", user);

  const [current, setCurrent] = useState(0);

  const forwardClick = () => {
    current === user.watching.length - 1
      ? setCurrent(0)
      : setCurrent(current + 1);
  };
  const backClick = () => {
    current === 0
      ? setCurrent(user.watching.length - 1)
      : setCurrent(current - 1);
  };

  // dette er en turnary operator ellers kunne man skrive data && , dette er en if.
  return user ? (
    <Fragment>
      <div className={styleCard} key={user.watching[current].id}>
        <CardImgTxt
          image={imgLand}
          title={user.watching[current].name}
          text={user.watching[current].teacher}
        />
        <Completion percentage={user.watching[current].completion} />
        <Button BtnTxt="Continue" />
      </div>
      <div
        className={css`
          margin-top: 20px;
        `}
      >
        <ion-icon
          onClick={backClick}
          class="ion-icon-card"
          name="arrow-back-circle-outline"
        ></ion-icon>
        <ion-icon
          onClick={forwardClick}
          class="ion-icon-card"
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </div>
    </Fragment>
  ) : (
    // hele dette er en turnary operator fra data ?
    <h1>.. Loading ..</h1>
  );
};

export default CourseCardFetch;
