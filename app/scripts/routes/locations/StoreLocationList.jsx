import React, { Component } from 'react';
import StoreLocation from './StoreLocation'

export default class StoreLocationList extends Component {
  getStorelocations() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  render() {
    return (
      <div className="format_locations_list">
        {this.getStorelocations().map(item =>
          <StoreLocation {...this.props}
                  key={item.get('title')}
                  title={item.get('title')}
                  position={item.get('position')}
                  address={item.get('address')}
                  street={item.get('street')}
                  city={item.get('city')}
                  stateAbbrev={item.get('stateAbbrev')}
                  zip={item.get('zip')}
                  phone={item.get('phone')}
                  />
        )}
      </div>
  )}
  }
