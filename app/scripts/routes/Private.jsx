import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionTypes } from 'constants/index';
import { fetchPopularRepos } from 'actions/index';
import { fetchLatestPosts } from 'actions/index';


import SVG from 'react-inlinesvg';

import Loader from 'components/Loader';

import Carousel from '../components/Carousel';

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

    if (popularRepos.status === 'loaded') {
      output.html = (
        <div className="app__private__repos">
          {popularRepos.data.slice(0, size).map(d => (
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
        <div className="app__home__intro">
          <Carousel />
        </div>
        <div className="app__home__marketingblock">
          <div className="app__container2">
            <div className="app__home__find-your-blend">
                <ul>
                  <li>
                    <h2>Find Your Blend</h2>
                    <h4>I'm having a</h4>
                    <h4>and I need the perfect pairing for</h4>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="app__home__marketingblock">
          <div className="app__container">
            <h2>Share your bands to win</h2>
            <ul>
              <li>
                <div className="app__home__instagram">
                  <div className="app__home__instagram__image">
                    <SVG src={require('assets/media/logos/react.svg')} />
                  </div>
                  <div className="app__home__instagram__content">
                    <h4>Insta-1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__instagram">
                  <div className="app__home__instagram__image">
                    <SVG src={require('assets/media/logos/redux.svg')} />
                  </div>
                  <div className="app__home__instagram__content">
                    <h4>Insta-2</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="app__home__instagram">
                  <div className="app__home__instagram__image">
                    <SVG src={require('assets/media/logos/redux-observable.svg')} />
                  </div>
                  <div className="app__home__instagram__content">
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
  return { github: state.github };
}

export default connect(mapStateToProps)(Private);
