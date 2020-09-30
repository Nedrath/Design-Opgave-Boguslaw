import React from "react";
import { css } from "emotion";

const Button = ({BtnTxt}) => {
  
  const styleButton = css`
    background-color: black;
    width: 120px;
    height: 40px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border:none;
  `
  return (
  <button className={styleButton}>{BtnTxt}</button>
  );
};

export default Button;
