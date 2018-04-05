import React, { Component } from 'react';
import Slider from 'react-slick';

import { baseCloudinaryUrl } from './config';

export default class SKU extends Component {
  render() {
    const settings = {
      customPaging(i) {
        return (
          <a>
            <img src={`${baseCloudinaryUrl}/${sku}${wrapper}0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={`${baseCloudinaryUrl}/zmaduro01.jpg`} />
          </div>
          <div>
            <img src={`${baseCloudinaryUrl}/maduro02.jpg`} />
          </div>
          <div>
            <img src={`${baseCloudinaryUrl }/maduro03.jpg`} />
          </div>
          <div>
            <img src={`${baseCloudinaryUrl}/maduro04.jpg`} />
          </div>
        </Slider>
      </div>
    );
  }
}
