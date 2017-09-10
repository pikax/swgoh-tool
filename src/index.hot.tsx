///<reference path="../custom_typings/json-loader.d.ts"/>


import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./app";
import { AppContainer } from 'react-hot-loader'

// todo should come from service
import * as json from './data.json';

const rootEl = document.getElementById("app");


ReactDOM.render(
  <AppContainer>
    <App data={json}/>
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  // module.hot.accept("./App", () => {
  //   const NextApp = require<{App: typeof App}>("./App").App;
  //   ReactDOM.render(
  //     <AppContainer>
  //       <NextApp data={json}/>
  //     </AppContainer>
  //     ,
  //     rootEl
  //   );
  // });

  module.hot.accept('./App', () => {
      ReactDOM.render(
        <AppContainer>
          <App data={json}/>
        </AppContainer>
        ,
        rootEl);
  })
}