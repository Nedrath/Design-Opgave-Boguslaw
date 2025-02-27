import React from "react";
import { css } from "emotion";
import CourseLink from "./CourseLink";



const CoursesButtons = ({ all, newest, top, popular }) => {
  const styleWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 70%;
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

  );
};

export default CoursesButtons;
