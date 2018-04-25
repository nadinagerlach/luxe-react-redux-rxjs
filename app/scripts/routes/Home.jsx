import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ActionTypes } from 'constants/index';
import { fetchLatestPosts } from 'actions/index';


import SVG from 'react-inlinesvg';
import Carousel from '../components/Carousel';
import Instagram from '../components/Instagram';

import Loader from '../components/Loader';
import Search from '../components/Search';
export class Home extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,e_brightness:6,o_40/v1513545808/home-hero-1_eyejxg.jpg';
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };


    return (
      <div key="Home" className="app__home app__route" >
        <div className="app__home__intro">
          <Carousel />
        </div>
        <Search />
        <Instagram />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { instagram: state.instagram };
}

export default connect(mapStateToProps)(Home);
