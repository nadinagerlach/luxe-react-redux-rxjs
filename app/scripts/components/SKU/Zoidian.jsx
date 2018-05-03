import React from 'react';
import Slider from 'react-slick';
              
export default class Zoidian extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525198443',
      allSkus: ['Zoidian', 'Zoidian-Honey', 'Conneticut', 'Corojo'],
      description: "Zoidian Cigars, with its Maduro and Sumatran wrappers, features a medium bodied cigar that offers notes of dark caramel, with a hint of spice at the finish. Its smooth, even burn, yields consistency from beginning to end. This cigar delivers a pleasant smoke at an affordable price. Enjoy Zoidian Cigars…An Affordable Luxury.",
      wrappers: ['Natural', 'Maduro'],
      sku: 'Zoidian',
      name: "Zoidian Cigars",
    };
  }

  render() {
    const baseUrl = this.state.baseUrl;
    const name = this.state.name;
    const sku = this.state.sku;
    const wrappers = this.state.wrappers;
    const description = this.state.description;

    const settings = {
      customPaging(i) {
        return (
          <a>
            <img src={`${baseUrl}/${sku}/0${i + 1}.png`} alt={wrappers[i]} />
            <h6 className="caption">{wrappers[i]}</h6>
          </a>
        );
      },
      dots: true,
      fade: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={`background__${sku}`} id={sku}>
        <div className="col-md-6 col-sm-10 cigar-gutters">
          <h2 className="our-cigars-heading">{name}</h2>
          <p className="cigar-caption">{description}</p>
        </div>
        <Slider {...settings} className="wow fadeInUp animated" id="skuimg">
          <div>
            <img src={`${baseUrl}/${sku}/01.png`} alt={wrappers[0]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={wrappers[1]} />
          </div>
        </Slider>
      </div>
    );
  }
}
