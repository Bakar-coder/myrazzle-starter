import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import preloader from "../../assets/images/preloader.gif";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { loading, setLoaded } = props;
  useEffect(() => {
    if (loading) setTimeout(() => setLoaded(), 3000);
  }, [setLoaded]);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleInputChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return loading ? (
    <div className='preloader'>
      <img src={preloader} alt='preloader' />
    </div>
  ) : (
    <div className='submission-form'>
      <form onSubmit={handleSubmission} className='form'>
        <div className='form-header'>
          <h3>Sign In</h3>
          <p>Welcome back, Login to continue.</p>
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='username'
            value={state.username}
            onChange={handleInputChange}
            placeholder='UserName'
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            name='password'
            value={state.password}
            onChange={handleInputChange}
            placeholder='Password'
            required
          />
        </div>
        <div className='form-footer'>
          <button type='submit' className='btn btn-lg btn-primary'>
            Login
          </button>
          <p>
            Not Registered? <Link to='/register'>SignUp.</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoaded: PropTypes.func.isRequired,
};

export default Login;
