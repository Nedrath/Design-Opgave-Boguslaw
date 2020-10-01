import React, { Fragment } from "react";
import { css } from "emotion";
import CardImgTxt from "./CardImgTxt";
import Button from "../Button";
import imgLand from "../../img/Group 71.svg";
import imgProcent from "../../img/Group 72.svg";

const CourseCard = () => {
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
  return (
    <Fragment>
      <div className={styleCard}>
        <CardImgTxt
          image={imgLand}
          title="Spanish B2"
          text="by Alejandro Velazquez"
        />
        <img src={imgProcent} alt="" />
        <Button BtnTxt="Continue" />
      </div>
      <div></div>
    </Fragment>
  );
};

export default CourseCard;
