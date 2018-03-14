import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionTypes } from 'constants/index';
import { fetchLatestPosts } from 'actions/index';

import Loader from 'components/Loader';

export class Instagram extends React.PureComponent {
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
        <div className="app__instagram__repos">
          {latestPosts.res.slice(0, size).map(res => (
            <div key={res.caption.text}>
              <a href={res.link} target="_blank">
                <img src={res.images.thumbnail.url} alt="Instagram" />
                {`${res.id}`}
              </a>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div key="Instagram" className="app__instagram app__route">
        <div className="app__container">
          <h2>Latest Posts</h2>
          {output.html}
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
