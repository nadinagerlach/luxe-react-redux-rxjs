import React from 'react';
import cx from 'classnames';

import { slide as Menu } from 'react-burger-menu';

import { NavLink } from 'react-router-dom';

export class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }


  render() {
    return (
      <Menu right>
        <span className="app__bm">
          <ul className="app__bm__nav">
            <li id="sub">
              <NavLink
                to="/our-story"
                activeclassname="is-active"
                exact
              >
                Our Story
              </NavLink>
            </li>
            <li id="sub">
              <NavLink
                to="/our-cigars"
                activeclassname="is-active"
                exact
              >
                Our Cigars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-your-blend"
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
            <li className="separator social">
              <ul className="app__bm__nav">
                <li id="social">
                  <a href="https://facebook.com/JMTobacco" alt="Facebook"><i className="i-facebook" /></a>
                </li>
                <li id="social">
                  <a href="https://instagram.com/JMTobacco" alt="Instagram"><i className="i-instagram" /></a>
                </li>
                <li id="social">
                  <a href="https://twitter.com/JMTobacco" alt="Twitter"><i className="i-twitter" /></a>
                </li>
              </ul>
            </li>
            <li className="separator social">
              <ul className="app__bm__nav">
                <li id="sub">
                  <a id="sub" href="/">Contact us</a>
                </li>
                <li id="sub">
                  <a id="sub" href="/">Help &#38; FAQ</a>
                </li>
                <li id="sub">
                  <a id="sub" href="/">Terms &#38; Conditions</a>
                </li>
                <li id="sub">
                  <a id="sub" href="/">Privacy Policy</a>
                </li>
              </ul>
            </li>
          </ul>
        </span>
      </Menu>
    );
  }
}
