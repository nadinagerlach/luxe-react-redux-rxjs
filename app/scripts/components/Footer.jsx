import React from 'react';
import cx from 'classnames';

import config from 'config';

import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => (
  <footer className="app__footer">
    <div className="app__container padding-none">
      <div className="row subscribe text-center">
        <div className="subscribe-container">
          <div className="col-xs-12 col-md-6 col-sm-6 subscribe-title">
                Your Daily Choice. Join Our Mailing List.
          </div>
          <div className="col-xs-12 col-md-6 col-sm-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter your Email" />
              <span className="input-group-btn">
                <button className="btn subscribe-btn" type="button">Subscribe</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mid-section-container">
        <div className="col-xs-12 visible-xs contact-us-mobile">
          <div className="col-xs-12 contact-us-buttons">
            <button className="btn col-xs-12"><i className="i-phone" />&nbsp;&nbsp;Find a Store Near You</button>
            <button className="btn col-xs-12"><i className="i-envelope" />&nbsp;&nbsp;Email Us</button>
          </div>
          <p className="col-xs-12 contact-us-title  text-center">JM Tobacco®</p>
          <a href="#" className="col-xs-12 text-center">1000 North Main Street.<br />Mansfield, TX. 76063<br />USA</a>
        </div>
        <div >
          <div className="hidden-xs col-sm-4 col-md-2 justify-center app__footer__menu ">
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
            <p className="margin-top">Company</p>
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
            <p className=" margin-top">Resources</p>
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
              <li                   className="app__footer__link">
                <NavLink
                  to="/locations"
                  activeclassname="is-active"
                  exact
                >
                Locations
                </NavLink>
              </li>
              <li>
                <a href="http://www.shop.jmtobacco.com" exact activeclassname="is-active" className="app__footer__link" >
                Shop
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden-xs col-sm-3 col-md-3 ">
            <p className=" margin-top">Support</p>
            <ul className=" padding-none">
              <li><a href="#">Contact</a></li>
              <li>
                <NavLink
                  to="/locations"
                  className="app__footer__link"
                  activeclassname="is-active"
                  exact
                >
                Help and FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-2 ">
            <p className="margin-top">Connect</p>
            <i className="i-facebook-square fa-2x" />
            <i className="i-twitter-square fa-2x" />
            <i className="i-instagram" />
          </div>
        </div>
      </div>
      <div className="row legal-copyright-container">
        <div className="col-xs-12 visible-xs legal-mobile">
          <ul className="text-center padding-none navigational-links">
            <li><a href="http://www.mouser.com/privacypolicy/">Privacy Policy</a></li>
            <li><a href="http://www.mouser.com/saleterms/">Terms &amp; Conditions</a></li>
            <li><a href="http://www.dygn.co">Site by Dygn</a></li>
          </ul>
        </div>
        <div className=" col-sm-12 col-md-12 col-lg-12 legal">
          <small>
            <p>
              <a href="http://www.mouser.com/privacypolicy/">Privacy Policy</a> |
              <a href="http://www.mouser.com/saleterms/">Terms &amp; Conditions</a> |
              <a href="http://www.dygn.co">Site By Dygn</a>
            </p>
            <p className="legal-title">
                        Copyright &copy;2017 JM Tobacco, Inc.
            </p>
            <p className="legal-content">
                        JM's&copy; and JM Tobacco &copy; are trademarks of JM Tobacco, Inc.
                        All other trademarks are the property of their respective owners. Corporate headquarters
                        and logistics center in Los Angeles, California USA.
            </p>
          </small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
