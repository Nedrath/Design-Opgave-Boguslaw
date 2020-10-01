import React from "react";
import { css } from "emotion";
import ImgFace from "../img/Group 74.svg";

const SearchPlus = () => {
  const styleWrapper = css`
    display: flex;
    justify-content: space-between;
    width: 445px;
    align-items: center;
    margin-top: 30px;
  `;
  const styleSearch = css`
    width: 340px;
    height: 40px;
    background-color: #f5f5f7;
    border: none;
    border-radius: 8px;
    text-align: center;
  `;

  return (
    <div className={styleWrapper}>
      <ion-icon
        class="icon-nav-black icon-nav-margin"
        name="search-circle"
      ></ion-icon>
      <form action="">
        <input className={styleSearch} type="search" name="" id="" />
      </form>
      <ion-icon class="icon-nav-black" name="notifications-outline"></ion-icon>
      <img src={ImgFace} alt="" />
      <ion-icon class="ion-icon-search" name="chevron-down-outline"></ion-icon>
    </div>
  );
};

export default SearchPlus;
