import React from 'react';
import Slider from 'react-slick';

export default class DominicanBoyGirl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525198413',
      allSkus: ['Dominican', 'Dominican-Honey', 'Conneticut', 'Corojo'],
      description: "Celebrate and announce the special occasion with our JM's Dominican It's a Boy! and It's a Girl! cigars. Our cigars are hand rolled from well aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, with a beautiful Sumatra wrapper.  Each cigar is individually cellophaned and labeled, making it a wonderful gift, you'll always cherish.",
      wrappers: ["It's a Boy", "It's a Girl"],
      sku: 'Dominican-Boy-Girl',
      name: "It's A Boy | It's A Girl",
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
        <div className="col-md-6 col-sm-10 col-xs-10 cigar-gutters">
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
