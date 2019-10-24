import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";

document.addEventListener("DOMContentLoaded", e => {
  let main = document.getElementById("main");
  ReactDOM.render(<Game />, main); //can only render tags because we imported React
});