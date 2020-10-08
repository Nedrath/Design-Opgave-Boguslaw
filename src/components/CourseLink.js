import React from "react";
import { css } from "emotion";
import { Link } from "@reach/router";

const styleLinks = css`
  text-decoration: none;
  font-weight: bold;

  /* Dette gør at alt undtagen den sidste får margin */
  &:not(last-of-type) {
    margin-right: 2em;
  }
`;

const CourseLink = (props) => (
  <Link
    className={styleLinks}
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "black" : "grey",
        },
      };
    }}
  />
);

export default CourseLink;
