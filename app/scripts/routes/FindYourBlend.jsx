import React from 'react';
import { Link } from 'react-router-dom';
import { InstantSearch, RefinementList, ClearAll, Hits, Highlight, Configure, MenuSelect, SearchBox, CurrentFilters }  from 'react-instantsearch/dom';
import SearchResults from '../components/SearchResults';

import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

export default class FindYourBlend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "Let's talk cigars",
      tagline: 'Find your blend',
      button: 'Our Cigars',
    };
  }
  render() {
    const title = this.state.title;
    const tagline = this.state.tagline;
    const button = this.state.button;
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/v1516077445/blend-hero_ionsfb.jpg';

    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };

    return (
      <div key="FindYourBlend" className="app__route">
        <div className="app__home__intro">
          <div className="overlay">
            <div className="app__container carousel slide" style={style_1} >
              <div className="app__carousel__caption">
                <h1 className="app__carousel__title">{title}</h1>
                <h4 className="app__carousel__tagline">{tagline}</h4>
                <div className="d-flex justify-content-around align-content-center flex-wrap">
                  <div className="xola-button">
                    <div className="button-cell">
                      <span className="button-text-wrapper">I'm having a ...</span>
                    </div>
                    <MenuSelect attribute="cigar" className="dropdown__max"/>
                    
                  </div>

                  <div className="xola-button">
                    <div className="button-cell">
                      <span className="button-text-wrapper">I need the perfect drink for ...</span>
                    </div>
                    <MenuSelect attribute="timeOfDay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SearchResults />
      </div>
    );
  }
}
