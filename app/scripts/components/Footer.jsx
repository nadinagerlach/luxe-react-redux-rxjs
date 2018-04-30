import React from 'react';
import cx from 'classnames';

import config from 'config';

import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => (
  <footer className="app__footer">

    <div className="gutters padding-none">
      <div className="subscribe text-center hidden-xs">
        <div className="subscribe-container">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <h5 className="uppercase" id="larger" >Your Daily Choice. Join Our Mailing List.</h5>
          </div>
          <div className="col-sm-3 col-md-3 col-xs-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Your Email" />
              <span className="input-group-btn">
                <button className="button" type="button" id="subscribe2">Subscribe</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe text-center visible-xs">
        <div className="subscribe-container">
          <div className="col-sm-6 col-md-6 col-xs-12">
            <h5 className="uppercase" id="larger" >Your Daily Choice.</h5>
          </div>
        </div>
      </div>
      <div className="mid-section-container col-sm-12 col-md-12 col-lg-12">
        <div className="col-xs-12 visible-xs contact-us-mobile">
          <div className="col-xs-12 contact-us-buttons">
            <button className="button col-xs-12"><i className="i-phone" />&nbsp;&nbsp;<NavLink
              to="contact"
              activeclassname="is-active"
              exact
            >Call us</NavLink></button>
            <button className="button col-xs-12"><i className="i-envelope" />&nbsp;&nbsp;<NavLink
              to="contact"
              activeclassname="is-active"
              exact
            >Email Us</NavLink></button>
          </div>
          <p className="col-xs-12 contact-us-title text-center">
            <NavLink
              to="/"
              className="app__footer__link"
              activeclassname="is-active"
              exact
              alt={config.title}
            >
              <Logo />
            </NavLink>
          </p>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8">
          <div className="app__footer__menu padding-none">
            <div className="hidden-xs col-sm-2 col-md-2 justify-center">
              <NavLink
                to="/"
                className="app__footer__link"
                activeclassname="is-active"
                exact
                alt={config.title}
              >
                <Logo />
              </NavLink>
            </div>
            <div className="hidden-xs col-sm-3 col-md-3">
              <p className="app__footer__menu__title margin-top">Company</p>
              <ul className=" padding-none">
                <li>
                  <NavLink
                    to="/our-story"
                    className="app__footer__link"
                    activeclassname="is-active"
                    exact
                  >
                Our Story
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-cigars"
                    className="app__footer__link"
                    activeclassname="is-active"
                    exact
                  >
                Our Cigars
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden-xs col-sm-3 col-md-3 ">
              <p className="app__footer__menu__title margin-top">Resources</p>
              <ul className=" padding-none">
                <li>
                  <NavLink
                    to="/find-your-blend"
                    className="app__footer__link"
                    activeclassname="is-active"
                    exact
                  >
                Find Your Blend
                  </NavLink>
                </li>
                {/* <li >
                  <NavLink
                    to="/locations"
                    activeclassname="is-active"
                    exact
                  >
                Locations
                  </NavLink>
                </li> */}
                {/* <li>
                  <a href="http://www.shop.jmtobacco.com" exact activeclassname="is-active" className="app__footer__link" >
                Shop
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="hidden-xs col-sm-3 col-md-3 ">
              <p className="app__footer__menu__title margin-top">Support</p>
              <ul className=" padding-none">
                <li>
                  <NavLink
                    to="/contact"
                    className="app__footer__link"
                    activeclassname="is-active"
                    exact
                  >Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="app__footer__link"
                    activeclassname="is-active"
                    exact
                  >
                Help &#38; FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden-xs col-sm-4 col-md-4 ">
          {/* <p className="app__footer__menu__title margin-top">Connect</p> */}
          <ul className="social-footer">
            <li id="social">
              <a href="https://facebook.com/JMTobacco" alt="Facebook"><i className="i-facebook" id="pad" /></a>
              <a href="https://instagram.com/JMTobacco" alt="Instagram"><i className="i-instagram" id="pad" /></a>
              <a href="https://twitter.com/JMTobacco" alt="Twitter"><i className="i-twitter" id="pad" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal-copyright-container row col-md-12 col-sm-12 col-lg-12">
        <div className="col-xs-12 visible-xs legal-mobile">
          <ul className="text-center padding-none navigational-links">
            <li>
              <NavLink
                to="/privacy"
                exact
              >Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                exact
              >Terms &amp; Conditions
              </NavLink>
            </li>
            <li><a href="http://www.dygn.co">Site by Dygn</a></li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 legal">
          <small>
            <p className="hidden-xs legal-content text-center">
              <NavLink
                to="/privacy"
                exact
              >
                Privacy Policy
              </NavLink> |
              <NavLink
                to="/terms"
                exact
              > Terms &amp; Conditions
              </NavLink> |
              <a href="http://www.dygn.co"> Site By Dygn</a>
            </p>
            <p className="legal-title text-center">
                        Copyright &copy;2018 JM Tobacco, Inc.
            </p>
          </small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
