import React from "react";
import NopageComponent from "../components/404";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoaded } from "../store/actions";

const NoPage = (props) => {
  const { loading, setLoaded } = props;
  return (
    <div>
      <NopageComponent loading={loading} setLoaded={setLoaded} />
    </div>
  );
};

const mapState = ({ loading }) => ({ loading: loading.loading });
const mapDispatch = (dispatch) => bindActionCreators({ setLoaded }, dispatch);

export default {
  component: connect(mapState, mapDispatch)(NoPage),
};
