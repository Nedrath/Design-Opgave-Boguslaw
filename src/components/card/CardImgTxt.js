import React from "react";
import { css } from "emotion";

const CardImgTxt = ({ image, title, text }) => {
  const styleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const styleImg = css`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    position: relative;
    margin-right: 24px;
  `;
  const styleH3 = css`
    font-weight: bold;
    font-size: 1em;
  `;
  const styleText = css`
    font-weight: lighter;
    font-size: 0.8em;
  `;
  return (
    <div className={styleBox}>
      <img className={styleImg} src={image} alt="" />
      <section>
        <h3 className={styleH3}>{title}</h3>
        <p className={styleText}>{text}</p>
      </section>
    </div>
  );
};

export default CardImgTxt;
