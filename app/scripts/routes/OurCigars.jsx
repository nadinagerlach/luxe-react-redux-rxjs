import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// import classnames from 'classnames';
import Dominican from '../components/SKU/Dominican';
import DominicanHoney from '../components/SKU/Dominican-Honey';
import DominicanBoyGirl from '../components/SKU/Dominican-Boy-Girl';
import Nicaraguan from '../components/SKU/Nicaraguan';
import Espanola from '../components/SKU/Espanola';
import Zoidian from '../components/SKU/Zoidian';

export default class OurCigars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Our Cigars',
      tagline: 'Discover JM',
      button: 'Our Cigars',
    };
  }
  click() {
    this.setState({ active: true });
  }
  render() {
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/v1516077484/cigars-hero_whoajk.jpg';
    // Lighting one cream
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const title = this.state.title;
    const tagline = this.state.tagline;
    const button = this.state.button;

    return (
      <div key="OurCigars" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={style_1}>
            <h1 className="title">{title}</h1>
            <h4 className="tagline">{tagline}</h4>
            <div className="navigation">
              <div className="navigation__button">
                <Link to="/our-cigars/#Dominican" className="button">
                  <div className="button-cell">
                    <span className="button-text-wrapper">
                      Dominican
                    </span>
                  </div>
                </Link>
              </div>
              <div className="navigation__button"><Link smooth to="/our-cigars/#Nicaraguan" className="button button-blue"><div className="button-cell"><span className="button-text-wrapper">Nicaraguan</span></div></Link></div>
              <div className="navigation__button"><Link smooth to="/our-cigars/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">Espanola</span></div></Link></div>
              <div className="navigation__button"><Link smooth to="/our-cigars/#Zoidian" className="button button-burg"><div className="button-cell"><span className="button-text-wrapper">Zoidian</span></div></Link></div>
            </div>
          </div>
        </div>
        <Dominican />
        <DominicanHoney />
        <DominicanBoyGirl />
        <Nicaraguan />
        <Espanola />
        <Zoidian />
      </div>

    );
  }
}

