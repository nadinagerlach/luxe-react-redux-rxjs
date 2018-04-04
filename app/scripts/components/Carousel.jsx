import React, { Component } from 'react';
import Slider from 'react-slick';

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
      <div>
        <Slider {...settings}>
          <div>
            <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545808/home-hero-1_eyejxg.jpg" alt="First slide" />
            <h1>Your Daily Choice</h1>
            <p>
              <a href="#" className="button">
                <div className="button-cell">
                  <span className="button-text-wrapper">Our Cigars</span>
                </div>
              </a>
            </p>
          </div>
          <div>
            <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545808/home-hero-3_o7sds7.jpg" alt="Second slide" />
            <h1>Espanola Fine Cigars</h1>
            <p>
              <a href="#" className="button">
                <div className="button-cell">
                  <span className="button-text-wrapper">Our Story</span>
                </div>
              </a>
            </p>
          </div>
          <div>
            <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545807/home-hero-2_cfkrph.jpg" alt="Third slide" />
            <h1>Zoidian Cigars</h1>
            <h1 className="headline-bottom">An Affordable Luxury</h1>
            <p>
              <a href="#" className="button">
                <div className="button-cell">
                  <span className="button-text-wrapper">Our Cigars</span>
                </div>
              </a>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
