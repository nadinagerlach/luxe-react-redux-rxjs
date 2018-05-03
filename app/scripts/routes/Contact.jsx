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
      <div key="Contact" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={style_1} >
            <h1 className="title">{title}</h1>
            <h4 className="tagline">Check out our FAQ below or <br />use the form to send us a message.</h4>
          </div>
        </div>
        <div className="app__home__marketingblock" id="min-height">
          <div className="gutters2">
            <div className="app__home__find-your-blend">
              <div id="form-main">
                <div id="form-div">
                  <h5 className="verification__subtitle" id="no-space-contact">Send JM a message</h5>

                  <form className="form" id="form1" method="POST" action="https://formspree.io/jmtobaccosite@gmail.com">
                    <fieldset>
                      <p className="name">
                        <input
                          name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input form-control" placeholder="Your Name"
                          id="name"
                        />
                      </p>

                      <p className="email">
                        <input
                          name="email" type="text" className="validate[required,custom[email]] feedback-input form-control" id="email"
                          placeholder="Your Email"
                        />
                      </p>

                      <p className="text">
                        <textarea name="text" className="validate[required,length[6,300]] feedback-input form-control" id="comment" placeholder="Your Message" />
                      </p>


                      <div className="submit">
                        <span className="input-group-btn">
                          <button className="button" type="submit" value="Send">Send</button>
                        </span>
                      </div>
                      <div>
                        <h5 className="verification__subtitle" id="no-space-contact">Additional Contacts</h5>
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                          <div className="card">
                            <div className="card-header" role="tab" id="headingTwo">
                              <h5 className="mb-0">
                                <a
                                  data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  <i className="i-plus" /> Press Inquiries
                                </a>
                              </h5>
                            </div>

                            <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                              <div className="card-block">
                                <p>
                                  JM Tobacco
                                  <br />
                                3018 N Coolidge Ave
                                  <br />
                                Los Angeles, CA
                                  <br />
                                90039 US
                                  <br />
                                  <a href="mailto:jmtobaccosite@gmail.com">info@jmtobacco.com</a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" role="tab" id="headingSix">
                            <h5 className="mb-0">
                                <a
                                  className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                                  aria-expanded="false" aria-controls="collapseSix"
                                >
                                  <i className="i-plus" /> Social Media
                                </a>
                              </h5>
                          </div>
                            <div id="collapseSix" className="collapse" role="tabpanel" aria-labelledby="headingSix">
                            <div className="card-block">
                            <p>
                              Stranger Social
                                  <br />
                                  <a href="mailto:hello@strangersocial.com">hello@strangersocial.com</a>
                                </p>
                              </div>
                          </div>
                          </div>
                          <div className="card">
                            <div className="card-header" role="tab" id="headingSeven">
                            <h5 className="mb-0">
                                <a
                                  className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
                                  aria-expanded="false" aria-controls="collapseSeven"
                                >
                                  <i className="i-plus" /> Customer Support
                                </a>
                              </h5>
                          </div>
                            <div id="collapseSeven" className="collapse" role="tabpanel" aria-labelledby="headingSeven">
                            <div className="card-block">
                                <p> 3018 N Coolidge Ave<br />Los Angeles, CA<br />90039 US</p>
                              </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div />
                    </fieldset>
                  </form>
                </div>
                <div id="accordion-div">
                  <h5 className="verification__subtitle" id="no-space-contact">Frequently Asked Questions</h5>

                  <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h5 className="mb-0">
                          <a
                            data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="i-plus" /> How many wrappers do JM's Dominicans come in?
                          </a>
                        </h5>
                      </div>

                      <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div className="card-block">
                          <p>JM's Dominicans are rolled with 4 different wrappers, Sumatra (Mild - Medium) Connecticut (Medium), Maduro (Medium - Full), and Corojo (Full) creating 4 unique blends that are sure to please.</p>
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
                            <i className="i-plus" /> How do I keep my JM's Cigars fresh?
                          </a>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="card-block">
                          <p>Once you find your perfect JM cigar, you want to do everything possible to ensure that it’s ready to smoke when you are. To retain freshness, cigars need to be stored properly in a controlled environment, usually a humidor.</p>
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
                            <i className="i-plus" /> What is a humidor?
                          </a>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="card-block">
                          <p>By definition, the term ‘humidor’ can be applied to any box or container utilizing a device that increases the levels of moisture or humidity within. Usually, the preferred box choice is spanish cedar because of its moisture retention. Keeping your humidor near the optimal 70 degree/70% humidity levels, will keep your JM cigars fresh for a very long time.</p>
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
                            <i className="i-plus" /> What do the two numbers mean when applied to JM's Cigar sizes?
                          </a>
                        </h5>
                      </div>
                      <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                        <div className="card-block">
                          <p>The two numbers are the length and ring gauge (diameter) of the cigar. The length is measured in inches. The ring gauge is measured in units of 1/64ths of an inch. For example, a cigar that is called 6.75 x 50 is 6.75 inches long and 50/64ths of an inch in diameter.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

