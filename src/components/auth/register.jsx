import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import preloader from "../../assets/images/preloader.gif";
import { Link } from "react-router-dom";

const Register = (props) => {
  const { loading, setLoaded } = props;
  useEffect(() => {
    if (loading) setTimeout(() => setLoaded(), 3000);
  }, [setLoaded]);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
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
          <h3>Sign Up</h3>
          <p>Hi, Create a free account.</p>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='firstName'
            value={state.firstName}
            onChange={handleInputChange}
            placeholder='First Name'
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            name='lastName'
            value={state.lastName}
            onChange={handleInputChange}
            placeholder='Last Name'
            required
          />
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
            type='email'
            className='form-control'
            name='email'
            value={state.email}
            onChange={handleInputChange}
            placeholder='email'
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

        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            name='password2'
            value={state.password2}
            onChange={handleInputChange}
            placeholder='Confirm Password'
            required
          />
        </div>

        <div className='form-footer'>
          <button type='submit' className='btn btn-lg btn-primary'>
            Register
          </button>
          <p>
            Already Registered? <Link to='/signin'>SignIn.</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoaded: PropTypes.func.isRequired,
};

export default Register;
