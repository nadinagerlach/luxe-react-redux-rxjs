import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';

const Login = ({ location: { state } }) => (
  <div key="login" className="app__splash app__route">
    <div className="app__splash__intro">
      <div className="gutters">
        <Logo />
        <h5 className="dark">{`Please verify your age to view ${state ? `${state.from}` : 'this page'}`}</h5>
        <NavLink
          to="/"
          className="button"
          exact
        >
          <div className="button-cell">
            <span className="button-text-wrapper">Go to age verification</span>
          </div>
        </NavLink>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Login;
