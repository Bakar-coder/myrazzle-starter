import React, { useEffect } from "react";
import PropTypes from "prop-types";
import preloader from "../assets/images/preloader.gif";

const NopageComponent = (props) => {
  const { loading, setLoaded } = props;
  useEffect(() => {
    if (loading) setTimeout(() => setLoaded(), 3000);
  }, [setLoaded]);
  return loading ? (
    <div className='preloader'>
      <img src={preloader} alt='preloader' />
    </div>
  ) : (
    <div>
      <h1>404 Page</h1>
    </div>
  );
};

NopageComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoaded: PropTypes.func.isRequired,
};

export default NopageComponent;
