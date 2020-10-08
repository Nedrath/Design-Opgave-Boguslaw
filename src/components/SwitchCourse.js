import React, { useState } from "react";
import { css } from "emotion";

const SwitchCourse = () => {
  const [current, setCurrent] = useState(0);
  let array = ["first", "second", "third", "fourth"];

  const forwardClick = () => {
    current === array.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const backClick = () => {
    current === 0 ? setCurrent(array.length - 1) : setCurrent(current - 1);
  };

  return (
    <div
      className={css`
        margin-top: 20px;
      `}
    >
      <h1>{array[current]}</h1>
      <ion-icon
        onClick={backClick}
        class="ion-icon-card"
        name="arrow-back-circle-outline"
      ></ion-icon>
      <ion-icon
        onClick={forwardClick}
        class="ion-icon-card"
        name="arrow-forward-circle-outline"
      ></ion-icon>
    </div>
  );
};

export default SwitchCourse;
