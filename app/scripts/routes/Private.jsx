import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions/index';

import SVG from 'react-inlinesvg';

import Loader from 'components/Loader';

export class Private extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    github: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchPopularRepos());
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
    const { github: { popularRepos } } = this.props;
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

    if (popularRepos.status === 'loaded') {
      output.html = (
        <div className="app__private__repos">
          {popularRepos.data.map(d => (
            <div key={d.name}>
              <a href={d.html_url} target="_blank">{`${d.owner.login}/${d.name}`}</a>
              <div>{d.description}</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key="Private" className="app__private app__route">
        <div className="app__home__intro">
          <div className="overlay">
            <div className="app__container carousel slide" style={style_1} data-ride="carousel">
              <h1>Your Daily Choice</h1>
              <p>Our Cigars</p>
              <a
                href="https://github.com/gilbarbara/react-redux-observables-boilerplate"
                className="app__home__download btn btn-lg btn-primary btn-icon"
                target="_blank"
              >
                <i className="i-instagram" />
                <span>Visit</span>
              </a>
            </div>
          </div>
        </div>
       
        <div className="app__home__libraries">
          <div className="app__container">
            <h2>Provides</h2>
            <ul>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>React</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Redux</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux-observable.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Redux Observable</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react-router.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>react-router</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/reactivex.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>RxJS</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/webpack.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Webpack 2.x</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="overlay" />
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
            <div className="carousel-item">
              <div className="overlay" />
              <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545808/home-hero-3_o7sds7.jpg" alt="Second slide" />
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
            <div className="carousel-item">
              <div className="overlay" />
              <img className="d-block img-fluid image-size" src="http://res.cloudinary.com/dygn/image/upload/v1513545807/home-hero-2_cfkrph.jpg" alt="Third slide" />
              <div className="container">
                <div className="carousel-caption headline-bottom">
                  <div className="text-center headline-bottom">
                    <h1>Zoidian Cigars</h1>
                    <h1 className="headline-bottom">An Affordable Luxury</h1>
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
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="app__home__libraries">
          <div className="app__container">
            <h2>Provides</h2>
            <ul>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>React</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Redux</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/redux-observable.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Redux Observable</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/react-router.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>react-router</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/reactivex.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>RxJS</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__library">
                  <div className="app__home__library__image">
                    <SVG src={require('assets/media/logos/webpack.svg')} />
                  </div>
                  <div className="app__home__library__content">
                    <h4>Webpack 2.x</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__container">
          <h2>Popular Repos</h2>
          {output.html}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { github: state.github };
}

export default connect(mapStateToProps)(Private);
