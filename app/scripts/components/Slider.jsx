import React from 'react';
import PropTypes from 'prop-types';
// TO DO: INSTALL REACT- SLICK NPM PACKAGE
import Slider from 'react-slick';

import config from 'config';

import { NavLink } from 'react-router-dom';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const logoutBtn = (
      <button
        className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
        onClick={this.location}
      >
        <i className="i-sign-out" />
        <span>View Our Cigars</span>
      </button>
    );

    return (
      <div className="app__container">
          <section className="portfolio__slideshow">
          <Slider {...settings}>
            <div className="slide">
              <div id="lemonhead" className="slide__image" alt="Lemonhead" />
              <div className="slide__text">
                <h2>Lemonhead</h2>
                <p><a href="https://www.getlemonhead.com/media/" target="_blank" tabIndex="-1">www.lemonhead.la
                     </a>
                </p>
              </div>
            </div>
            <div className="slide">
              <div id="img2" className="slide__image" alt="smoke.oil.salt" />
              <div className="slide__text">
                <h2>smoke.oil.salt</h2>
                <p><a href="https://www.google.com/search?ei=Y9JWWrrKBJq4jAO45ZyoCg&q=smoke.oil.salt+Fleishman+Group&oq=smoke.oil.salt+Fleishman+Group&gs_l=psy-ab.3...1233.7205.0.7467.30.23.0.0.0.0.430.2892.11j2j2j2j1.18.0....0...1c.1.64.psy-ab..12.11.2292...0j46j0i67k1j0i131k1j0i46k1j0i10k1j0i30k1j0i22i30k1j33i160k1.0.rg-l_66GBEE" target="_blank" tabIndex="-1">Archived
                     </a>
                  </p>
              </div>
            </div>
            <div className="slide">
              <div id="img3" className="slide__image" alt="Bobalu Nuts" />
              <div className="slide__text">
                <h2>Bobalu Nuts</h2>
                <p><a href="http://bobalunuts.com/" target="_blank" tabIndex="-1">www.bobalunuts.com
                  </a>
                  </p>

              </div>
            </div>

          </Slider>
        </section>
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
            <a href="http://www.shop.jmtobacco.com" exact activeClassName="is-active" className="app__header__link" >
                Shop
            </a>
          </li>
          <li>
            {user.isAuthenticated ? menuBurger : loginBtn}
          </li>
        </ul>
      </div>
    );
  }
}
