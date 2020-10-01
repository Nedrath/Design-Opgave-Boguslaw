import React from "react";
import { css } from "emotion";
import WelcomeAvatar from "./WelcomeAvatar";
import CourseCard from "./card/CourseCard";
import AvatarInfoCard from "./card/AvatarInfoCard";
import LeftRight from "./LeftRight";
import ArticleHeadline from "./ArticleHeadline";
import CoursesButtons from "./CoursesButtons";

const SectionLeft = () => {
  const styleSection = css`
    display: grid;
    row-gap: 20px;
    align-content: flex-start;
  `;
  const styleCardBox = css`
    display: flex;
  `;
  return (
    <section className={styleSection}>
      <WelcomeAvatar />
      <div className={styleCardBox}>
        <AvatarInfoCard />
        <LeftRight />
      </div>
      <ArticleHeadline name="Courses" />
      <CoursesButtons
        all="All Courses"
        newest="The Newest"
        top="Top Rated"
        popular="Most Popular"
      />
      <CourseCard />
    </section>
  );
};

export default SectionLeft;
