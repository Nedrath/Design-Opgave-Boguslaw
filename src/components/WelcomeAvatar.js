import React from "react";
import { css } from "emotion";
import JoshAvatar from "../img/Illustration.svg";

const WelcomeAvatar = () => {
  const avatarImg = css`
    position: relative;
    z-index: 20;
    top: -174px;
    right: -350px;
    height: 90%;
  `;
  const styleArticle = css`
    height: 192px;
    width: 620px;
  `;
  const styleTxtWelcome = css`
    font-size: 2.5em;
    font-weight: bold;
    line-height: 1.2;
  `;
  const styleTxtBox = css`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    margin-left: 31px;
  `
  return (
    <article className={styleArticle}>
      <div
        className={css`
          height: 30px;
          width: 620px;
        `}
      ></div>
      <div
        className={css`
          height: calc(160px - 30px);
          width: 620px;
          background-color: #f5f5f7;
          border-radius: 15px;
        `}
      >
        <div className={styleTxtBox}>
          <h1 className={styleTxtWelcome}>Hello Josh!</h1>
          <p>It’s good to see you again.</p>
        </div>
      </div>
      <img
        className={avatarImg}
        src={JoshAvatar}
        alt="Josh the not real human"
      />
    </article>
  );
};

export default WelcomeAvatar;
