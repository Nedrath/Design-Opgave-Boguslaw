import React, { Fragment } from "react";
import { css } from "emotion";
import CardLikes from "./CardLikes";
import CardImgTxt from "./CardImgTxt";
import CardTime from "./CardTime";
import Button from "../Button";
import imgFigma from "../../img/Group 66.svg";
import imgPhoto from "../../img/Group 67.svg";
import imgInsta from "../../img/Group 68.svg";
import imgPen from "../../img/Group 69.svg";
import imgPs from "../../img/Group 70.svg";

const CourseCard = () => {
  const styleCard = css`
    background-color: #f5f5f7;
    border-radius: 14px;
    height: 80px;
    width: 620px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6em;
    display: flex;
  `;

  // burde have samlet de 4 komponenter og lavet dem samlet i et komponent også
  // kaldt det her så mange gange de sku bruges.

  return (
    <Fragment>
      <div className={styleCard}>
        <CardImgTxt
          image={imgFigma}
          title="Learn Figma"
          text="by Christopher Morgan"
        />
        <CardTime icon="time" time="6h 30min" />
        <CardLikes icon="flame" likes="4,9" />
        <Button BtnTxt="View Course" />
      </div>
      <div className={styleCard}>
        <CardImgTxt
          image={imgPhoto}
          title="Learn Figma"
          text="by Christopher Morgan"
        />
        <CardTime icon="time" time="3h 15min" />
        <CardLikes icon="flame" likes="4,7" />
        <Button BtnTxt="View Course" />
      </div>
      <div className={styleCard}>
        <CardImgTxt
          image={imgInsta}
          title="Learn Figma"
          text="by Christopher Morgan"
        />
        <CardTime icon="time" time="6h 30min" />
        <CardLikes icon="flame" likes="4,6" />
        <Button BtnTxt="View Course" />
      </div>
      <div className={styleCard}>
        <CardImgTxt
          image={imgPen}
          title="Learn Figma"
          text="by Christopher Morgan"
        />
        <CardTime icon="time" time="6h 30min" />
        <CardLikes icon="flame" likes="4,8" />
        <Button BtnTxt="View Course" />
      </div>
      <div className={styleCard}>
        <CardImgTxt
          image={imgPs}
          title="Learn Figma"
          text="by Christopher Morgan"
        />
        <CardTime icon="time" time="6h 30min" />
        <CardLikes icon="flame" likes="4,7" />
        <Button BtnTxt="View Course" />
      </div>
    </Fragment>
  );
};

export default CourseCard;
