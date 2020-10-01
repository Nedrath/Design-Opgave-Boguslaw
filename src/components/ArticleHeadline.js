import React from "react";
import { css } from "emotion";

const ArticleHeadline = ({name}) => {
    const styleHeadline = css `
        color: black;
        font-weight: 700;
        margin-top: -13px;
    `
  
  return (
  <h2 className={styleHeadline}>{name}</h2>
  );
};

export default ArticleHeadline;
