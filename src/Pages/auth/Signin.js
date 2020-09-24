import React from "react";
import Login from "../../components/auth/Login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoaded } from "../../store/actions";

const Signin = (props) => {
  const { loading, setLoaded } = props;
  return (
    <React.Fragment>
      <Login loading={loading} setLoaded={setLoaded} />
    </React.Fragment>
  );
};

const mapState = ({ loading }) => ({ loading: loading.loading });
const mapDispatch = (dispatch) => bindActionCreators({ setLoaded }, dispatch);

export default {
  component: connect(mapState, mapDispatch)(Signin),
};
