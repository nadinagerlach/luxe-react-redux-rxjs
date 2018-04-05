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
      <Menu right >
        <a id="home" className="menu-item" href="/">Our Story</a>
        <a id="home" className="menu-item" href="/">Our Cigars</a>
        <a id="home" className="menu-item" href="/">Find Your Blend</a>
        <a id="home" className="menu-item" href="/">Locations</a>
        <a id="home" className="menu-item" href="/">Shop</a>
        <br />
        <a id="home" className="menu-item" href="/">Our Story</a>
        <i className="i-instagram" />
        <i className="i-facebook" />
        <i className="i-twitter" />
        <br />
        <a id="home" className="menu-item" href="/">Contact</a>
        <a id="home" className="menu-item" href="/">FAQ</a>
        <a id="home" className="menu-item" href="/">Terms</a>
        <a id="home" className="menu-item" href="/">Privacy</a>
        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
