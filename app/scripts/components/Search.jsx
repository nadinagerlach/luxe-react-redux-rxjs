// First, we need to add the Hits component to our import
import React from 'react';
import { Link } from 'react-router-dom';


import { InstantSearch, MenuSelect, SearchBox, ClearAll, Hits } from 'react-instantsearch/dom';
import { connectSearchBox, connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

function PairingHits({ hits }) {
  return (
    <main id="hits">
      {hits.map(hit => <Hit item={hit} key={hit.objectID} />)}
    </main>
  );
}

const FindYourBlendResults = connectStateResults(({ searchState, searchResult }) => {
  if (searchResult && searchResult.nbHits === 0) {
    return (
      <div className="row">
        <div className="no-results">
        No results found matching{' '}
          <span className="query">{searchState.query}</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ConnectedHits />
    </div>
  );
});

const ConnectedHits = connectInfiniteHits(PairingHits);

// MenuSelect.defaultProps = {
//   className: ''
// };
// exports.default = (0, _translatable2.default)({
//   seeAllOption: 'See all'
// })(MenuSelect);

export default function Search() {
  return (
    <div className="gutters" id="negative-pad-top">
      <div className="app__home__grid">
        <div className="gutters2">
          <div className="app__home__find-your-blend">
            <ul>
              <li>
                <h2>Find Your Blend</h2>
              </li>
              {/* <li>
                <form action="/en-us/recipes" type="get" className="recipe-form">
                  <div className="recipe-selector">
                    <div className="bottle ob-text pull-left">
                      I'm having a
                    </div>
                    <div className="pull-left bottle-select">
                      <span className="select-wrapper">
                        <div className="mod-select collapsed bottle notouch" tabIndex="0"><div className="selected" tabIndex="-1">- Any -</div><ul id="undefined-mod" className="dropdown"><div><li data-value="All" tabIndex="-1">- Any -</li><li data-value="198" tabIndex="-1">No. 27 Gold</li><li data-value="1" tabIndex="-1">Old No. 7®</li><li data-value="197" tabIndex="-1">Sinatra Select</li><li data-value="188" tabIndex="-1">Tennessee Rye</li><li data-value="4" tabIndex="-1">Gentleman Jack</li><li data-value="5" tabIndex="-1">Single Barrel</li><li data-value="2" tabIndex="-1">Tennessee Honey</li><li data-value="3" tabIndex="-1">Tennessee Fire</li><li data-value="181" tabIndex="-1">Winter Jack</li></div></ul></div><select className="bottle notouch" name="product">
                          <option value="All">- Any -</option>
                          <option value="198">No. 27 Gold</option>
                          <option value="1">Old No. 7®</option>
                          <option value="197">Sinatra Select</option>
                          <option value="188">Tennessee Rye</option>
                          <option value="4">Gentleman Jack</option>
                          <option value="5">Single Barrel</option>
                          <option value="2">Tennessee Honey</option>
                          <option value="3">Tennessee Fire</option>
                          <option value="181">Winter Jack</option>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </select><span className="mobile-hide"><br /><br /></span>
                      </span>
                    </div>

                    <div className="occasion ob-text pull-left">
                    and I need the perfect pairing for
                    </div>
                    <div className="pull-left occasion-select">
                      <span className="select-wrapper">
                        <div className="mod-select occasion notouch" tabIndex="0">
                        <div className="selected" tabIndex="-1">- Anything -</div>
                        <MenuSelect attribute="cigar" className="ais-MenuSelect__select" />
                        <ul id="undefined-mod" className="dropdown"><div>
                          <li data-value="Anything" tabIndex="-1">- Anything -</li>
                          <li data-value="After Work" tabIndex="-1">After Work</li>
                          <li data-value="Conversation" tabIndex="-1">Conversation</li>
                          <li data-value="Grilling Out" tabIndex="-1">Grilling Out</li>
                          <li data-value="House Party" tabIndex="-1">House Party</li>
                          <li data-value="Watching the Game" tabIndex="-1">Watching the Game</li>
                          <li data-value="Cold Weather" tabIndex="-1">Cold Weather</li><li data-value="" tabIndex="-1" /></div></ul></div><select className="occasion notouch" name="occasion">
                          <option value="Anything">- Anything -</option>
                          <option value="After Work">After Work</option>
                          <option value="Conversation">Conversation</option>
                          <option value="Grilling Out">Grilling Out</option>
                          <option value="House Party">House Party</option>
                          <option value="Watching the Game">Watching the Game</option>
                          <option value="Cold Weather">Cold Weather</option>
                          <option value="" />
                        </select>
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="button"><div className="button-cell"><span className="button-text-wrapper">FIND YOUR MIX</span></div></button>
                </form>
              </li> */}
              <li>
                <h3>I'm having a  <MenuSelect attribute="cigar" className="ais-MenuSelect" /></h3>

              </li>
              <li>
                <h3>and I need the perfect pairing for  <MenuSelect attribute="timeOfDay" className="ais-MenuSelect" seeAllOption='Nuts'/></h3>
              </li>
              <li>
                <Link className="button" to="/find-your-blend">
                  <div className="button-cell">
                    <span className="button-text-wrapper">Find My Blend</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
