import React from 'react';
import Slider from 'react-slick';
import { HashLink as Jump } from 'react-router-hash-link';

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
          <div className="app__page__intro__container" style={style_1}>
            <div className="app__page__intro__caption">
              <h1 className="app__page__intro__title">{title}</h1>
              <h4 className="app__page__intro__tagline">{tagline}</h4>
              <div className="app__page__intro__navigation">
                <div className="app__page__intro__navigation__button"><Jump to="/ourcigars/#Dominican" className="button" id="yellow"><div className="button-cell"><span className="button-text-wrapper">Dominican</span></div></Jump></div>
                <div className="app__page__intro__navigation__button"><Jump to="/ourcigars/#Nicaraguan" className="button" id="blue"><div className="button-cell"><span className="button-text-wrapper">Nicaraguan</span></div></Jump></div>
                <div className="app__page__intro__navigation__button"><Jump to="/ourcigars/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">Espanola</span></div></Jump></div>
                <div className="app__page__intro__navigation__button"><Jump to="/ourcigars/#Zoidian" className="button" id="burgundyred"><div className="button-cell"><span className="button-text-wrapper">Zoidian</span></div></Jump></div>
              </div>
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

