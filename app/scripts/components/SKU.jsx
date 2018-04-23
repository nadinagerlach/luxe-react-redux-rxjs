import React from 'react';
import Slider from 'react-slick';


{ /* <SkusList skus={this.state.allSkus} />

let SkusList = (props) => (
  //dynamically render one SkuListEntry component for each object in json
  <div className="skus-list">
    {props.skus.map((sku, i)  =>
      <SkuEntry sku={sku} key={i} />
    )}
  </div>
);

let SkuListEntry = (props) => (
  <div className="sku-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.sku.snippet.thumbnails.default.url} />
      <img src={`${baseUrl}/${props.sku.name}/02.png`} alt={props.sku.name} />
    </div>
    <div className="media-body">
      <div className="sku-list-entry-title">{props.sku.name}</div>
      <div className="sku-list-entry-detail">{props.sku.description}</div>
    </div>
  </div>
); */ }

export default class Dominican extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl: 'https://res.cloudinary.com/jmtoabcco/image/upload/v1524155729',
      allSkus: ['Dominican', 'Dominican-Honey', 'Conneticut', 'Corojo'],
      description: "JM Tobacco and its family of fine cigars brings you its most price point cigar, JM's Dominican. This cigar is hand rolled from well-aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, then carefully wrapped with beautiful Sumatran, Connecticut, Corojo or Broadleaf Maduro wrappers. JM's Dominicans are the perfect cigars for 'Your Daily Choice.'",
      wrappers: ['Classic', 'Sumatra', 'Maduro', 'Conneticut', 'Corojo'],
      sku: 'Dominican',
    };
  }

  render() {
    const baseUrl = this.state.baseUrl;
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
      <div className={`background__${sku}`}>
        <div className="col-md-6 col-sm-12">
          <h2 className="our-cigars-heading">JM's {sku}</h2>
          <p className="cigar-caption">{description}</p>
        </div>
        <Slider {...settings} className="wow fadeInUp animated our-cigars__height">
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
