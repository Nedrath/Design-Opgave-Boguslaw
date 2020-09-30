import React from "react";
import { css } from "emotion";

const ArticleHeadline = ({name}) => {
    const styleHeadline = css `
        color: black;
    `
  
  return (
  <h2 className={styleHeadline}>{name}</h2>
  );
};

export default ArticleHeadline;
