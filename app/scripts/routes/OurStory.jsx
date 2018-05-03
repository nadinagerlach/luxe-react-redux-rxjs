import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
    // Background Images
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
    const comingOfAge = {
      backgroundImage: `url("${espImg}")`,
    };
    const domImg = 'https://res.cloudinary.com/dygn/image/upload/v1516077492/dom-fw2_ujwa5c.jpg';
    const growingTheFamily = {
      backgroundImage: `url("${domImg}")`,
    };
    const zoidImg = 'https://res.cloudinary.com/dygn/image/upload/o_100/v1524694310/zoid2_peqhwj.gif';
    const modernEra = {
      backgroundImage: `url("${zoidImg}")`,
    };
    const opacity2 = {
      opacity: '.6',
    };
    const fadeUp = 'wow fadeIn animated';

    return (
      <div key="OurStory" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={intro1}>
            <h1 className="title">Born to make cigars</h1>
            <h4 className="tagline">The story of JM Tobacco, Inc.</h4>
            <div className="navigation">
              <div className="navigation__button">
                <Link smooth to="/our-story/#1975" className="button" ><div className="button-cell"><span className="button-text-wrapper">1975-1985</span></div></Link>
              </div>
              <div className="navigation__button">
                <Link smooth to="/our-story/#1986" className="button" ><div className="button-cell"><span className="button-text-wrapper">1986-1995</span></div></Link>
              </div>
              <div className="navigation__button">
                <Link smooth to="/our-story/#1996" className="button" ><div className="button-cell"><span className="button-text-wrapper">1996-2005</span></div></Link>
              </div>
              <div className="navigation__button">
                <Link smooth to="/our-story/#2006" className="button" ><div className="button-cell"><span className="button-text-wrapper">2006-Present</span></div></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="app__page__grid" style={about}>
          <div className="app__page__grid__cell">
            <p className="hero">
            Crafting something that endures takes time and character.
            You’ll find plenty of both in the people and history that make JM Tobacco.
            </p>
          </div>
        </div>
        <div className="app__page__grid">
          <div className="app__page__grid__cell u-med-1of2 u-small-full">
            <div className="Demo">
              <h2
                className={`subtagline ${fadeUp}`}
                id="1975"
              >
                1977-1985
              </h2>
              <h2
                className={`subtitle ${fadeUp}`}
                id="no-space"
              >
                Our Founding
              </h2>
              <p className={`lead ${fadeUp}`}>
              The early years that began the JM legacy.
              </p>
              <p className={`line-div ${fadeUp}`} >&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`} >1977</h2>
              <p className={`lead ${fadeUp}`}>
              Anto Mahroukian, current President of JM Tobacco, was born.
              </p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`} >
              1995
              </h2>
              <p className={`lead ${fadeUp}`}>
              It all began with an expensive birthday gift;
              a pricey cigar from Anto Mahroukian to his father, John Mahroukian.
              This led to the birth of JM Tobacco, Inc.
              </p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
            </div>
          </div>
          <div className="app__page__grid__cell u-med-1of2 u-small-full align__center">
            <img className="img-fluid mx-auto wow fadeInRight animated right" src="https://res.cloudinary.com/dygn/image/upload/v1516759908/1977_my3iiu.jpg" alt="1977" style={opacity2} />
          </div>
        </div>
        <div className="app__page__grid" style={comingOfAge}>
          <div className="app__page__grid__cell u-med-1of2 u-small-full align__center">
            <img className="wow fadeInLeft left animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759912/1995_mbtvxt.jpg" alt="1995" />
          </div>
          <div className="app__page__grid__cell u-med-1of2 u-small-full">
            <div className="Demo">
              <h2 className={`subtagline  ${fadeUp}`}>1986-1995</h2>
              <h2 className={`subtitle ${fadeUp}`} id="no-space" >Coming of Age</h2>
              <p className={`lead ${fadeUp}`} id="1986" >The JM brand comes of age, transforming to an American daily indulgence.</p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`}>1996</h2>
              <p className={`lead ${fadeUp}`}>JM Tobacco Releases its first cigar: Espanola Gold Label.</p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
            </div>
          </div>
        </div>
        <div className="app__page__grid" style={growingTheFamily}>
          <div className="app__page__grid__cell u-med-1of2 u-small-full">
            <div className="Demo">
              <h2
                className={`subtagline ${fadeUp}`}
                id="1996"
              >
                1996-2005
              </h2>
              <h2 className={`subtitle ${fadeUp}`} id="no-space" >Growing the Family</h2>
              <p className={`lead ${fadeUp}`} >Anto Mahroukian taking formal leadership of the company as it continues to grow.</p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`}>2000</h2>
              <p className={`lead ${fadeUp}`}>JM's Dominican is launched.</p>
              <img className={`app__page__grid__image ${fadeUp}`} src="https://res.cloudinary.com/dygn/image/upload/v1516760386/2000_htr7hv.jpg" alt="2000" />
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`} >2006</h2>
              <p className={`lead ${fadeUp}`}>Anto Mahroukian takes over as President of JM Tobacco, Inc.</p>
              <img className={`app__page__grid__image ${fadeUp}`} src="https://res.cloudinary.com/dygn/image/upload/v1516759909/2006_mgy8rk.jpg" alt="2006" />
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
            </div>
          </div>
          <div className="app__page__grid__cell u-med-1of2 align__center u-small-full">
            {/* <img className="img-fluid mx-auto wow fadeInRight right animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759924/2017_fwqk2l.jpg" alt="2017" /> */}
          </div>
        </div>
        <div className="app__page__grid" style={modernEra}>
          <div className="app__page__grid__cell u-med-1of2 align__center u-small-full">
            {/* <img className="img-fluid mx-auto wow fadeInRight right animated" src="https://res.cloudinary.com/dygn/image/upload/v1516759924/2017_fwqk2l.jpg" alt="2017" /> */}
          </div>
          <div className="app__page__grid__cell u-med-1of2 u-small-full">
            <div className="Demo">
              <h2 className={`subtagline ${fadeUp}`} id="2006">2006-Present</h2>
              <h2 className={`subtitle ${fadeUp}`} id="no-space" >Modern Era</h2>
              <p className={`lead ${fadeUp}`}>An exciting new era of innovation begins with the biggest expansion to our family of brands with Zoidian cigars.</p>
              <p className={`line-div ${fadeUp}`}>&#8214;</p>
              <h2 className={`subtitle ${fadeUp}`} >2017</h2>
              <p className={`lead ${fadeUp}`}>JM Tobacco introduces Zoidian cigars.</p>
              <img className={`app__page__grid__image ${fadeUp}`} src="https://res.cloudinary.com/dygn/image/upload/v1516759924/2017_fwqk2l.jpg" alt="2017" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

