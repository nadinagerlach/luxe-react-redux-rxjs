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
        className="app__header__link"
        activeClassName="is-active"
        exact
        alt={config.title}
      >
        <button
          className="app__header__login btn btn-sm btn-primary btn-icon"
          onClick={this.handleClickLogin}
          >
          <i
            className={cx({
              'i-circle-o-notch i-spin': user.isRunning,
              'i-sign-in': !user.isRunning,
            })}
          />
          <span>Thanks!</span>
        </button>
      </NavLink>
    );

    const logoutBtn = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.handleClickLogout}
      >
        <i className="i-sign-out" />
        <span>Yes I am!</span>
      </button>
    );

    const underageBtn = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.handleClickUnderage}
      >
        <i className="i-sign-out" />
        <span>No I'm not</span>
      </button>
    );

    return (
      <div key="ClientEntry" className="app__splash app__route">
        <div className="app__splash__marketingblock">
          <div className="app__container">
            <h2> Are you 18 or older? </h2>
            <ul>
              <li>
                <div className="app__splash__age">
                  {user.isAuthenticated ? logoutBtn : loginBtn}
                </div>
              </li>
              <li>
                <div className="app__splash__age">
                  {underageBtn}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}
