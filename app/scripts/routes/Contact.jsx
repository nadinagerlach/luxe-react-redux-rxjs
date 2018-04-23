import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Questions? Comments?',
      tagline: 'Check out our FAQ below or use the form to send us a message.',
      button: 'Contact',
    };
  }

  render() {
    const title = this.state.title;
    const tagline = this.state.tagline;
    const button = this.state.button;
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/v1516077420/contact-hero_i7aqek.jpg';

    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    return (
      <div>
        <div className="app__home__intro">
          <div className="overlay">
            <div className="app__container carousel slide" style={style_1} data-ride="carousel">
              <div className="app__carousel__caption">
                <h1 className="app__carousel__title">{title}</h1>
                <h4 className="tagline">Check out our FAQ below or <br />use the form to send us a message.</h4>
              </div>
            </div>
          </div>
        </div>
            
            <div id="contact" className="s-contact">

              <div className="row contact-content" data-aos="fade-up">

                <div className="contact-primary">
                <h3 className="h6" id="no-space-contact">Frequently Asked Questions</h3>
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a
                      data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                        How many wrappers do JM's Dominicans come in? <i className="i-caret-down" />
                    </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                    JM's Dominicans are rolled with 4 different wrappers, Sumatra (Mild - Medium) Connecticut (Medium), Maduro (Medium - Full), and Corojo (Full) creating 4 unique blends that are sure to please.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a
                      className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                      aria-expanded="false" aria-controls="collapseTwo"
                    >
                      How do I keep my JM's Cigars fresh?
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="card-block">
                    Once you find your perfect JM cigar, you want to do everything possible to ensure that it’s ready to smoke when you are. To retain freshness, cigars need to be stored properly in a controlled environment, usually a humidor.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <a
                      className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                      aria-expanded="false" aria-controls="collapseThree"
                    >
                        What is a humidor?
                    </a>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="card-block">
                    By definition, the term ‘humidor’ can be applied to any box or container utilizing a device that increases the levels of moisture or humidity within. Usually, the preferred box choice is spanish cedar because of its moisture retention. Keeping your humidor near the optimal 70 degree/70% humidity levels, will keep your JM cigars fresh for a very long time.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingFour">
                  <h5 className="mb-0">
                    <a
                      className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                      aria-expanded="false" aria-controls="collapseFour"
                    >
                      What do the two numbers mean when applied to JM's Cigar sizes?
                    </a>
                  </h5>
                </div>
                <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                  <div className="card-block">
                    The two numbers are the length and ring gauge (diameter) of the cigar. The length is measured in inches. The ring gauge is measured in units of 1/64ths of an inch. For example, a cigar that is called 6.75 x 50 is 6.75 inches long and 50/64ths of an inch in diameter.
                  </div>
                </div>
              </div>
            </div>

                  <h3 className="h6">Send Us A Message</h3>
                  <form method="POST" action="https://formspree.io/jmtobaccosite@gmail.com">
                    <fieldset>
                      <div className="form-field">
                        <input type="text" name="name" placeholder="Your name" />
                      </div>
                      <div className="form-field">

                        <input type="email" name="_replyto" placeholder="Your email" />
                      </div>
                      <div className="form-field">
                        <textarea name="message" placeholder="Your message" className="full-width" />
                      </div>
                      <div className="form-field">
                      <span className="input-group-btn">
                <button className="button" type="submit"  value="Send">Send</button>
              </span>
                      </div>
                    </fieldset>

                  </form>

                </div>

                <div className="contact-secondary">
                  <div className="contact-info">

                    <h3 className="h6 hide-on-fullwidth">Contact Info</h3>

                    <div className="cinfo">
                      <h5>Where to Find Us</h5>
                      <p>
                  3018 N Coolidge Ave<br />
                  Los Angeles, CA<br />
                  90039 US
                      </p>
                    </div>

                    <div className="cinfo">
                      <h5>Email Us At</h5>
                      <p>
                            info@jmtobacc.co
                      </p>
                    </div>

                    <div className="cinfo">
                      <h5>Call Us At</h5>
                      <p>
                            Phone:  1.800.736.5354
                      </p>
                    </div>

                    <ul className="contact-social">
                      <li>
                        <a href="mailto:jmtobaccosite@gmail.com"><i className="fa fa-envelope" /></a>
                      </li>
                      <li>
                        <a href="tel:1-800-736-5354"><i className="fa fa-phone" /></a>
                      </li>
                    </ul>

                  </div>
                </div>

              </div>

            </div>

          </div>

    );
  }
}

