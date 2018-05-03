import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date(),
      date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    this.state = {
      title: 'Privacy Policy',
      tagline: 'Last updated',
      date,
    };
  }
  click() {
    this.setState({ active: true });
  }
  render() {
    const imgUrl_1 = 'https://res.cloudinary.com/dygn/image/upload/b_rgb:000000,e_brightness:6,o_40/v1513545808/home-hero-1_eyejxg.jpg';
    const style_1 = {
      backgroundImage: `url("${imgUrl_1}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const title = this.state.title;
    const tagline = this.state.tagline;

    return (
      <div key="Privacy" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={style_1} >
            <h1 className="title">{title}</h1>
            <h4 className="tagline">{tagline} {this.state.date}</h4>
          </div>
        </div>
          <div className="app__page__grid">
          <div className="gutters">
            <p>Welcome to our Web Site (the “Site”).&nbsp;This Site is administered by JM tobacco (“JM”) in Los Angeles, CA, USA.&nbsp;We are committed to protecting the privacy of Internet users who visit our Site.&nbsp;This Privacy Practices Policy (“Privacy Policy”) is intended to inform you of the ways in which this Site collects information for the JM brand featured on the Site (the “Brand”), the uses for that information, and the ways in which we will protect any personal information you choose to provide us.&nbsp;</p>

            <p>&nbsp;</p>

            <h3>Effective Date/Updates</h3>

            <p>This Privacy Policy was last updated on June 15, 2018.&nbsp;We may update this Privacy Policy from&nbsp;time to time. &nbsp;Changes in our Privacy Policy will be effective immediately.&nbsp;If you are a regular visitor to this Site, we recommend that you check this Privacy Policy on a regular basis. By using the Site, you consent to the collection, use and transfer of your information in accordance with this Privacy Policy.&nbsp;If you do not agree to this Privacy Policy, please do not use this Site.</p>

            <p>&nbsp;</p>

            <h3>Persons Under Legal Smoking Age Are Not Allowed</h3>

            <p>JM maintains this Site for the use of individuals who are of legal age to consume tobacco products under applicable law, and you must be of legal smoking age where you reside to access the Site or provide information to us.&nbsp;We do not solicit or knowingly collect personal&nbsp;information from persons under such legal smoking age, and we do not knowingly market our products or services to persons under such legal smoking&nbsp;age.&nbsp;</p>

            <p>&nbsp;</p>

            <h3>Information Voluntarily Provided by You&nbsp;</h3>

            <p>We may collect information that our visitors volunteer to us, including but not limited to name, date of birth, postal address, e-mail address, telephone numbers, cell phone numbers, gender, household information, consumption habits, product usage, attitudes and preferences regarding our products and other personal information (collectively, “Personal Information”).&nbsp;Any Personal Information you send us will be used for the purpose indicated on the Site or as stated in this policy.</p>

            <p>&nbsp;</p>

            <h3>Use of Personal Information</h3>

            <p>This Personal Information will be held by JM and may be used by JM and its affiliated companies and their agents, partners, or licensees.&nbsp;We will not sell, exchange or otherwise distribute your Personal Information to unaffiliated third parties without your consent, except to the extent required by law, or as set out below: &nbsp;</p>

            <ul>
              <li><strong>Agents and Service Providers.</strong>&nbsp;We sometimes contract with other companies and individuals to perform functions or services on our behalf.&nbsp;They may have access to Personal Information needed to perform their functions, but are restricted from using the Personal Information for purposes other than providing services for us.</li>
              <li><strong>Business Transfers.</strong> In the event that our business is transferred to or merged with another company or entity, your Personal Information may be transferred to another company or entity that is part of the business transfer or merger.&nbsp;</li>
              <li><strong>Legal Matters.</strong> We may preserve and disclose any Personal Information and any information about your use of this Site if we have a good faith belief that such action is necessary to: (a) protect and defend the rights, property or safety of JM, its affiliates, other users of this Site, or the public; (b) enforce the Site’s <strong><a href="/terms">TERMS OF USE</a></strong>&nbsp;or (c) respond to claims that any content violates the rights of third-parties. We may also disclose information as we deem necessary to satisfy any applicable law, regulation, legal process or governmental request.</li>
            </ul>

            <p>The Personal Information we receive will be used in our marketing, promotion and advertising of the Brand.&nbsp;As a result of providing us with your contact information, we may contact you by sending you mailings or other communications (electronic or otherwise) regarding the Brand’s products, services, promotions, or upcoming events that we believe may be of interest to you. We may also ask you (or have a service provider ask on your behalf) to participate in a survey seeking information or opinions related to our category of products. &nbsp;</p>

            <p>&nbsp;</p>

            <h3>Cookies</h3>

            <p>A cookie is a text-only string of information that a website transfers to the cookie file of the browser on your computer's hard disk, so that the website can remember certain information. Cookies cannot be used by themselves to identify you.  </p>

            <p>Currently, two types of cookies are used on this Website. However, cookies may be changed at any time by updating this posting. Please refer to the "Last Updated" legend at the top of this posting. Session cookies are temporary cookies that remain in the cookie file of your browser until you leave the site.
            </p>
            <p>&nbsp;</p>
            <p>We use session cookies to:</p>
            <p>Carry information across pages of our Website and maintain your preferred language throughout the session. This cookie will be initiated each time you affirm your age on our Website. Persistent cookies remain in the cookie file of your browser even after the browser is closed. The length of time a cookie remains depends on its lifespan.
            </p>
            <p>&nbsp;</p>

            <p>We use persistent cookies to:</p>
            <p>Help us recognize that you have already affirmed your age with the Website. If you select the “Remember Me” option, a non-expiring cookie will be used to keep your birth date and country of residence and allows re-entry to the Website without having to affirm your age each time you visit. If you do not choose the “Remember Me” feature, then a cookie is held for two hours and allows re-entry to the Website without having to affirm your age each time you visit. After two hours, you will be prompted to affirm your age again to gain entry to our Website. Track the number of entries to a contest/sweepstakes/prize draw. If a contest/sweepstakes/prize draw allows only one entry per day, a cookie may be used to prevent multiple entries. This type of cookie is used only if you enter a contest/sweepstakes/prize draw. Generate anonymous, aggregated statistics about the visitors to this Website by using Google Analytics. These statistics help us understand how users navigate the Website and help us improve the structure of our Website. These statistics include for example: most popular and least popular pages visited, amount of time visitors stay on the site and the percentage of visitors that leave the site before entering their birth date. These cookies expire within two years after you leave the Website. Google offers instructions to opt out of tracking by Google Analytics across all websites at http://tools.google.com/dlpage/gaoptout. Note that most browsers are initially set to accept cookies. However, you have the ability to disable cookies if you wish, generally through changing the internet software browsing settings. It may also be possible to change the settings to enable acceptance of specific cookies. Please refer to the help section on your browser. If cookies are disabled you will be unable to access our Website.
            </p>
            <p>&nbsp;</p>
            <p>For more information about cookies and how to disable them please visit <a href="www.allaboutcookies.org">clicking here</a></p>

            <p>&nbsp;</p>

            <h3>Pixel Tags</h3>

            <p>We and our service providers may also use so-called "pixel tags," "web beacons," "clear GIFs" or similar means (collectively, "Pixel Tags") in connection with some Site pages and HTML-formatted e-mail messages to, among other things, compile aggregate statistics about Site usage and response rates. A Pixel Tag is an electronic image, often a single pixel (1x1), that is ordinarily not visible to Site visitors and may be associated with Cookies on the visitors’ hard drives. When used in HTML-formatted e-mail messages, Pixel Tags can tell the sender whether and when the e-mail has been opened.</p>

            <p>&nbsp;</p>

            <h3>E-mails to Friends</h3>

            <p>In the event that we offer the functionality to permit you to send messages regarding Site-related content to a friend through the Site, you may provide us with your friend’s e-mail address so that we can facilitate your sending a message to your friend; provided, however, that we reserve the right to refuse to facilitate the message for any reason, including without limitation restrictions placed on this functionality by your jurisdiction or that of your friend.&nbsp;JM may retain your friend’s email address but will use your friend’s address only as described in this Privacy Policy and will not send additional promotional messages to your friend unless your friend registers with us (or has registered previously). Please note that any personal data you provide in connection with your request to send messages to your friend may be disclosed to your friend.</p>

            <p>&nbsp;</p>

            <p>By using our send-to-a-friend functionality, you confirm that all friends you nominate to receive messages are of legal smoking age in the country where they reside and that they have consented to receiving the email(s) from this Site that you request us to send.</p>

            <p>&nbsp;</p>

            <h3>Promotions</h3>

            <p>We may have promotions or sweepstakes on our Site. When you enter a promotion or sweepstakes, we will ask for Personal Information about you. We will use this information for the purposes of administering the promotion or sweepstakes. We will also use and store this information for the purposes set forth under “<strong>Use of Personal Information</strong>” above unless you instruct us otherwise either through mechanisms provided with the entry form or by contacting us. Any additional uses for this information will be set forth in the Official Rules of the promotion.</p>

            <p>&nbsp;</p>

            <h3>Information Posted by Visitors</h3>

            <p>JM may make available through the Site services such as message boards to which you are able to post information, photos, images and other materials. Please note that any information, photos, images or materials you disclose through such services or otherwise on the Site becomes public information, and may be available to visitors to the Site all over the world and to the general public. In addition, when you choose to make a posting on such services, certain personal data will be available for other users to view. We urge you to exercise discretion and caution when deciding to disclose personal data, or any other information, on the Site. WE ARE NOT RESPONSIBLE FOR THE USE OF ANY PERSONAL DATA YOU VOLUNTARILY DISCLOSE THROUGH THE SITE. &nbsp;</p>

            <p>&nbsp;</p>

            <p>Also, please recognize that the individual forums and chat rooms may have additional rules and conditions. Each participant’s opinion on a forum or chat room is his or her own and should not be considered as reflecting our opinion.&nbsp;</p>

            <p>&nbsp;</p>

            <h3>Third-Party Websites</h3>

            <p>The Site may contain links to third-party websites. These linked websites are not under JM’s control, and we are not responsible for the privacy practices or the contents of any such linked website or any link contained in any linked website. We provide such links only as a convenience, and the inclusion of a link on the website does not imply endorsement of the linked website by JM. If you provide any personal data through any such third-party website, your transaction will occur on the third party's website (not this Site) and the personal data you provide will be collected by and controlled by the privacy policy of that third party. We recommend that you familiarize yourself with the privacy policies and practices of any third parties. PLEASE NOTE THAT THIS PRIVACY POLICY DOES NOT ADDRESS THE PRIVACY OR INFORMATION PRACTICES OF ANY THIRD PARTIES.</p>

            <p>&nbsp;</p>

            <h3>Your Information and Opting-Out</h3>

            <p>If you do not want to receive further communications from the Brand, please send a written request to the postal or e-mail address set out in this Privacy Policy or follow the opt-out instructions in the e-mail you receive from us.&nbsp;Please specify the means of communication from which you would like to opt-out.&nbsp;Otherwise, you may not get communications you would otherwise expect to receive from us. To unsubscribe <a href="/unsubscribe">click here</a>.</p>

            <p>&nbsp;</p>

            <h3>Access to and Amendment of Information</h3>

            <p>You can ask to review and correct the Personal Information that we maintain about you by sending a written request to JM's Consumer Support, P.O. Box 8027, Lynchburg, Tennessee 37352, USA, online by <a href="/contact-us">clicking here</a> or via email at Jack_Daniels@lynchburg.jackdaniels.com.</p>

            <p>&nbsp;</p>

            <h3>External Links&nbsp;</h3>

            <p>This Site may include links to other websites whose privacy policies we do not control. Once you leave our servers (you can usually tell where you are by checking the URL in the location bar on your browser), use of any information you provide is governed by the privacy policy of the operator of the site you are visiting (unless otherwise stated). That policy may differ from ours. If you can't find the privacy policy of any of these sites via a link from the site's homepage, you should contact the site directly for more information.&nbsp;</p>

            <p>&nbsp;</p>

            <h3>Information Storage and Security</h3>

            <p>This Site and all information that you submit through this Site is collected, stored, and processed in the United States. We use reasonable physical, electronic, and administrative safeguards to protect your Personal Information from unauthorized or inappropriate access. However, regardless of the effectiveness of our security measures, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. We ask that you do your part by, at a minimum, keeping any computer passwords you use to access the Internet or this Site strictly confidential. &nbsp;</p>

            <p>&nbsp;</p>

            <h3>Information Related to Employment&nbsp;</h3>

            <p>If you choose to submit your resume or apply for a position with us through this Site, we will use (and transfer, if necessary) the information you provide in order to evaluate your experience as it relates to potential employment opportunities with JM or our affiliated companies throughout the world. We will use the information to contact you regarding any positions for which we believe you may be interested in submitting an application or other opportunities at JM or our affiliates that we think may interest you.</p>

            <p>&nbsp;</p>

            <h3>Contact Information</h3>

            <p>Questions regarding this policy should be directed to JM's Consumer Support online by <a href="/contact">clicking here</a> or via email at <a href="mailto:jmtobaccosite@gmail.com">JM</a>.</p>

            <p>&nbsp;</p>

            <p>© 2018 JM tobacco. &nbsp;All Rights Reserved.</p>

          </div>
        </div>
      </div>
    );
  }
}

