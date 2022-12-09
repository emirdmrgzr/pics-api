import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImages from "./api";
 
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

searchImages(); // Used like this just to display images it's fuction is not going to stay like that.

root.render(<App/>);