import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Nav />
      {props.children}
    </React.Fragment>
  );
};

Layout.propTypes = {};

export default Layout;
