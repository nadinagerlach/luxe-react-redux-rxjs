import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Carousel from '../components/Carousel';
import Search from '../components/Search';
import Instagram from '../components/Instagram';
export class Home extends React.PureComponent {
  render() {
    return (
      <div key="Home" className="app__home app__route" >
        <div className="app__home__intro">
          <Carousel />
        </div>
        <Search />
        <Instagram />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { instagram: state.instagram };
}

export default connect(mapStateToProps)(Home);
