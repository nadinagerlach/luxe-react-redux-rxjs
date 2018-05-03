import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionTypes } from 'constants/index';
// import { fetchStoreLocations } from 'actions/index';

import Loader from 'components/Loader';

export class Map extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    //TO DO check name on map object
    map: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchStoreLocations());
  }

  handleClickCancel = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch({ type: ActionTypes.CANCEL_FETCH });
  };

  render() {
    // TO DO

    return (
      <div>
        {/* TO DO */}
        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { map: state.map };
}

export default connect(mapStateToProps)(Map);