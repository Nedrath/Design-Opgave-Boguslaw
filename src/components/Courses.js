import React, { Fragment } from "react";
import { css } from "emotion";
import CourseLink from "./CourseLink";
import CourseList from "./CourseList";
import { Router } from "@reach/router";

const CoursesButtons = ({ all, newest, top, popular }) => {
  const styleWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 20px;
  `;
  const styleActive = css`
    font-weight: bolder;
    font-size: 16px;
    text-decoration: none;
  `;
  const styleNotActive = css`
    font-weight: 700;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.247);
    text-decoration: none;
  `;
  return (
    <Fragment>
      <nav className={styleWrapper}>
        <CourseLink className={styleActive} to="./">
          {all}
        </CourseLink>
        <CourseLink className={styleNotActive} to="newest">
          {newest}
        </CourseLink>
        <CourseLink className={styleNotActive} to="top">
          {top}
        </CourseLink>
        <CourseLink className={styleNotActive} to="popular">
          {popular}
        </CourseLink>
      </nav>
      <Router>
        <CourseList path="/" type="all" />
        <CourseList path="newest" type="newest" />
        <CourseList path="top" type="top" />
        <CourseList path="popular" type="popular" />
      </Router>
    </Fragment>
  );
};

export default CoursesButtons;
