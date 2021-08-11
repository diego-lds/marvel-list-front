import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./App";
import Routes from "./routes";

import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes>
        <App />
      </Routes>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
