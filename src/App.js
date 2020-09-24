import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import "./App.css";
import Layout from "./components/layouts/layout";

const App = ({ route }) => {
  return <Layout> {renderRoutes(route.routes)}</Layout>;
};

export default { component: connect(null, null)(App) };
