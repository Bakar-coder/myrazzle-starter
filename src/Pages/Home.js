import React from "react";

import HomeComponent from "../components/Home";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoaded } from "../store/actions";

const Home = (props) => {
  const { loading, setLoaded } = props;
  return (
    <div>
      <HomeComponent loading={loading} setLoaded={setLoaded} />
    </div>
  );
};

const mapState = ({ loading }) => ({ loading: loading.loading });
const mapDispatch = (dispatch) => bindActionCreators({ setLoaded }, dispatch);

export default {
  component: connect(mapState, mapDispatch)(Home),
  getInitialProps: (store) =>
    console.log("Fetch data from database_________________"),
};
