import React from 'react';
import Slider from 'react-slick';

              
export default class Espanola extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525198429',
      allSkus: ['Espanola'],
      description: "Created in the Espanola Republic over 20 years ago by craftsmen schooled in their long standing tradition, the Española cigar combines the finest, most patiently cultivated tobaccos, to create a smoke like no other. This cigar is smooth and well-balanced with a subtle sweetness gleaned from its Connecticut and Maduro wrappers. The Española Fine Cigar gives the smoker a pleasure that can only be gained by cigars made in the time-honored tradition. ",
      wrappers: ['Maduro', 'Conneticut'],
      sku: 'Espanola',
      name: "Espanola Fine Cigars",
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
      {/* Cream and gold espanola */}
        <div className="col-md-6 col-sm-10 cigar-gutters">
          <h2 className="our-cigars-heading">{name}</h2>
          <p className="cigar-caption">{description}</p>
        </div>
        <Slider {...settings} className="wow fadeInUp animated" id="skuimg">
          <div>
            <img src={`${baseUrl}/${sku}/01.png`} alt={wrappers[0]} /> 
            {/* CT */}
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={wrappers[1]} />
            {/* Maduro */}
          </div>
        </Slider>
      </div>
    );
  }
}
