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
        activeclassname="is-active"
        exact
        alt={config.title}
      >
          <a className="button" onClick={this.handleClickLogin}>
                <div className="button-cell">
                  <span className="button-text-wrapper">Yes I am!</span>
                </div>
              </a>
      </NavLink>
    );

    const logoutBtn = (
      <a className="button"  onClick={this.handleClickLogout}>
      <div className="button-cell">
        <span className="button-text-wrapper">Thanks!</span>
      </div>
    </a>
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
          <div className="app__container">
            <Logo />
            <h2>THE ORIGIN OF CIGARS HAS ALWAYS BEEN A MYSTERY. HOPEFULLY YOURS ISN'T.</h2>
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
            <p>
            This site uses cookies. Cookie Policy. I agree to the terms of use, and the privacy policy. This information will not be used for marketing purposes.
              </p>
          </div>
        </div>
      </div>

    );
  }
}
