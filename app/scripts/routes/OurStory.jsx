import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import photo from '../../../assets/media/images/our-story/about-fw2.jpg';

export default class OurStory extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  componentWillMount() {
    const { dispatch } = this.props;
  }

  render() {
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/v1516077521/about-hero_kh6xoe.jpg';
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const imgUrl_2 = photo;
    const style_2 = {
      backgroundImage: `url("${imgUrl_2}")`,
    };

    return (
      <div key="OurStory" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__container" style={style_1}>
            <h1 className="app__page__intro__title">Born to make cigars</h1>
            <h4 className="app__page__intro__tagline">The story of JM Tobacco, Inc.</h4>
            <div className="app__page__intro__navigation">
              <div className="app__page__intro__navigation__button">
                <Link to="/ourstory/#1977" className="button"><div className="button-cell"><span className="button-text-wrapper">1975-1985</span></div></Link>
              </div>
              <div className="app__page__intro__navigation__button">
                <Link to="/ourstory/#1995" className="button"><div className="button-cell"><span className="button-text-wrapper">1986-1995</span></div></Link>
              </div>
              <div className="app__page__intro__navigation__button">
                <Link to="/ourstory/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">1996-2005</span></div></Link>
              </div>
              <div className="app__page__intro__navigation__button">
                <Link to="/ourstory/#2006" className="button"><div className="button-cell"><span className="button-text-wrapper">2006-Present</span></div></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="app__page__marketingblock" style={style_2}>
            <div className="col-md-7">
              <p className="hero">Crafting something that endures takes time and character. You’ll find plenty of both in the people and history that make JM Tobacco.</p>
            </div>
          </div>
          <div className="app__page__marketingblock">
          <div className="app__page__marketingblock__container">
            <div className="col-md-7 order-md-2">
                  <h2 className="our-story-heading" id="1977" >1977</h2>
              <p className="lead">Anto Mahroukian, current President of JM Tobacco, was born.</p>
                </div>
            <div className="col-md-5 order-md-1">
              <img className="our-story-image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759908/1977_my3iiu.jpg" alt="1977" />
            </div>
          </div>
          <div className="app__page__marketingblock__container">
            <div className="col-md-7">
                  <h2 className="our-story-heading" id="1995" >1995</h2>
              <p className="lead">It all began with an expensive birthday gift; a pricey cigar from Anto Mahroukian to his father, John Mahroukian. This led to the birth of JM Tobacco, Inc.</p>
            </div>
            <div className="col-md-5">
              <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759912/1995_mbtvxt.jpg" alt="1995" />
            </div>
          </div>
          <div className="app__page__marketingblock__container">
            <div className="col-md-7 order-md-2">
              <h2 className="our-story-heading" id="Espanola" >1996</h2>
              <p className="lead">JM Tobacco Releases it"s first cigar: Espanola Gold Label.</p>
                </div>
            <div className="col-md-5 order-md-1">
              <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759943/1996_sinwf3.jpg" alt="1996" />
            </div>
          </div>
          <div className="app__page__marketingblock__container">
            <div className="col-md-7">
              <h2 className="our-story-heading" id="2000" >2000</h2>
              <p className="lead">JM's Dominican is launched.</p>
                </div>
            <div className="col-md-5">
              <img className="our-story-image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516760386/2000_htr7hv.jpg" alt="2000" />
            </div>
          </div>

          <div className="app__page__marketingblock__container">
            <div className="col-md-7 order-md-2">
              <h2 className="our-story-heading" id="2006" >2006</h2>
                  <p className="lead">Anto Mahroukian takes over as President of JM Tobacco, Inc.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759909/2006_mgy8rk.jpg" alt="2006" />
            </div>
          </div>

          <div className="app__page__marketingblock__container">
            <div className="col-md-7">
              <h2 className="our-story-heading" id="2017" >2017</h2>
              <p className="lead">JM Tobacco introduces Zoidian cigars.</p>
            </div>
            <div className="col-md-5">
              <img className="our-story-image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759924/2017_fwqk2l.jpg" alt="2017" />
            </div>
          </div>
         

	</div>
</div>
    );
  }
}

