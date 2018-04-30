import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import config from 'config';

import { login, logOut } from 'actions';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { BurgerMenu } from './Menu';

export default class Header extends React.Component {
  render() {  
  return (
      <header className="app__header">
        <div className="gutters">
          <ul className="app__header__menu">
            <li>
              <NavLink
                to="/home"
                className="app__header__link"
                activeclassname="is-active"
                exact
                alt={config.title}
              >
                <Logo />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-story"
                className="app__header__link"
                activeclassname="is-active"
                exact
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-cigars"
                className="app__header__link"
                activeclassname="is-active"
                exact
              >
                Our Cigars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-your-blend"
                className="app__header__link"
                activeclassname="is-active"
                exact
              >
                Find Your Blend
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/locations"
                className="app__header__link"
                activeclassname="is-active"
                exact
              >
                Locations
              </NavLink>
            </li> */}
            {/* <li>
              <a href="http://www.facebook.com" exact activeclassname="is-active" className="app__header__link" >
                Shop
              </a>
            </li> */}
            <li id="invisible">
              Invii
            </li>
            <BurgerMenu />

          </ul>
        </div>
      </header>
    );
  }
}
