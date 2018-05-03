import React, { Component } from 'react';
import StoreMap from './StoreMap';

// Set up Google Maps
import * as googleApi from '../../util/googleApi';
import GoogleApiComponent from '../shared/GoogleApiComponent';
import { Marker } from '../shared/Marker';
import {InfoWindow} from '../shared/InfoWindow';

export class StoreMapContainer extends Component {
  render() {
    let googleSearch_url = "https://www.google.com/search?q=" + this.props.selectedTitle
    let directions_url = "https://www.google.com/maps/dir//" + this.props.selectedAdd + "/@"
    return (
      <div>
      <StoreMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            address={marker.get('address')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            street={marker.get('street')}
            city={marker.get('city')}
            stateAbbrev={marker.get('stateAbbrev')}
            zip={marker.get('zip')}
            phone={marker.get('phone')}
            mapOn={marker.get('mapOn')}
            addMarker={this.props.addMarker}
            onMarkerClick={this.props.onMarkerClick}/>

        )}
        <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}
            >
              <div>
                <h5>{this.props.selectedTitle}</h5>
                <p>{this.props.selectedStreet}<br />
                {this.props.selectedCity},<br />
                {this.props.selectedStateAbbrev} {this.props.selectedZip}<br />
                {this.props.selectedPhone}</p>
                <a href={googleSearch_url} target="_blank">Get Info</a><br></br>
                <a href={directions_url} target="_blank">Get Directions</a>
              </div>
          </InfoWindow>
      </StoreMap>

      </div>
    )}
}

let key = googleApi.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(StoreMapContainer)
