import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionTypes } from 'constants/index';
import { fetchLatestPosts } from 'actions/index';
import { fetchPopularRepos } from 'actions/index';


import Loader from 'components/Loader';

export class Instagram extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    instagram: PropTypes.object.isRequired,
    github: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchLatestPosts());
    dispatch(fetchPopularRepos());
  }

  handleClickCancel = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch({ type: ActionTypes.CANCEL_FETCH });
  };

  render() {
    const { instagram: { latestPosts } } = this.props;
    const size = 4;
    const output = {
      html: (
        <div className="app__instagram__running">
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
        <ul>
          {latestPosts.res.slice(0, size).map(photo => (
            <li key={photo.caption.text}>
              <div className="app__home__instagram">
                <a href={photo.link} target="_blank">
                  <img src={photo.images.thumbnail.url} className="app__home__instagram__image" alt="Instagram" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    console.log(latestPosts.status);

    return (
      <div key="Instagram" className="app__home__marketingblock">
        <div className="app__container">
          <h2 id="center">Share your bands to win</h2>
          {output.html}
          <p className="text-center">
            <a href="https://www.instagram.com/jmtobacco/" className="button">
              <div className="button-cell">
                <span className="button-text-wrapper">Share on instagram</span>
              </div>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { instagram: state.instagram };
}

export default connect(mapStateToProps)(Instagram);
