import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, theme } from "rimble-ui";

const pinkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#F82495"
  },
  breakpoints: ["40em", "64em", "80em"]
};

ReactDOM.render(
  <ThemeProvider theme={pinkTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
