import React from "react";
import { css } from "emotion";
import SearchPlus from "./SearchPlus";
import CourseCounter from "./CourseCounter";
import ArticleHeadline from "./ArticleHeadline";
import CourseButtons from "./CoursesButtons";
import DaysPicker from "./DaysPicker";
import LearnMore from "./LearnMore";
import MyLineChart from './MyLineChart'


const SectionRight = () => {
  const styleSection = css`
    display: grid;
    row-gap: 20px;
    align-content: flex-start;
  `;
  const styleCourseCounter = css`
    width: 445px;
    height: 107px;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
  `;
  const styleButtonsDays = css`
    display: flex;
    justify-content: space-between;
    width: 450px;
  `;

  return (
    <section className={styleSection}>
      <SearchPlus />
      <div className={styleCourseCounter}>
        <CourseCounter counter="11" text="Courses completed" />
        <CourseCounter counter="4" text="Courses in progress" />
      </div>
      <ArticleHeadline name="Your statistics" />
      <section className={styleButtonsDays}>
        <CourseButtons all="Learning Hours" newest="My Courses" />
        <DaysPicker />
      </section>
      <MyLineChart />
      <LearnMore />
    </section>
  );
};

export default SectionRight;
