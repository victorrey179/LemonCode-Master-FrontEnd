import React from "react";
import { createRoot } from "react-dom/client";
import { HolaMundo } from "./holaMundo";
import "./mystyles.scss"

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HolaMundo />
  </div>
);
