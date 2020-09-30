import React from "react";
import { css } from "emotion";

const CardTime = ({ time, icon }) => {
  const styleLikesBox = css`
    display: flex;
    align-items: center;
  `;
  const styleTime = css`
    font-size: 0.8em;
    font-weight: lighter;
    padding-left: 10px;
  `;

  return (
    <div className={styleLikesBox}>
      <ion-icon class="ion-icon-small" name={icon}></ion-icon>
      <p className={styleTime}>{time}</p>
    </div>
  );
};

export default CardTime;
