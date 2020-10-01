import React from "react";
import { css } from "emotion";

const DaysPicker = () => {
  const styleWrapper = css`
    width: 88px;
    height: 32px;
    background-color: #f5f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  `;
  const styleText = css`
    font-size: 0.8em;
    font-weight: bolder;
    margin-right: 3px;
  `;

  return (
    <div className={styleWrapper}>
      <p className={styleText}>Weekly</p>
      <ion-icon class="ion-icon-search" name="chevron-down-outline"></ion-icon>
    </div>
  );
};

export default DaysPicker;
