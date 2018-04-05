import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from 'config';

import { login, logOut } from 'actions';
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
          <span>Yes!</span>
        </button>
      </NavLink>
    );

    const logoutBtn = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.handleClickLogout}
      >
        <i className="i-sign-out" />
        <span>(JK I was lying)</span>
      </button>
    );

    return (
      <div key="ClientEntry" className="app__home app__route">
        <div className="app__home__intro">
          <div className="app__container">
            <h1> Are you 18 or older? </h1>
            {user.isAuthenticated ? logoutBtn : loginBtn}
          </div>
        </div>
      </div>

    );
  }
}
