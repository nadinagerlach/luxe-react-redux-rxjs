import React from 'react';
import Slider from 'react-slick';

              
export default class Nicaraguan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525198437',
      allSkus: ['Nicaraguan', 'Nicaraguan-Honey', 'Conneticut', 'Corojo'],
      description: "JM's Nicaraguan Cigars are the newest addition to the JM family. These cigars are hand rolled from well-aged Nicarguan Cuban seed tobacco leaves, grown in the rich region of Estelli, Nicaragua. They are then wrapped with beautiful Sumatra and Maduro wrappers. The medium-bodied Nicaraguan delivers a creamy-smooth smoke, with hints of chocolate and spice, sure to please the palate. ",
      wrappers: ['Sumatra', 'Maduro'],
      sku: 'Nicaraguan',
      name: "JM's Nicaraguan",
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
            <img src={`${baseUrl}/${sku}/0${i+1}.png`} alt={wrappers[i]} />
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
            <img src={`${baseUrl}/${sku}/01.png`} alt={wrappers[1]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={wrappers[2]} />
          </div>
        </Slider>
      </div>
    );
  }
}
