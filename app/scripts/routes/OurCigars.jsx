import React, { Component } from 'react';
import Slider from 'react-slick';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
import Dominican from '../components/Sku';

export default class OurCigars extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  click() {
    this.setState({ active: true });
  }
  render() {
    // let classes = classnames('specialbutton', {active: this.state.active});

    return (
      <div>
        {/* <button className={classes} onClick={this.click.bind(this)}>Click me</button>; */}
        <div className="cigars-jumbotron">
          <div className="story-jumbotron-wrapper">
            <div className="container">
              <div className="d-md-block text-center">
                <h1>Our Cigars</h1>
                <p className="tagline">Discover JM</p>
                <div className="d-flex justify-content-around align-content-center flex-wrap">
                  <div><Link to="/ourcigars/#Dominican" className="button"><div className="button-cell"><span className="button-text-wrapper">Dominican</span></div></Link></div>
                  <div><Link to="/ourcigars/#Nicaraguan" className="button"><div className="button-cell"><span className="button-text-wrapper">Nicaraguan</span></div></Link></div>
                  <div><Link to="/ourcigars/#Espanola" className="button"><div className="button-cell"><span className="button-text-wrapper">Espanola</span></div></Link></div>
                  <div><Link to="/ourcigars/#Zoidian" className="button"><div className="button-cell"><span className="button-text-wrapper">Zoidian</span></div></Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dominican />
        <div className="dom-image">
          <div className="blend-wrapper">
            <div className="row">
              <div className="col-md-6 col-sm-8" id="Dominican">
                <h2 className="our-cigars-heading">JM's Dominican</h2>
                <p className="cigar-caption">JM Tobacco and its family of fine cigars brings you its most price point cigar, JM's Dominican. This cigar is hand rolled from well-aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, then carefully wrapped with beautiful Sumatran, Connecticut, Corojo or Broadleaf Maduro wrappers. JM's Dominicans are the perfect cigars for "Your Daily Choice".</p>
              </div>
              <div className="col-md-6 d-none d-sm-block col-sm-4">
                <img className="our-story-image img-fluid mx-auto wow fadeInRight animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dclassic.png')} alt="Classic" />
              </div>
            </div>
          </div>
        </div>
        <div className="container cont-margin">
          <div className="row our-story justify-content-center align-items-center">
            <div className="col-md-2 col-sm-2 col-2">
              <img className="our-story-image img-fluid mx-auto wow fadeInUp animated " src={require('../../../assets/media/images/our-cigars/cigars/dominican/dclassic.png')} alt="Classic" />
              <h6 className="caption">Classic</h6>

            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <img className="our-story-image img-fluid mx-auto wow fadeInUp animated " src={require('../../../assets/media/images/our-cigars/cigars/dominican/dsumatra.png')} alt="Sumatra" />
              <h6 className="caption">Sumatra</h6>

            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dmaduro.png')} alt="Maduro" />

              <h6 className="caption">Maduro</h6>

            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dconn.png')} alt="Connecticut" />
              <h6 className="caption">Connecticut</h6>

            </div>
            <div className="col-md-2 col-sm-2 col-2">
              <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dcorojo.png')} alt="Corojo" />
              <h6 className="caption">Corojo</h6>

            </div>
          </div>
        </div>
        <div className="dom-h-image">
          <div className="blend-wrapper-right">
            <div className="row">
              <div className="col-md-6 order-md-2" id="Dominican">
                <h2 className="our-cigars-heading">JM's Dominican Honey</h2>
                <p className="cigar-caption">JM's Dominican Honeys combine smooth cigars with exotic flavors. A rich Sumatran wrapper compliments the right blend of flavoring, producing the delicious taste and an irresistible aroma everyone will love. JM's Dominican Honeys are available in Natural, Vanilla, Berry and Rum flavors.</p>
              </div>
              <div className="col-md-6 order-md-1" />
            </div>
          </div>
        </div>
        <div className="container cont-margin">
          <div className="row our-story">
            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dh.png')} alt="JM" /> */}
              <h6 className="caption">Honey</h6>

            </div>
            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dhberry.png')} alt="JM" /> */}
              <h6 className="caption">Berry</h6>

            </div>
            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dhrum.png')} alt="JM" /> */}
              <h6 className="caption">Rum</h6>

            </div>
            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/dhvanilla.png')} alt="JM" /> */}
              <h6 className="caption">Vanilla</h6>

            </div>
          </div>
        </div>
        <div className="dom-bg-image">
          <div className="blend-wrapper">
            <div className="row">
              <div className="col-md-6" id="Dominican">
                <h2 className="our-cigars-heading">It's A Boy | It's A Girl </h2>
                <p className="cigar-caption">Celebrate and announce the special occasion with our JM's Dominican It's a Boy! and It's a Girl! cigars. Our cigars are hand rolled from well aged Cuban seed tobacco leaves, grown in the rich soils of the Dominican Republic, with a beautiful Sumatra wrapper.  Each cigar is individually cellophaned and labeled, making it a wonderful gift, you'll always cherish. </p>
              </div>
              <div className="col-md-6" />
            </div>
          </div>
        </div>
        <div className="container cont-margin">
          <div className="row our-story justify-content-center align-items-center">

            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/diab.png')} alt="JM" /> */}
              <h6 className="caption">It's a Boy</h6>

            </div>
            <div className="col-md-3 col-sm-3 col-3">
              {/* <img className="our-story-image img-fluid mx-auto wow fadeInUp animated" src={require('../../../assets/media/images/our-cigars/cigars/dominican/diag.png')} alt="JM" /> */}
              <h6 className="caption">It's a Girl</h6>

            </div>
          </div>
        </div>
        <div className="full-width-image-2">
          <div className="blend-wrapper-right">
            <div className="row">
              <div className="col-md-5 order-md-2" id="Nicaraguan">
                <h2 className="our-cigars-heading">JM's Nicaraguan</h2>
                <p className="cigar-caption">JM's Nicaraguan Cigars are the newest addition to the JM family. These cigars are hand rolled from well-aged Nicarguan Cuban seed tobacco leaves, grown in the rich region of Estelli, Nicaragua. They are then wrapped with beautiful Sumatra and Maduro wrappers. The medium-bodied Nicaraguan delivers a creamy-smooth smoke, with hints of chocolate and spice, sure to please the palate. </p>
              </div>
              <div className="col-md-6 order-md-1" />
            </div>
          </div>
        </div>
        <div className="esp-image">
          <div className="blend-wrapper">
            <div className="row">
              <div className="col-md-5" id="Espanola">
                <h2 className="our-cigars-heading">Espanola FIne Cigars</h2>
                <p className="cigar-caption">Created in the Dominican Republic over 20 years ago by craftsmen schooled in their long standing tradition, the Española cigar combines the finest, most patiently cultivated tobaccos, to create a smoke like no other. This cigar is smooth and well-balanced with a subtle sweetness gleaned from its Connecticut and Maduro wrappers. The Española Fine Cigar gives the smoker a pleasure that can only be gained by cigars made in the time-honored tradition. </p>
              </div>
              <div className="col-md-6" />
            </div>
          </div>
        </div>
        <div className="zoid-image">
          <div className="blend-wrapper-right">
            <div className="row">
              <div className="col-md-5 order-md-2" id="Zoidian">
                <h2 className="our-cigars-heading">Zoidian Cigars</h2>
                <p className="cigar-caption">Zoidian Cigars, with its Maduro and Sumatran wrappers, features a medium bodied cigar that offers notes of dark caramel, with a hint of spice at the finish. Its smooth, even burn, yields consistency from beginning to end. This cigar delivers a pleasant smoke at an affordable price. Enjoy Zoidian Cigars…An Affordable Luxury.</p>
              </div>
              <div className="col-md-6 order-md-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

