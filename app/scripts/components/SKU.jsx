import React from 'react';
import Slider from 'react-slick';

export default class Dominican extends React.Component {
  render() {
    const baseUrl = 'https://res.cloudinary.com/jmtoabcco/image/upload/v1524155729';
    const sku = 'Dominican';
    const description = "JM Tobacco and its family of fine cigars brings you its most price point cigar, JM's Dominican. This cigar is hand rolled from well-aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, then carefully wrapped with beautiful Sumatran, Connecticut, Corojo or Broadleaf Maduro wrappers. JM's Dominicans are the perfect cigars for 'Your Daily Choice.'"
    let wrappers = ['Classic', 'Sumatra', 'Maduro', 'Conneticut', 'Corojo'];

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
      <div className={`background__${sku}`}>
        <div className="col-md-6 col-sm-12">
          <h2 className="our-cigars-heading">JM's {sku}</h2>
          <p className="cigar-caption">{description}</p>
        </div>
        <Slider {...settings} className="wow fadeInUp animated">
          <div>
            <img src={`${baseUrl}/${sku}/01.png`} alt={sku} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={sku} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/03.png`} alt={sku} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/04.png`} alt={sku} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/05.png`} alt={sku} />
          </div>
        </Slider>
      </div>
    );
  }
}
