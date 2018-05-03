import React, { Component } from 'react';

export default class LocationsOptionValue extends Component {
  render() {
    return (
      <option value={this.props.id}
               id={this.props.id}
               defaultChecked={this.props.inuse}
               >
               {this.props.id}
       </option>
      )
  }
}
