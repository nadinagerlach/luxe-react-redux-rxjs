import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ActionTypes } from 'constants/index';
import { fetchLatestPosts } from 'actions/index';

import SVG from 'react-inlinesvg';
import Carousel from '../components/Carousel';

import Loader from '../components/Loader';

export class Home extends React.PureComponent {
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
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,e_brightness:6,o_40/v1513545808/home-hero-1_eyejxg.jpg';
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const { instagram: { latestPosts } } = this.props;
    const size = 4;
    const output = {
      html: (
        <div className="app__private__running">
          <Loader />
          <div className="app__cancel">
            <button
              className="btn btn-primary btn-sm btn-icon btn-icon--lg"
              onClick={this.handleClickCancel}
            >
              <i className="i-times-circle" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      ),
    };

    if (latestPosts.status === 'loaded') {
      output.html = (
        <div className="app__private__repos">
          {latestPosts.data.slice(0, size).map(d => (
            <div key={d.name}>
              <a href={d.html_url} target="_blank">{`${d.owner.login}/${d.name}`}</a>
              <div>{d.description}</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key="Home" className="app__home app__route">
        <Carousel dragging={true} speed={500} wrapAround={true} autoplay={true} 
          className="app__home__intro"
        >
          <div className="carousel-slide">
            <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545808/home-hero-1_eyejxg.jpg" alt="First slide" />
            <div className="container">
              <div className="carousel-caption">
                <div className="text-center">
                  <h1 className="headline-bottom-1">Your Daily Choice</h1>
                </div>
                <p>
                  <a href="#" className="button">
                    <div className="button-cell">
                      <span className="button-text-wrapper">Our Cigars</span>
                    </div>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-slide">
              <img className='d-block img-fluid image-size' src={`http://res.cloudinary.com/dygn/image/upload/v1513545808/home-hero-3_o7sds7.jpg`} alt='Second slide' />
            <div className="container">
              <div className="carousel-caption">
                <div className="text-center">
                  <h1 className="headline-bottom-1">Espanola Fine Cigars</h1>
                </div>
                <p>
                  <a href="#" className="button">
                    <div className="button-cell">
                      <span className="button-text-wrapper">Our Story</span>
                    </div>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-slide">
            <img className="d-block img-fluid image-size" src={`http://res.cloudinary.com/dygn/image/upload/v1513545807/home-hero-2_cfkrph.jpg`} alt='Third slide' />
            <div className="container">
              <div className="carousel-caption">
                <div className="text-center">
                  <h1>Zoidian Cigars</h1>
                  <h1 className='headline-bottom'>An Affordable Luxury</h1>
                </div>
                <p>
                  <a href="#" className="button">
                    <div className="button-cell">
                      <span className="button-text-wrapper">Our Cigars</span>
                    </div>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="app__home__libraries">
          <div className="app__container">
            <h2>Find your blend</h2>
            <ul>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>I'm having a</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <p>and I need the perfect pairing for</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__home__libraries">
          <div className="app__container">
            <h2>Share your bands to win</h2>
            <ul>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Insta-1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Insta-2</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux-observable.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Insta-3</h4>
                  </div>
                </div>
              </li>
            </ul>
            <h2>Share on instagram</h2>
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

export default connect(mapStateToProps)(Home);
