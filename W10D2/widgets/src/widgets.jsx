import React from "react";
import ReactDOM from "react-dom"
import Root from "./root"

document.addEventListener("DOMContentLoaded", e => { 
  let main = document.getElementById("main"); 
  ReactDOM.render(<Root/>, main); //can only render tags because we imported React
});