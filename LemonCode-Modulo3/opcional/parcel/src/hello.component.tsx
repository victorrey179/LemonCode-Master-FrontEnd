import React from "react";
import * as classes from "./hello.module.css";
import imgLogo from "./assets/logo_1.png";
import { getType } from "./functions.js";

export const HelloComponent: React.FC = () => {
  return (
    <div>
      <img src={imgLogo}></img>
      <h1 className={classes.background}>¡Hola Mundo!</h1>
      <span>{getType()}</span>
    </div>
  );
};
