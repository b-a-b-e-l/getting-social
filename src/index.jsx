import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./containers/app/App";
import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#50CB93",
      textPrimary: "#222222",
    },
    secondary: {
      main: "#54436B",
      contrastText: "#71EFA3",
    },
    text: {
      primary: "#222222",
      secondary: "#515151",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
