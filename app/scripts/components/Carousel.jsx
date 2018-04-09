import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };
    return (
      <Slider {...settings} className="app__carousel">
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_30/v1513545808/home-hero-1_eyejxg.jpg" alt="First slide" />
          <p className="app__carousel__caption">
          <h1 className="app__carousel__title">Your Daily Choice</h1>
            <a href="#" className="button" >
              <div className="button-cell">
                <span className="button-text-wrapper">Our Cigars</span>
              </div>
            </a>
          </p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_30/v1513545808/home-hero-3_o7sds7.jpg" alt="Second slide" />
          <p className="app__carousel__caption">
          <h1 className="app__carousel__title">Espanola Fine Cigars</h1>
          <Link
          to="/home"
          className="button"
          activeclassname="is-active"
          exact
          >
                        <div className="button-cell">
                <span className="button-text-wrapper">Our Story</span>
              </div>
          </Link>
          </p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_29/v1513545807/home-hero-2_cfkrph.jpg" alt="Third slide" />
          <p className="app__carousel__caption">

          <h1 className="app__carousel__title">Zoidian Cigars</h1>
              <a href="#" className="button" >
              <div className="button-cell">
                <span className="button-text-wrapper">An Affordable Luxury</span>
              </div>
            </a>
          </p>
        </div>
      </Slider>
    );
  }
}
