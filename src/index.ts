///<reference path="../custom_typings/json-loader.d.ts"/>


import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app";


// todo should come from service
import * as json from './data.json';


ReactDOM.render(
  React.createElement(App, {data: [{name:'"ddddd'},...json]}),
  document.getElementById("app")
);