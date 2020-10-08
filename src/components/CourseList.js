import React, { useState, useEffect } from "react";
import { css } from "emotion";
import CardLikes from "./card/CardLikes";
import CardImgTxt from "./card/CardImgTxt";
import CardTime from "./card/CardTime";
import Button from "./Button";
import imgFigma from "../img/Group 66.svg";

const CourseList = (props) => {
  const styleCard = css`
    background-color: #f5f5f7;
    border-radius: 14px;
    height: 80px;
    width: 620px;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6em;
    display: flex;
    margin: 1em 0;
  `;

  const style = css`
    list-style: none;
    padding: 0;
  `;

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:1234/data/${props.type}.json`)
      .then((response) => response.json())
      .then((result) => setData(result[props.type]));
  }, [props.type]);
  // console.log(data);

  return (
    <ul className={style}>
      {data &&
        data.map((course) => (
          <li key={course.id}>
            <div className={styleCard}>
              <CardImgTxt
                image={imgFigma}
                title={course.name}
                text={course.teacher}
              />
              <CardTime icon="time" time={course.duration} />
              <CardLikes icon="flame" likes={course.rating} />
              <Button BtnTxt="View Course" />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CourseList;
