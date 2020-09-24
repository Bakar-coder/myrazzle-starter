import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbarContent'>
        <Link to='/' className='logo'>
          <h3>Logo</h3>
        </Link>
        <ul className='navList'>
          <li className='navItem'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navItem'>
            <Link to='/about'>About</Link>
          </li>
          <li className='navItem'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='navItem'>
            <Link to='/signin'>SignIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
