import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from 'config';

import { login, logOut } from 'actions';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default class Header extends React.Component {
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
        <span>Login</span>
      </button>
    );

    const logoutBtn = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.handleClickLogout}
      >
        <i className="i-sign-out" />
        <span>logout</span>
      </button>
    );

    const menuBurger = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.handleClickLogout}
      >
        <i className="i-bars" />
      </button>
    );

    return (
      <header className="app__header">
        <div className="app__container">
          <ul className="app__header__menu">
            <li>
              <NavLink
                to="/"
                className="app__header__link"
                activeClassName="is-active"
                exact
                alt={config.title}
              >
                <Logo />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-cigars"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Our Cigars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-your-blend"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Find Your Blend
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className="app__header__link"
                activeClassName="is-active"
                exact
              >
                Locations
              </NavLink>
            </li>
            <li>
              <a href="http://www.shop.jmtobacco.com" exact activeClassName="is-active" className="app__header__link" >
                Shop
              </a>
            </li>
            <li>
              {user.isAuthenticated ? menuBurger : loginBtn}
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
