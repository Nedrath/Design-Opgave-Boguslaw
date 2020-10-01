import React from "react";
import { css } from "emotion";
import imgBook from "../img/Group 77.svg";
import ArticleHeadline from "./ArticleHeadline";
import Button from "./Button";

const LearnMore = () => {
  const styleWrapper = css`
  display: flex;
    height: 193px;
    width: 440px;
    background-color: #f5f5f7;
    border-radius: 8px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    padding-left: 23px;
    padding-right: 48px;
    padding-top: 18px;
  `;
  const styleText = css`
    padding-bottom: 30px;
    width: 80%;
  `

  return (
    <div className={styleWrapper}>
      <section>
        <ArticleHeadline name="Learn even more" />
        <p className={styleText}>Unlock premium features only for $9.99 per month.</p>
        <Button BtnTxt="Go Premium" />
      </section>
      <img src={imgBook} alt="" />
    </div>
  );
};

export default LearnMore;
