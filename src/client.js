import React, { Fragment } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import store from "./store/store";
import "./Index.css";

hydrate(
  <Provider store={store}>
    <Router>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
