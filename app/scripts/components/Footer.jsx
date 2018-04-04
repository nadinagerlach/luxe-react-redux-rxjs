import React from 'react';
import cx from 'classnames';

import config from 'config';

import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => (
  <footer className="app__footer">
    <div className="app__container">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <h4>Your Daily Choice. Join Our Mailing List.</h4>
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSfYzqGriJLvrcGl1fsyNiijTRZZsPOuFfR3miNNh_XYefuGeA/formResponse" method="post" id="application-form" target="_blank">
          <div className="form-group">
            <input
              type="text" name="entry.1045781291" value="" className="email"
              id="entry_1045781291" dir="auto" aria-label="Email  " aria-required="true"
              placeholder="Email" type="text"
            />
            <input
              type="submit" id="submit" className="btn" name="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
    <div className="app__container">
      <div className="app__footer__menu">
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
              to="/our-story"
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
            <NavLink
              to="/locations"
              className="app__header__link"
              activeClassName="is-active"
              exact
            >
                Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className="app__header__link"
              activeClassName="is-active"
              exact
            >
                Help and FAQ
            </NavLink>
          </li>
          <li>
            <a href="http://www.shop.jmtobacco.com" exact activeClassName="is-active" className="app__header__link" >
                Shop
            </a>
          </li>
        </ul>
        <i className="i-instagram" />
        <i className="i-facebook" />
        <i className="i-twitter" />
      </div>
    </div>
    <div className="app__container">
      <hr className="col-md-12" />
      <div className="d-flex p-2 justify-content-center align-content-center flex-wrap footer-rights">
        <span>&copy; 2018 {config.title} All Right Reserved. |</span>
        <span>&ensp; &#x205C;	&ensp;</span>
        <a href="https://www.facebook.com/JMTobacco/" className="footer-rights">Terms &amp; Privacy</a>
        <span>&ensp; &#x205C;	&ensp;</span>
        <a href="http://www.dygn.co" className="footer-rights"> Site by Dygn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
