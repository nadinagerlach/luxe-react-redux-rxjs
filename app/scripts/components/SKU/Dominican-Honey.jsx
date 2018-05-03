import React from 'react';
import Slider from 'react-slick';

export default class DominicanHoney extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1525198423',
      allSkus: ['Dominican', 'Dominican-Honey', 'Conneticut', 'Corojo'],
      description: "JM's Dominican Honeys combine smooth cigars with exotic flavors. A rich Sumatran wrapper compliments the right blend of flavoring, producing the delicious taste and an irresistible aroma everyone will love. JM's Dominican Honeys are available in Natural, Vanilla, Berry and Rum flavors.",
      wrappers: ['Honey', 'Rum', 'Vanilla', 'Berry'],
      sku: 'Dominican-Honey',
      name: "JM's Dominican Honey",
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
        <Slider {...settings} className="wow fadeInUp animated " id="skuimg">
          <div>
            <img src={`${baseUrl}/${sku}/01.png`} alt={wrappers[0]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/02.png`} alt={wrappers[1]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/03.png`} alt={wrappers[2]} />
          </div>
          <div>
            <img src={`${baseUrl}/${sku}/04.png`} alt={wrappers[3]} />
          </div>
        </Slider>
      </div>
    );
  }
}
