import React from 'react';
import { Link } from 'react-router-dom';
import { InstantSearch } from 'react-instantsearch/dom';
import SearchResults from '../components/SearchResults';

export default class FindYourBlend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <div className="blend-jumbotron">
          <div className="story-jumbotron-wrapper">
            <div className="container">
              <div className="d-md-block text-center">
                <h1>Let's talk cigars</h1>
                <p className="tagline">Find your blend</p>
              </div>
            </div>
          </div>
        </div>
        <SearchResults />
      </div>
    );
  }
}
