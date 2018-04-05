import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { InstantSearch, RefinementList, ClearAll, Highlight, Configure, MenuSelect, SearchBox, CurrentFilters } from 'react-instantsearch/dom';
import { connectSearchBox, connectRefinementList, connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

const FindYourBlendSearchJumbotron = () => (
  <div className="blend-jumbotron">
    <div className="story-jumbotron-wrapper">
      <div className="container">
        <div className="d-md-block text-center">
          <h1>Let's talk cigars</h1>
          <p className="tagline">Find your blend</p>
          {/* <button className="button" value="Refresh Page" onClick={this.refresh} /> */}

        </div>
      </div>
    </div>
  </div>
);
const Hit = ({ item }) => {
  const imgUrl = `http://res.cloudinary.com/dygn/image/upload/v1513141613${item.image}`;
  const pairingImageStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <div>
      <article className="hit wow fadeInUp animated" style={pairingImageStyle}>
        <div className="product-picture-wrapper">
          <div className="product-picture">
            <h2 className="our-cigars-heading"> <Highlight attributeName="name" hit={item} /></h2>
            <a data-toggle="modal" data-target={`#${item.objectID}`} className="button">
              <div className="button-cell">
                <span className="button-text-wrapper">View Recipe</span>
              </div>
            </a>
          </div>
        </div>
      </article>
      <div
        className="modal fade" id={item.objectID} tabIndex="-1" role="dialog"
        aria-hidden="true"
      >
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
                    <img
                      className="our-story-image img-fluid mx-auto" src={`http://res.cloudinary.com/dygn/image/upload/v1513141613${item.image}`} alt="Find Your Blend" data-toggle="modal"
                      data-target={`#${item.objectID}`}
                    />
                  </div>
              </div>
                <div className="col-md-8">
                <h1 className="modal-title" id="exampleModalLabel">
                    <Highlight attributeName="name" hit={item} />
                  </h1>
                <div className="share-module">
                    <span className="share-text">SHARE</span>
                    <Link to="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.jmtobacco.com&amp;media=https://res.cloudinary.com/hjqklbxsu/image/upload/f_auto,fl_lossy,q_auto/v1469132303/social-share/Social_Whiskey_Sling.jpg" target="_blank" >
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
                    <ul className="ingredient-list">
                      <li><Highlight attributeName="ingredientString" hit={item} /></li>
                    </ul>
                  </div>
                <div className="instructions">
                    <h2 className="modal-second-title">Instructions</h2>
                    <Highlight attributeName="recipe" hit={item} />
                  </div>
                <div className="cigar-pairing">
                    <h2 className="modal-second-title">Pair with</h2>
                    <Highlight attributeName="cigar" hit={item} />
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
    <main id="hits">
      {hits.map(hit => <Hit item={hit} key={hit.objectID} />)}
    </main>
  );
}

export default class FindYourBlend extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <FindYourBlendSearchJumbotron />
        <div className="container-fluid cont-no-margin">
          <div className="d-md-block text-center">
            <div className="xola-button">
              <div className="button-cell">
                <span className="button-text-wrapper">I'm having a ...</span>
              </div>
              {/* <MenuSelect attributeName="cigar" /> */}
            </div>
            <div className="xola-button">
              <div className="button-cell">
                <span className="button-text-wrapper">I need the perfect drink for ...</span>
              </div>
              {/* <MenuSelect attributeName="timeOfDay" /> */}
            </div>
            <div className="xola-button">
              <div className="button-cell">
                {/* <ClearAll clearsQuery translations={{ reset: 'Reset filters' }} className="button-text-wrapper" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid cont-no-margin">
          {/* <Configure hitsPerPage={12} />
          <FindYourBlendResults /> */}
        </div>
      </div>
    );
  }
}