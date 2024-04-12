import React from "react";
import classes from "./averageComponent.scss";
import { getType } from "./functions";
import logoImg from "./content/logo_1.png";

export const HolaMundo = () => {
  return (
    <div>
      <img src={logoImg}></img>
      <div className={classes.resultBackground}>
        <span>¡Hola Mundo!</span>
      </div>
      <p> {getType()}</p>
    </div>
  );
};
