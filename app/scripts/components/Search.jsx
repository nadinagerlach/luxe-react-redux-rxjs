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
  if (searchResult && searchResult.nbHits === 0 ) {
    return (
      <div className="row">
        <div className="no-results">
        No results found matching{' '}
        <span className="query">{searchState.query}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ConnectedHits />
      </div>
    );
  }
});

const ConnectedHits = connectInfiniteHits(PairingHits);


export default function Search() {
  return (
    <div className="container">
      <div className="app__home__marketingblock">
        <div className="app__container2">
          <div className="app__home__find-your-blend">
            <ul>
              <li>
                <h2>Find Your Blend</h2>
              </li>
              <li>
                <h4>I'm having a<MenuSelect attribute="cigar" className="ais-MenuSelect__select" /></h4>
              </li>
              <li>
                <h4>and I need the perfect pairing for<MenuSelect attribute="timeOfDay" className="ais-MenuSelect__select" /></h4>
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
