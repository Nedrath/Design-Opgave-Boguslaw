import React from "react";
import { css } from "emotion";

const CardLikes = ({ likes, icon }) => {
  const styleLikesBox = css`
    display: flex;
    align-items: center;
  `
  const styleLikes = css`
    font-size: 1em;
    font-weight: lighter;
    padding-left: 10px;
  `
  return (
    <div className={styleLikesBox}>
      <ion-icon class="ion-icon-small" name={icon}></ion-icon>
      <p className={styleLikes}>{likes}</p>
    </div>
  );
};

export default CardLikes;
