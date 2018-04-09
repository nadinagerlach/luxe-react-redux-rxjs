import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ActionTypes } from 'constants/index';
import { fetchLatestPosts } from 'actions/index';

import SVG from 'react-inlinesvg';

import Loader from 'components/Loader';

export class OurStory extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    instagram: PropTypes.object.isRequired,
  };
  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchLatestPosts());
  }

  handleClickCancel = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch({ type: ActionTypes.CANCEL_FETCH });
  };

  render() {
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,e_brightness:6,o_40/v1513545808/home-hero-1_eyejxg.jpg';
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };

    return (
      <div key="OurStory" className="">
        <div className="app__home__intro">
          <div className="overlay">
            <div className="app__container carousel slide" style={style_1} data-ride="carousel">
              <h1>Born to make cigars</h1>
              <p className="tagline">The story of JM Tobacco, Inc.</p>
              <div className="d-flex justify-content-around align-content-center flex-wrap">
                <div><Link to="/ourstory/#1977" className="button"><div className="button-cell"><span className="button-text-wrapper">1975-1985</span></div></Link></div>
                <div><Link to="/ourstory/#1995" className="button"><div className="button-cell"><span className="button-text-wrapper">1986-1995</span></div></Link></div>
                <div><Link to="/ourstory/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">1996-2005</span></div></Link></div>
                <div><Link to="/ourstory/#2006" className="button"><div className="button-cell"><span className="button-text-wrapper">2006-Present</span></div></Link></div>
              </div>
            </div>
          </div>
        </div>
        <div className="app__home__marketingblock">
          <div className="app__container">
          div className="full-width-image-2">
          <div className="blend-wrapper">
            <div className="row">
              <div className="col-md-6 col-sm-10 col-xs-10">
                <p>Crafting something that endures takes time and character. You’ll find plenty of both in the people and history that make JM Tobacco.</p>
              </div>
              <div className="col-md-6">
              </div>
          </div>
        </div>
      </div>
          <div className="container cont-margin">
              <div className="row our-story">
                <div className="col-md-7 order-md-2">
                  <h2 className="our-story-heading"  id="1977" >1977</h2>
                  <p className="lead">Anto Mahroukian, current President of JM Tobacco, was born.</p>
                </div>
                <div className="col-md-5 order-md-1">
                {/* <img className="our-story-image img-fluid mx-auto wow fadeInLeft animated" src={require("../../../assets/media/images/our-story/1977.jpg")} alt="Generic placeholder image"></img> */}
                </div>
              </div>

              <div className="row our-story">
                <div className="col-md-7">
                <h2 className="our-story-heading" id="1995" >1995</h2>            
                <p className="lead">It all began with an expensive birthday gift; a pricey cigar from Anto Mahroukian to his father, John Mahroukian. This led to the birth of JM Tobacco, Inc.</p>
                </div>
                <div className="col-md-5">
                {/* <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src={require("../../../assets/media/images/our-story/1995.jpg")} alt="Generic placeholder image"></img> */}
                </div>
              </div>

              <div className="row our-story">
                <div className="col-md-7 order-md-2">
                <h2 className="our-story-heading" id="Espanola" >DATE</h2>            
                <p className="lead">JM Tobacco Releases it"s first cigar: Espanola Gold Label.</p>
                </div>
                <div className="col-md-5 order-md-1">
                  {/* <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src={require("../../../assets/media/images/our-story/espanola.jpg")} alt="Generic placeholder image"></img> */}
                </div>
              </div>

              <div className="row our-story">
                <div className="col-md-7">
                <h2 className="our-story-heading" id="2006" >2006</h2>            
                <p className="lead">Anto Mahroukian takes over as President of JM Tobacco, Inc.</p>
                </div>
                <div className="col-md-5">
                  {/* <img className="our-story-image img-fluid mx-auto wow fadeInLeft animated" src={require("../../../assets/media/images/our-story/2006.jpg")} alt="Generic placeholder image"></img> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { instagram: state.instagram };
}

export default connect(mapStateToProps)(OurStory);
