import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
          <i className="i-chevron-circle-right"/>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="i-chevron-circle-left"/>
    </div>
  );
}
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Slider {...settings} className="app__carousel home__height">
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_30/v1513545808/home-hero-1_eyejxg.jpg" alt="First slide" />
          <div className="app__carousel__caption__home">
            <h1 className="app__carousel__title">Your Daily Choice</h1>
            <Link
              to="/our-cigars"
              className="button"
              activeclassname="is-active"
              exact
            >
              <div className="button-cell">
                <span className="button-text-wrapper">Our Cigars</span>
              </div>
            </Link>
            
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_30/v1513545808/home-hero-3_o7sds7.jpg" alt="Second slide" />
          <div className="app__carousel__caption__home">
            <h1 className="app__carousel__title">Espanola Fine Cigars</h1>
            <Link
              to="/our-story"
              className="button"
              activeclassname="is-active"
              exact
            >
              <div className="button-cell">
                <span className="button-text-wrapper">Our Story</span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_29/v1513545807/home-hero-2_cfkrph.jpg" alt="Third slide" />
          <div className="app__carousel__caption__home">

            <h1 className="app__carousel__title">Zoidian Cigars</h1>
            <Link
              to="/our-cigars"
              className="button"
              activeclassname="is-active"
              exact
            >
              <div className="button-cell">
                <span className="button-text-wrapper">An Affordable Luxury</span>
              </div>
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
