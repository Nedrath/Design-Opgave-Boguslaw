import React from "react";
import { css } from "emotion";

const Nav = () => {
  const styleLayout = css`
    background-color: black;
    height: 853px;
    width: 132px;
    border-radius: 20px;
    box-shadow: 6px 10px 28px -1px rgba(0,0,0,0.38);
    position: fixed;
  `;
  const styleIconGrid = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-direction: column;
    text-decoration: none;
  `;
  const styleLogo = css`
    font-size: 3.5em;
    color: white;
    font-weight: bolder;
    text-align: center;
    padding-top: 25px;
  `;
  const styleIconExit = css`
    margin-top: 150px;
    margin-bottom: 100px;
  `;

  return (
    <nav>
      <div className={styleLayout}>
        <h1 className={styleLogo}>F.</h1>
        <ul className={styleIconGrid}>
          <li>
            <ion-icon class="icon-nav" name="home"></ion-icon>
          </li>
          <li>
            <ion-icon class="icon-nav" name="school-outline"></ion-icon>
          </li>
          <li>
            <ion-icon class="icon-nav" name="person-outline"></ion-icon>
          </li>
          <li>
            <ion-icon class="icon-nav" name="mail-outline"></ion-icon>
          </li>
          <li>
            <ion-icon class="icon-nav" name="settings-outline"></ion-icon>
          </li>

          <li className={styleIconExit}>
            <ion-icon class="icon-nav" name="exit-outline"></ion-icon>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
