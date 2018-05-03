import React from 'react';
import Slider from 'react-slick';

export default class Dominican extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525211678',
      allSkus: ['Dominican', 'Dominican-Honey', 'Conneticut', 'Corojo'],
      description: "JM Tobacco and its family of fine cigars brings you its most price point cigar, JM's Dominican. This cigar is hand rolled from well-aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, then carefully wrapped with beautiful Sumatran, Connecticut, Corojo or Broadleaf Maduro wrappers. JM's Dominicans are the perfect cigars for 'Your Daily Choice.'",
      wrappers: ['Sumatra', 'Maduro', 'Conneticut', 'Corojo'],
      sku: 'Dominican',
      name: "JM's Dominican",
    };
  }

  render() {
    const baseUrl = this.state.baseUrl;
    const name = this.state.name;
    const sku = this.state.sku;
    const wrappers = this.state.wrappers;
    const description = this.state.description;

    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/v1516763319/about-dom_rsboes.jpg';


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
      <div className={`background__${sku}`} id={sku} >
        <div className="col-md-6 col-sm-10 cigar-gutters">
          <h2 className="our-cigars-heading">{name}</h2>
          <p className="cigar-caption">{description}</p>
        </div>
        <Slider {...settings} className="wow fadeInUp animated" >
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={wrappers[1]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/03.png`} alt={wrappers[2]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/04.png`} alt={wrappers[3]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/05.png`} alt={wrappers[4]} />
          </div>
        </Slider>
      </div>
    );
  }
}
