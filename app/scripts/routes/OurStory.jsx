import React from 'react';
import { HashLink as Jump } from 'react-router-hash-link';
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
    const introImg = 'https://res.cloudinary.com/dygn/image/upload/v1516077521/about-hero_kh6xoe.jpg';
    const intro1 = {
      backgroundImage: `url("${introImg}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const aboutImg = photo;
    const about = {
      backgroundImage: `url("${aboutImg}")`,
    };
    const espImg = 'https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,o_36/v1524680578/es-fw5_wnrkv4.jpg';
    const espanola = {
      backgroundImage: `url("${espImg}")`,
    };
    const domImg = 'https://res.cloudinary.com/dygn/image/upload/v1516077492/dom-fw2_ujwa5c.jpg';
    const dominican = {
      backgroundImage: `url("${domImg}")`,
    };
    const zoidImg = 'https://res.cloudinary.com/dygn/image/upload/o_100/v1524694310/zoid2_peqhwj.gif';
    const zoidian = {
      backgroundImage: `url("${zoidImg}")`,
    };

    const opacity2 = {
      opacity: '.6',
    };

    const animate ='wow fadeIn animated';

    return (
      <div key="OurStory" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__container" style={intro1}>
            <h1 className="app__page__intro__title">Born to make cigars</h1>
            <h4 className="app__page__intro__tagline">The story of JM Tobacco, Inc.</h4>
            <div className="app__page__intro__navigation">
              <div className="app__page__intro__navigation__button">
                <Jump to="/ourstory/#1977" className="button"><div className="button-cell"><span className="button-text-wrapper">1975-1985</span></div></Jump>
              </div>
              <div className="app__page__intro__navigation__button">
                <Jump to="/ourstory/#1995" className="button"><div className="button-cell"><span className="button-text-wrapper">1986-1995</span></div></Jump>
              </div>
              <div className="app__page__intro__navigation__button">
                <Jump to="/ourstory/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">1996-2005</span></div></Jump>
              </div>
              <div className="app__page__intro__navigation__button">
                <Jump to="/ourstory/#2006" className="button"><div className="button-cell"><span className="button-text-wrapper">2006-Present</span></div></Jump>
              </div>
            </div>
          </div>
        </div>
        <div className="app__page__marketingblock" style={about}>
          <div className="col-md-7">
            <p className="hero">Crafting something that endures takes time and character. You’ll find plenty of both in the people and history that make JM Tobacco.
              <div className="line-div wow fadeIn animated">&#8214;</div>
            </p>
          </div>
        </div>
        <div className="app__page__marketingblock">
          <div className="app__page__marketingblock__container">
            <div className="col-md-7 col-sm-7 col-xs-12">
              <h4 className="app__page__marketingblock__subcategory wow fadeIn animated" id="1977" >1977-1985</h4>
              <h1 className="app__page__marketingblock__heading wow fadeIn animated" id="1977" >Our Founding</h1>
              <p className="lead wow fadeIn animated">The early years that began the JM legacy.
              <div className="line-div wow fadeIn animated">&#8214;</div>

              </p>

              <h2 className="app__page__marketingblock__subtitle wow fadeIn animated" id="1977" >1977</h2>
              <p className="lead wow fadeIn animated">Anto Mahroukian, current President of JM Tobacco, was born.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>
              <h2 className="our-story-heading wow fadeIn animated" id="1995" >1995</h2>
              <p className="lead wow fadeIn animated">It all began with an expensive birthday gift; a pricey cigar from Anto Mahroukian to his father, John Mahroukian. This led to the birth of JM Tobacco, Inc.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-5">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759908/1977_my3iiu.jpg" alt="1977" style={opacity2} />
            </div>
          </div>
        </div>
        <div className="app__page__marketingblock wow fadeIn animated" style={espanola}>
          <div className="app__page__marketingblock__container">
          {/* <div className="col-md-5 col-sm-5 col-xs-12">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759912/1995_mbtvxt.jpg" alt="1995" />
            </div> */}
        </div>
        <h4 className="app__page__marketingblock__subcategory wow fadeIn animated" id="1977" >1977-1985</h4>
              <h1 className="app__page__marketingblock__heading wow fadeIn animated" id="1977" >Coming of Age</h1>
              <p className="lead wow fadeIn animated">The JM brand comes of age, transforming from a little known daily indulgence to an American icon as synonymous with rock and roll as the electric guitar.</p>

              
          <div className="app__page__marketingblock__container">
            <div className="col-md-5 col-sm-5 col-xs-5">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759912/1995_mbtvxt.jpg" alt="1995" />
          </div>
            <div className="col-md-7 col-sm-7 col-xs-12 order-md-2">
              <h2 className="our-story-heading wow fadeIn animated" id="Espanola" >1996</h2>
              <p className="lead wow fadeIn animated">JM Tobacco Releases its first cigar: Espanola Gold Label.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>

            </div>
          </div>
        </div>
        <div className="app__page__marketingblock" >
          <div className="app__page__marketingblock__container">
            <div className="col-md-5 col-sm-5 col-xs-5">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516760386/2000_htr7hv.jpg" alt="2000" />
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <h2 className="our-story-heading wow fadeIn animated" id="2000" >2000</h2>
              <p className="lead wow fadeIn animated">JM's Dominican is launched.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>

            </div>
          </div>
        </div>
        <div className="app__page__marketingblock wow fadeIn animated" >
        <h4 className="app__page__marketingblock__subcategory wow fadeIn animated" id="1977" >1977-1985</h4>
              <h1 className="app__page__marketingblock__heading wow fadeIn animated" id="1977" >Modern Era</h1>
              <p className="lead wow fadeIn animated">An exciting new era of innovation begins with Anto Mahroukian taking formal leadership of the company, and continues with the biggest expansion to our family of brands with Zoidian cigars.</p>

          <div className="app__page__marketingblock__container">
          <div className="col-md-7 col-sm-7 col-xs-12 order-md-2">
              <h2 className="our-story-heading wow fadeIn animated" id="2006" >2006</h2>
              <p className="lead wow fadeIn animated">Anto Mahroukian takes over as President of JM Tobacco, Inc.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>

            </div>
          <div className="col-md-5 col-sm-5 col-xs-12 order-md-1">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInRight animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759909/2006_mgy8rk.jpg" alt="2006" />
            </div>
        </div>
          <div className="app__page__marketingblock__container" style={zoidian}>
            <div className="col-md-7 col-sm-7 col-xs-12">
              <h2 className="our-story-heading wow fadeIn animated" id="2017" >2017</h2>
              <p className="lead wow fadeIn animated">JM Tobacco introduces Zoidian cigars.</p>
              <div className="line-div wow fadeIn animated">&#8214;</div>

            </div>
            <div className="col-md-5 col-sm-5 col-xs-12">
              <img className="app__page__marketingblock__image img-fluid mx-auto wow fadeInLeft animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759924/2017_fwqk2l.jpg" alt="2017" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

