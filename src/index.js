import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import HashRouter from "react-router-dom/HashRouter";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
