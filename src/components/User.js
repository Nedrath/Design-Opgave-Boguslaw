import React from "react";
import { css } from "emotion";
import WelcomeAvatar from "./WelcomeAvatar";
import Courses from "./Courses";
import Header from "./Header";
import ArticleHeadline from "./ArticleHeadline";
import CoursesCardFetch from "./card/CoursesCardFetch";
import CourseCounter from './CourseCounterFetch'
import MyLineChart from './MyLineChart'

const User = () => {
  const styleWrapper = css`
    display: flex;
    /* grid-template-columns: auto 1fr 1fr; */
  `;
  const styleSection = css`
    display: flex;
    margin-left: 180px;
    flex-direction: column;
  `;
  const styleNav = css`
    padding-top: 20px;
  `;
  return (
    <div className={styleWrapper}>
      <Header />
      <main className={styleSection}>
        <WelcomeAvatar />
        <div className={styleNav}>
          <div
            className={css`
              display: flex;
              margin-bottom: 30px;
            `}
          >
            <CoursesCardFetch />
          </div>
          <ArticleHeadline name="Courses" />
          <Courses
            all="All Courses"
            newest="The Newest"
            top="Top Rated"
            popular="Most Popular"
          />
        </div>
        <CourseCounter />
        <MyLineChart />
      </main>
    </div>
  );
};

export default User;
