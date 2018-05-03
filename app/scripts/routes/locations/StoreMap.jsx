import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class StoreMap extends Component {
  renderChildren() {
    const {children} = this.props;
    if(!children) return;
    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google
      });
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.forceUpdate()
    }
  }

  // After component renders
  loadMap() {
    // If google is avail
    if (this.props && this.props.google) {
      // Grabt a ref to map div to load map
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 4;
      let lat = 38.679356;
      let lng = -98.185388;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    const style = {
      minWidth:'100vw',
      minHeight:'100vh'
    }
    return (
      <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12" style={style} ref="map">
        {this.renderChildren()}
        Loading map...
      </div>
      </div>
    )
  }
}

