import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegionFilterList from './RegionFilterList';
import StoreLocationList from './StoreLocationList';
import StoreMapContainer from './StoreMapContainer';

// import * as actionCreators from '../../util/actionCreators';

export class StoreLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Our Cigars',
      tagline: 'Discover JM',
      button: 'Our Cigars',
    };
  }
  
  render() {
    const title = this.state.title;
    const tagline = this.state.tagline;
    const button = this.state.button;
    return (
      <div key="StoreLocations" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={style_1}>
            <h1 className="title">{title}</h1>
            <h4 className="tagline">{tagline}</h4>
            <div className="navigation">
              <div className="navigation__button">
                <Link to="/our-cigars/#Dominican" className="button">
                  <div className="button-cell">
                    <span className="button-text-wrapper">
                    Dominican
                    </span>
                  </div>
                </Link>
              </div>
              <div className="navigation__button">
                <Link to="/our-cigars/#Dominican" className="button">
                  <div className="button-cell">
                    <span className="button-text-wrapper">
                    Dominican
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <StoreMapContainer {...this.props} />
        <RegionFilterList {...this.props} />
        <StoreLocationList {...this.props} />
      </div>
    );
  }
}

// <div className="container-fluid">
// <div className="row">
//   <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6">
//     <StoreMapContainer {...this.props} />
//   </div>
//   <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 fun_background">
//     <div className="row">
//       <div className="col-md-12">
//         <RegionFilterList {...this.props} />
//       </div>
//     </div>
//     <StoreLocationList {...this.props} />
//   </div>
// </div>
// </div>

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    selectedAdd: state.get('selectedAdd'),
    selectedStreet: state.get('selectedStreet'),
    selectedCity: state.get('selectedCity'),
    selectedStateAbbrev: state.get('selectedStateAbbrev'),
    selectedZip: state.get('selectedZip'),
    selectedPhone: state.get('selectedPhone'),
    newCenter: state.get('newCenter'),
    gmapMarkers: state.get('gmapMarkers'),
  };
}

export const Locations = connect(mapStateToProps, actionCreators)(LocationsMapApp);
