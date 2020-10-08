import React from "react";
import { css } from "emotion";

// lavet farven på button til en prop som color, så der hvor <Button /> sættes ind skrives
// farven direkte som <Button color="red" />
// hvis den ikke får en farve er den sort som skrives i ""

const Button = ({ BtnTxt, color }) => {
  const styleButton = css`
    background-color: ${color ? [color] : "goldenrod"};
    width: 120px;
    height: 40px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;

    :hover {
      animation: zoom 2.5s ease-in 1;
    }

    @keyframes zoom {
      to {
        font-size: 1.3em;
      }
    }
  `;

  return <button className={styleButton}>{BtnTxt}</button>;
};

export default Button;
