import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { InstantSearch, RefinementList, ClearAll, Hits, Highlight, Configure, MenuSelect, SearchBox, CurrentFilters } from 'react-instantsearch/dom';
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

const Hit = ({ item }) => {
  let imgUrl = `http://res.cloudinary.com/dygn/image/upload/v1513141613${  item.image}`;
  let pairingImageStyle = {
    backgroundImage: `url(${  imgUrl  })`,
  };
  return (
    <div>
      <article className="hit wow fadeInUp animated" style={pairingImageStyle}>
        <div className="product-picture-wrapper">
          <div className="product-picture">
            <h2 className="blend-heading"> <Highlight attribute="name" hit={item} /></h2>
            <a data-toggle="modal" data-target={`#${item.objectID}`} className="button">
              <div className="button-cell">
                <span className="button-text-wrapper" id="button-hover">View Recipe</span>
              </div>
          </a>
          </div>
        </div>
      </article>
      <div className="modal fade" id={item.objectID} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-picture">
                    <img className="our-story-image img-fluid mx-auto" src={`http://res.cloudinary.com/dygn/image/upload/v1513141613${item.image}`} alt="Find Your Blend" data-toggle="modal" data-target={`#${item.objectID}`} />
                  </div>
                </div>
                <div className="col-md-8">
                  <h1 className="modal-title" id="exampleModalLabel">
                    <Highlight attribute="name" hit={item} />
                  </h1>
                  <div className="share-module">
                    <span className="share-text">SHARE</span>
                    <Link to={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.jmtobacco.com&amp;media=http://res.cloudinary.com/dygn/image/upload/v1513141613${item.image}`} target="_blank" >
                      <i className="fab fa-pinterest" />
                    </Link>
                    <Link to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.jmtobacco.com" target="_blank" >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="https://twitter.com/share?url=https%3A%2F%2Fwww.jmtobacco.com&amp;text=JM%20Tobacco%20Pairing%20Recipe" target="_blank" >
                      <i className="fab fa-twitter" />
                    </Link>
                  </div>
                  <div className="ingredients">
                    <h2 className="modal-second-title">Ingredients</h2>
                    <div className="ingredient-list">
                      <Highlight attribute="ingredientString" hit={item} />
                      </div>
                  </div>
                  <div className="instructions">
                    <h2 className="modal-second-title">Instructions</h2>
                    <Highlight attribute="recipe" hit={item} />
                  </div>
                  <div className="cigar-pairing">
                    <h2 className="modal-second-title">Pair with</h2>
                    <Highlight attribute="cigar" hit={item} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer" />
          </div>
        </div>
    </div>
    </div>
  );
};

function PairingHits({ hits }) {
  return (
    <div id="hits">
      {hits.map(hit => <Hit item={hit} key={hit.objectID} />)}
    </div>
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
  } 
    return (
      <div>
        <ConnectedHits />
      </div>
    );
  
});

const ConnectedHits = connectInfiniteHits(PairingHits);

export default class SearchResults extends Component {
  render() {
    return (
      <div>

        <div className="container-fluid cont-no-margin">
        <Configure hitsPerPage={12} />
          <FindYourBlendResults />
        </div>
      </div>
    );
  }
}