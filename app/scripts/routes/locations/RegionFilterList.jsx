import React, { Component } from 'react';
import RegionsOptionValue from './RegionsOptionValue';

export default class RegionFilterList extends Component {
  render() {
    return (
      <div className="row">
        <select name="my-best-select" onChange={() => this.props.changeFilter(this.props.id)}>
          <option value="" disabled selected>Select your region</option>
          {this.props.filters.map(item =>
          <RegionsOptionValue id={item.get('id')}
                  key={item.get('id')}
                  />
        )}
        </select>
      </div>
  )}
}