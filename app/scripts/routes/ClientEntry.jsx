import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from 'config';

import { login, logOut, underage } from 'actions';
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';


export default class ClientEntry extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = () => {
    const { dispatch } = this.props;

    dispatch(login());
  };

  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };
  handleClickUnderage = () => {
    const { dispatch } = this.props;

    dispatch(underage());
  };

  render() {
    const { user } = this.props;

    const loginBtn = (
      <NavLink
        to="/home"
        className="button"
        exact
        alt={config.title}
      >
        <div className="button-cell" onClick={this.handleClickLogin}>
          <span className="button-text-wrapper">Yes I am!</span>
        </div>
      </NavLink>
    );

    const logoutBtn = (
      <div>
        <NavLink
          to="/home"
          className="button"
          exact
          alt={config.title}
        >
          <div className="button-cell">
            <span className="button-text-wrapper">Thanks!</span>
          </div>
        </NavLink>
        <NavLink
          to="/home"
          exact
          className="verification__subtitle"
          alt={config.title}
        >
          <h5>Visit our homepage</h5>
        </NavLink>
      </div>
    );

    const underageBtn = (
      <a className="button" onClick={this.handleClickUnderage}>
        <div className="button-cell">
          <span className="button-text-wrapper">No I'm not</span>
        </div>
      </a>
    );

    return (
      <div key="ClientEntry" className="app__splash app__route">
        <div className="app__splash__intro">
          <div className="gutters">
            <Logo />
            <h5 className="verification__subtitle">Just one thing...</h5>
            <h1> Are you 18 or older? </h1>
            <ul>
              <li>
                <div className="app__splash__age">
                  <div className="app__splash__age__cell">

                    {user.isAuthenticated ? logoutBtn : loginBtn}
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>

    );
  }
}
