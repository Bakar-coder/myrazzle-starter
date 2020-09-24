import React from "react";

import Register from "../../components/auth/register";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoaded } from "../../store/actions";

const Signup = (props) => {
  const { loading, setLoaded } = props;
  return (
    <React.Fragment>
      <Register loading={loading} setLoaded={setLoaded} />
    </React.Fragment>
  );
};

const mapState = ({ loading }) => ({ loading: loading.loading });
const mapDispatch = (dispatch) => bindActionCreators({ setLoaded }, dispatch);

export default {
  component: connect(mapState, mapDispatch)(Signup),
};
