import React from "react";
import { css } from "emotion";

const LeftRight = () => {
  const styleLeftRight = css`
    width: 120px;
    background-color: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 39px;
  `;
  return (
    <div className={styleLeftRight}>
      <ion-icon
        class="ion-icon-card"
        name="arrow-back-circle-outline"
      ></ion-icon>
      <ion-icon
        class="ion-icon-card"
        name="arrow-forward-circle-outline"
      ></ion-icon>
    </div>
  );
};

export default LeftRight;
