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
      title: 'Terms of Service',
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
      <div key="Terms" className="app__route">
        <div className="app__page__intro">
          <div className="app__page__intro__cell" style={style_1} >
            <h1 className="title">{title}</h1>
            <h4 className="tagline">{tagline} {this.state.date}</h4>
          </div>
        </div>
        <div className="app__page__grid">
          <div className="gutters">
            <p>To access this Website you must be of legal smoking age in the country where you reside. Please exit this Website immediately if you are not of a legal age for consuming tobacco products in the country or territory in which you reside, or are in a country or territory where the access to this Website is not permitted.</p>

            <p>&nbsp;</p>

            <p>By entering this Website you agree to be bound by the Terms and Conditions of Use (“Terms of Use”), which shall take effect immediately on your first visit of the Website. Please read the Terms of Use carefully before accessing and using the Website. If you do not agree and accept, without limitation or qualification, these Terms of Use, please exit the Website.</p>

            <p>&nbsp;</p>

            <p>JM Tobacco (the “Company,” “we,” “us”) may revise these Terms of Use at any time by updating this posting. You can determine when these Terms of Use were last revised by referring to the "LAST UPDATED" legend at the top of these Terms of Use.&nbsp;Your continued use of the Website will be deemed acceptance of the updated or amended terms.&nbsp;If you do not agree to the changes, you should cease using this Website. &nbsp;When using any Services (as defined in Section 2), you agree that you are subject to any additional posted guidelines, rules, terms and conditions applicable to such Services, which are hereby incorporated by reference into these Terms of Use.</p>

            <p>&nbsp;</p>

            <p>Except as otherwise stated in Section 10 (Promotions), if there is any conflict between these Terms of Use and specific provisions appearing elsewhere on the Website, then these Terms of Use shall prevail.</p>

            <p>&nbsp;</p>

            <h3>1. Restricted Uses.</h3>

            <p>The Website is owned and operated by Company. The content of this Website, including but not limited to any trademarks, designs, logos, text, images, audio and video materials thereon, is the intellectual property of Company or its affiliates (“Company’s Proprietary Material”) unless otherwise stipulated in writing. Company’s Proprietary Material is protected under the laws of the United States of America and other nations around the world, and under international treaties—in particular under copyright and trademark laws. You are not permitted to remove any copyright or other proprietary notice from Company’s Proprietary Material. You are also not permitted to publish, distribute, transmit online or offline or otherwise use Company’s Proprietary Material in any way for any public or commercial purpose, without the prior and express written consent of Company. Subject to your compliance with these Terms of Use, and solely for as long as you are permitted by Company to access and use the Website, you may download one (1) copy of any particular materials from the Website for your own personal, non-commercial use, provided that you agree to abide by any copyright notice or other restrictions contained in or applicable to such materials, including any author attribution, copyright or trademark notice or restriction in any such material that you download.</p>

            <p>&nbsp;</p>

            <h3>2. Description of the Services.</h3>

            <p>The Company provides users of the Website with access to content and services related to the Company’s products and concerning tobacco products generally, including without limitation:(a) content such as information, drink recipes, audio and video clips, photographs, graphics, images, text, data, event information, links to third party websites, user comments, commentary, articles, opinions, postings and messages and (b) services such as “Profiles” (as defined in Section 8), “Forums” (as defined in Section 8), registration functionality, promotions (as described in Section 10) and interactive features (such content and services, collectively, the “Services”).</p>

            <p>&nbsp;</p>

            <h3>3. Use of Information/Materials.</h3>

            <p>You may print or have printed by a third party any downloadable information or materials offered on this Website provided that all of the following seven conditions are met:</p>

            <ul>
                        <li>You require the materials or information solely for, private and not for direct or indirect&nbsp;commercial purposes;&nbsp;</li>
                        <li>Your use of the materials is for lawful purposes;&nbsp;</li>
                        <li>No copyright or other notice regarding the rights or property of third parties is removed from the&nbsp;materials or information;</li>
                        <li>You do not assert any copyright or other intellectual property, ownership or other interest or right&nbsp;in respect of the materials or information;</li>
                        <li>You do not use the materials or information to encourage or condone under-age smoking, drunk&nbsp;driving or excessive consumption of tobacco products;</li>
                        <li>You reside in a country or territory where the consumption of tobacco products is permitted;&nbsp;and</li>
                        <li>You are of a legal age to consume tobacco products pursuant to the laws of the country or&nbsp;territory in which you reside or of the age at which you have legal capacity to contract in the&nbsp;country in which you are resident, whichever is the greater.</li>
                      </ul>

            <p>&nbsp;</p>

            <h3>4. Limited License.</h3>

            <p>Except for the limited license to download and print certain material / information from this Website for&nbsp;non-commercial and private purposes only, you have no right to use Company’s Proprietary Material. All&nbsp;rights with respect to Company’s Proprietary Material remain the exclusive property of Company or its&nbsp;affiliates.</p>

            <p>&nbsp;</p>

            <h3>5. Information Submitted Through the Website.&nbsp;</h3>

            <p>Your submission of information through the Website is governed by Company's Privacy Policy and&nbsp;Security Statement (the "<a href="/privacy-policy">Privacy Policy</a>")&nbsp;, and these Terms of Use incorporate by reference&nbsp;the terms and conditions of the Privacy Policy. &nbsp;You represent and warrant that any information you&nbsp;provide in connection with your use of the Website is true, accurate and complete, and that you will&nbsp;maintain and update such information as needed such that the information remains true, accurate and&nbsp;complete.</p>

            <p>&nbsp;</p>

            <h3>6. Registration; User Names and Passwords.</h3>

            <p>From time to time, certain sections of this Website may be restricted to registered users.&nbsp;Where a&nbsp;registration procedure applies, you may be required to register with Company in order to access certain&nbsp;areas of the Website. You may not register or make any “Submissions” (as defined in Section 8 (Profiles,&nbsp;Forums and Submissions)) unless you are of legal age to purchase alcohol in your country or territory of&nbsp;residence and in the country or territory from which you are accessing the Website. With respect to any&nbsp;such registration, we may refuse to grant you, and you may not use, a user name or email address that&nbsp;belongs to or is already being used by another person; that may be construed as impersonating another&nbsp;person; that violates the intellectual property or other rights of any person; that is offensive; or that we&nbsp;reject for any other reason in our sole discretion. You are responsible for maintaining the confidentiality&nbsp;of any password you may use to access the Website, and you agree not to transfer your password or&nbsp;user name, or lend or otherwise transfer your use of or access to the Website, to any third party. You are&nbsp;fully responsible for all transactions (including any information transmitted in connection with any&nbsp;transactions) and other interactions with the Website that occur in connection with your user name. You&nbsp;agree to immediately notify Company of any unauthorized use of your password or user name or any&nbsp;other breach of security related to your account, your user name or the Website, and to ensure that you&nbsp;"log off" and exit from your account with the Website (if applicable) at the end of each session. We are&nbsp;not liable for any loss or damage arising from your failure to comply with any of the foregoing obligations.</p>

            <p>&nbsp;</p>

            <h3>7. Rules of Conduct.</h3>

            <p>We expect users of the Website to respect the law as well as the rights and dignity of others. While using&nbsp;the Website and the Services, you agree to comply with all applicable laws, rules and regulations. In&nbsp;addition, your use of the Website and any Service is conditioned on your compliance with the rules of&nbsp;conduct set forth in this section, and failure to comply with these rules of conduct may result in&nbsp;termination of your access to the Website pursuant to Section&nbsp;18 (Miscellaneous) below.</p>

            <p>&nbsp;</p>

            <p>You agree not to:&nbsp;</p>

            <p>&nbsp;</p>

            <ul>
                        <li>Post, transmit, or otherwise make available through or in connection with the Website:
                <ul>
                  <li>any information or materials that are or may be, or the posting, transmission or use of&nbsp;which is or may be: &nbsp;(a) threatening, harassing, degrading, hateful or intimidating; (b)&nbsp;defamatory or libelous; (c) fraudulent or tortious; (d) obscene, indecent, pornographic or&nbsp;otherwise objectionable; (e) protected by copyright, trademark, trade secret, right of&nbsp;publicity or privacy or any other proprietary right; (f) depicting or endorsing irresponsible&nbsp;smoking; or (g) depicting or endorsing activities that are inappropriate when consuming or&nbsp;after consuming tobacco products such as operating a motor vehicle;</li>
                  <li>any material that would give rise to criminal or civil liability; that encourages conduct that&nbsp;constitutes a criminal offense; or that encourages or provides instructional information&nbsp;about illegal activities or activities such as "hacking," "cracking," or "phreaking";</li>
                  <li>any virus, worm, Trojan horse, Easter egg, time bomb, spyware, or other computer code,&nbsp;file, or program that is harmful or invasive or that may or is intended to damage, hijack,&nbsp;disable, interfere with, or disrupt the operation of, or monitor the use of, any hardware,&nbsp;software or equipment;</li>
                  <li>any unsolicited or unauthorized advertisements, promotional material, "junk mail,"&nbsp;"spam," "chain letter," "pyramid scheme" or investment opportunity, or any other form of&nbsp;solicitation that is not expressly approved by Company in advance;</li>
                  <li>any personally identifiable information of another individual, without the prior consent of&nbsp;such individual;</li>
                  <li>any material, non-public information about a company, without the proper authorization to&nbsp;do so.</li>
                </ul>
              </li>
                        <li>Use the Website for any fraudulent or unlawful purpose.</li>
                        <li>Use the Website to defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of&nbsp;others, including without limitation others' privacy rights or rights of publicity, or to harvest or collect&nbsp;information about users of the Website.</li>
                        <li>Impersonate any person or entity, including without limitation any representative of Company;&nbsp;falsely state or otherwise misrepresent your affiliation with any person or entity in connection with the&nbsp;Website; or express or imply that we endorse any statement you make.</li>
                        <li>Interfere with or disrupt the operation of the Website or the servers or networks used to make the&nbsp;Website available; or violate any requirements, procedures, policies or regulations of such networks.</li>
              <li>Restrict or inhibit any other person from using the Website (including without limitation by hacking&nbsp;or defacing any portion of the Website).</li>
                        <li>Use the Website to advertise or offer to sell or buy any goods or services for any business&nbsp;purpose without Company's express prior written consent.</li>
                        <li>Reproduce, duplicate, copy, sell, resell, link to or otherwise exploit for any commercial purposes,&nbsp;any portion of, use of, or access to, the Website.</li>
                        <li>Modify, adapt, translate, reverse engineer, decompile or disassemble any portion of the Website.</li>
                        <li>Remove any copyright, trademark or other proprietary rights notice from the Website or materials&nbsp;originating from the Website.</li>
                        <li>Frame or mirror any part of the Website.</li>
                        <li>Create a database by downloading and storing Website content.</li>
                        <li>Use any robot, spider, site search/retrieval application or other manual or automatic device to&nbsp;retrieve, index, "scrape," "data mine" or in any way gather Website content or reproduce or circumvent&nbsp;the navigational structure or presentation of the Website without Company's express prior written&nbsp;consent.</li>
                      </ul>

            <p>&nbsp;</p>

            <p>Additionally, you acknowledge and agree that you (and not Company) are responsible for obtaining and&nbsp;maintaining all telecommunications, broadband, and computer hardware, equipment, and services&nbsp;needed to access and use the Website and for paying all charges related thereto.</p>

            <p>&nbsp;</p>

            <p>If Company is made aware of any information or materials posted, transmitted, or otherwise made&nbsp;available through or in connection with the Website that may be a violation of any law, regulation, or rights&nbsp;of a third party, including, but not limited to, rights under the copyright law and prohibitions on libel,&nbsp;slander, and invasion of privacy, or a violation of these Terms of Use, Company has the right, but not the&nbsp;obligation, to remove or disable access to the respective information or materials. &nbsp;</p>

            <p>&nbsp;</p>

            <h3>8. Profiles, Forums and Submissions.</h3>

            <p>If available, you may post certain information and materials on your “profile page” in connection with the&nbsp;Website (your “Profile”). Further, Company and/or its service providers may offer features through the&nbsp;Website that enable you to post information, photographs and other materials and images publicly&nbsp;(collectively referred to herein as "Forums"). &nbsp;All of the rules of conduct described in Section&nbsp;7 above&nbsp;apply to Profiles and Forums. &nbsp;Additionally, without Company's express prior written consent, you may not&nbsp;use Profiles or Forums for any commercial purposes, including the promotion or advertisement of any&nbsp;goods, services or opportunities, and you may not use Profiles or Forums to solicit other Website visitors&nbsp;or users to visit or become members of, subscribe to or register with any commercial online service or&nbsp;other organization.</p>

            <p>&nbsp;</p>

            <p>Information contained in the Profiles and Forums may be provided by third party visitors to the Website. Please note that Website visitors may post messages or make statements in the Profiles and Forums that&nbsp;are inaccurate, misleading or deceptive. Company and its group companies and their respective&nbsp;employees, officers, directors, shareholders, affiliates, agents, representatives, licensors, suppliers and&nbsp;service providers neither endorse nor are responsible for any opinion, advice, information or statements&nbsp;made in the Profiles and Forums by third parties. Without limitation, Company and its group companies&nbsp;and their respective employees, officers, directors, shareholders, affiliates, agents, representatives,&nbsp;licensors, suppliers and service providers are not responsible for any information or materials made&nbsp;available through the Profiles and Forums (including without limitation errors or omissions in Profiles and&nbsp;Forum postings or links or images embedded in a Profile or in Forum messages) or results obtained by&nbsp;using any such information or materials. Under no circumstances will Company or its respective&nbsp;employees, officers, directors, shareholders, affiliates, agents, representatives, licensors, suppliers or&nbsp;service providers be liable for any loss or damage caused by your reliance on such information or&nbsp;materials. The opinions expressed in the Profiles and Forums reflect solely the opinions of the individuals&nbsp;who submitted such opinions, and may not reflect the opinions of the Company.</p>

            <p>When you submit or make available any information, photographs or other materials and images through&nbsp;the Profiles, Forums or otherwise through the Website ("Submissions"), you acknowledge and agree&nbsp;that those Submissions will be nonproprietary and nonconfidential, may be made available to the general&nbsp;public, and may be used by Company without restriction. You grant to Company the worldwide,&nbsp;perpetual, royalty-free, irrevocable, nonexclusive right and license, sublicensable through multiple tiers,&nbsp;without compensation to you, to use, reproduce, distribute (through multiple tiers), adapt (including&nbsp;without limitation edit, modify, translate and reformat), create derivative works of, transmit, publicly&nbsp;display, publicly perform, digitally perform, make, have made, sell, offer for sale and import all&nbsp;Submissions, in any media now known or hereafter developed, for any purpose whatsoever, commercial&nbsp;or otherwise. &nbsp;You represent and warrant that you have all rights necessary for you to grant the licenses&nbsp;granted in this section with respect to each Submission and that your provision of Submissions through&nbsp;the Profiles, Forums or otherwise through the Website complies with all applicable laws, rules and&nbsp;regulations. You further irrevocably waive any "moral rights" or other rights with respect to attribution of&nbsp;authorship or integrity of materials regarding any Submission that you may have under any applicable law&nbsp;or under any legal theory. This section will survive termination of these Terms of Use for any reason.</p>

            <p>&nbsp;</p>

            <p>We reserve the right, at our sole discretion, to edit any Submission and to choose to include or not&nbsp;include such Submission in a Profile, the Forums or otherwise in the Website. The Profiles and Forums&nbsp;include the opinions, statements and other content of third parties. We are not responsible for screening,&nbsp;monitoring or verifying such content, including such content's accuracy, reliability or compliance with&nbsp;copyright or other laws. &nbsp;Any opinions, statements or other materials made available by third parties&nbsp;through the Profiles and Forums or otherwise through the Website are those of such third parties and not&nbsp;of Company, and Company does not endorse any such opinions, statements or materials. We may&nbsp;remove objectionable statements or other content from the Website at any time if we deem removal to be&nbsp;warranted. Please understand that removal or editing of any Submission or other materials may not&nbsp;occur immediately.</p>

            <p>You acknowledge and agree that Company has no control over, and shall have no liability for any&nbsp;damages resulting from, the use (including without limitation re-publication) or misuse by any third party of&nbsp;information voluntarily made public through the Forums or any other part of the Website. IF YOU&nbsp;CHOOSE TO MAKE ANY OF YOUR PERSONALLY IDENTIFIABLE OR OTHER INFORMATION&nbsp;PUBLICLY AVAILABLE IN A PROFILE OR A FORUM OR OTHERWISE ON THE WEBSITE, YOU DO&nbsp;SO AT YOUR OWN RISK.</p>

            <p>&nbsp;</p>

            <h3>9. Monitoring.</h3>

            <p>Company may (but has no obligation to) monitor, evaluate, alter, refuse to post or remove Submissions&nbsp;before or after they appear on the Website. Company may disclose any Submissions and the&nbsp;circumstances surrounding their transmission to anyone for any reason or purpose. If you become aware&nbsp;of any unlawful, offensive or objectionable materials(s) on the Website (except for material that infringes&nbsp;copyright, which is discussed in Section 17 (Claims of Copyright Infringement) below), please contact&nbsp;<a href="mailto:jmtobaccosite@gmail.com">JM</a>&nbsp;with your name and address, a description of the&nbsp;material(s) at issue and the URL or location of such materials.</p>

            <p>&nbsp;</p>

            <h3>10. Promotions.</h3>

            <p>Any prize draws, contests, or similar promotions made available through this Website may be governed&nbsp;by specific rules that are separate from these Terms of Use. By participating in any such prize draw,&nbsp;contest, or promotion you agree to become subject to those rules, which may vary from the terms and&nbsp;conditions set forth herein. Company urges you to read the applicable rules, if any, which will be linked&nbsp;from the particular activity, and to review the <a href="/privacy-policy">Privacy Policy and Security Statement</a>, which, in&nbsp;addition to these Terms of Use, will govern any information you submit in connection with such activities.&nbsp;To the extent that the terms and conditions of such rules conflict with these Terms of Use, the terms and&nbsp;conditions of such rules will control.</p>

            <p>&nbsp;</p>

            <h3>11. Links to or from Other Websites.</h3>

            <p>Except as otherwise expressly stated by Company on the Website, Company is not affiliated or&nbsp;associated with operators of any third party websites that link to or are linked from the Website. Company&nbsp;expressly disclaims any responsibility for the accuracy, content, or availability of information found on&nbsp;third party websites that link to or are linked from the Website. We cannot ensure your satisfaction with&nbsp;any products or services that are available through any third party site that links to or is linked from the&nbsp;Website because these third party sites are owned and operated by independent entities. We do not&nbsp;endorse any of the products or services, nor have we taken any steps to confirm the accuracy or reliability&nbsp;of any of the information, made available through any third party sites. We make no representations or&nbsp;warranties as to the security of any information (including without limitation credit card or other payment&nbsp;card and other personal information) that you may provide or be requested to provide to any third party,&nbsp;whether through such a third party site or otherwise.</p>

            <p>&nbsp;</p>

            <p>YOU AGREE THAT YOUR USE OF THIRD PARTY SITES AND RESOURCES AND ANY CONTENT,&nbsp;INFORMATION, DATA, ADVERTISING, PRODUCTS, SERVICES, OR OTHER MATERIALS ON OR&nbsp;AVAILABLE THROUGH SUCH SITES AND RESOURCES IS AT YOUR OWN RISK AND IS SUBJECT&nbsp;TO THE TERMS AND CONDITIONS OF USE APPLICABLE TO SUCH SITES AND RESOURCES.</p>

            <p>&nbsp;</p>

            <p>Company shall have the right, at any time and at its sole discretion, to block links to the Website through&nbsp;technological or other means without prior notice.</p>

            <p>&nbsp;</p>

            <h3>12. Limitation of Liability and Disclaimers.</h3>

            <p>TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, THE WEBSITE AND ALL SERVICES, INFORMATION AND MATERIALS MADE AVAILABLE THROUGH THE WEBSITE ARE PROVIDED TO YOU “AS IS” WITHOUT ANY EXPRESS REPRESENTATIONS OR WARRANTIES OF ANY KIND, AND COMPANY, ITS GROUP COMPANIES AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS OR AGENTS DISCLAIM ALL STATUTORY OR IMPLIED REPRESENTATIONS AND WARRANTIES WITH RESPECT TO THE WEBSITE AND ALL SERVICES, INFORMATION AND MATERIALS MADE AVAILABLE THROUGH THE WEBSITE, INCLUDING THE REPRESENTATIONS AND WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND TITLE. &nbsp;TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, COMPANY MAKES NO REPRESENTATION OR WARRANTY THAT ANY PARTICULAR SOFTWARE OR HARDWARE WILL BE COMPATIBLE WITH THE WEBSITE, AND YOU HEREBY AGREE THAT IT IS YOUR SOLE RESPONSIBILITY TO ENSURE THAT ANY SOFTWARE OR HARDWARE YOU USE WILL FUNCTION CORRECTLY WITH THE WEBSITE. &nbsp;TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, YOU AGREE THAT YOU MUST EVALUATE, AND THAT YOU BEAR ALL RISKS ASSOCIATED WITH, THE USE OF THE WEBSITE, INCLUDING ANY RELIANCE ON THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY INFORMATION OR MATERIALS MADE AVAILABLE THROUGH THE WEBSITE.</p>

            <p><br />
TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, COMPANY, ITS GROUP COMPANIES AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS OR AGENTS WILL NOT BE LIABLE FOR (A) ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND IN CONNECTION WITH THE WEBSITE OR SERVICES, NOR FOR ANY DAMAGES FOR LOSS OF PROFITS, LOSS OF USE, LOSS OF DATA, LOSS OF OTHER INTANGIBLES, LOSS OF SECURITY OF INFORMATION YOU HAVE PROVIDED IN CONNECTION WITH YOUR USE OF THE WEBSITE OR SERVICES, OR UNAUTHORIZED INTERCEPTION OF ANY SUCH INFORMATION BY THIRD PARTIES, EVEN IF ADVISED IN ADVANCE OF SUCH DAMAGES OR LOSSES AND (B) DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF THE WEBSITE, SERVICES OR FROM ANY INFORMATION OR MATERIALS ON THE WEBSITE. &nbsp;YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE WEBSITE OR THE SERVICES IS TO STOP USING THE WEBSITE. &nbsp;TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, THE MAXIMUM LIABILITY FOR COMPANY, ITS GROUP COMPANIES AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS OR AGENTS FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE) OR OTHERWISE SHALL BE THE TOTAL AMOUNT, IF ANY, PAID BY YOU TO COMPANY TO ACCESS AND USE THE WEBSITE OR SERVICES.
                                                        </p>

            <p>&nbsp;</p>

            <h3>13. Indemnification.</h3>

            <p>To the fullest extent permitted under applicable law, you will indemnify, defend and hold the Company harmless from and against any and all claims, actions,&nbsp;demands, causes of action and other proceedings arising from or related to any of the following (the&nbsp;"Claims"): &nbsp;(a) your use of, inability to use, or activities in connection with the Website or any Service; (b)&nbsp;any violation of these Terms of Use or any other Company terms, conditions or policies by you or through&nbsp;any account you may have with any Website; (c) any transaction; (d) any allegation that any Submission&nbsp;or other materials that you make available through the Website infringe or otherwise violate the&nbsp;intellectual property, privacy, or other rights of any third party; or (e) your violation of any rights of any&nbsp;Website visitor, user, or customer, or any other third party; and you agree to reimburse the Company on&nbsp;demand for any damages, losses, costs, judgments, fees, fines and other expenses they incur (including&nbsp;attorneys' fees and court costs) as a result of any Claim(s).</p>

            <p>&nbsp;</p>

            <h3>14. Termination and Enforcement.</h3>

            <p>You agree that Company, at its sole discretion, may terminate your access to or use of the Website or the&nbsp;Services, at any time and for any reason, including without limitation if Company believes that you have&nbsp;violated or acted inconsistently with the letter or spirit of these Terms of Use (including but not limited to&nbsp;your failure to comply with the rules of conduct set forth in Sections 7 and 8 (Rules of Conduct; Profiles,&nbsp;Forums and Submissions) above). Upon any such termination, your right to use the Website will&nbsp;immediately cease. You agree that any termination of your access to or use of the Website may be&nbsp;effected without prior notice and that Company may immediately deactivate or delete any user name&nbsp;and/or password used by or provided to you, and all related information and files associated therewith,&nbsp;and/or bar any further access to such information or files. You agree that Company shall not be liable to&nbsp;you or any third party for any termination of your access to the Website or to any such information or files&nbsp;and shall not be required to make such information or files available to you after any such termination. Company reserves the right to take steps that Company believes are necessary or appropriate to enforce&nbsp;and/or verify compliance with these Terms of Use (including without limitation in connection with any legal&nbsp;process relating to your use of the Website and/or a third party claim that your use of the Website is&nbsp;unlawful or violates such third party's rights). &nbsp;Sections 4, 7-9, 11-15, and 18-19 shall survive any expiration&nbsp;or termination of these Terms of Use.</p>

            <p>&nbsp;</p>

            <h3>15. Governing Law.</h3>

            <p>These Terms of Use shall be governed by the laws of the Commonwealth of Kentucky, USA, without&nbsp;regard to its conflict of laws principles. You and JM Tobacco agree to submit to the personal and&nbsp;exclusive jurisdiction of the courts located within the Commonwealth of Kentucky and waive any&nbsp;jurisdictional, venue or inconvenient forum objections to such courts. You agree that regardless of any&nbsp;statute or law to the contrary, any claim or cause of action arising out of or related to use of this Website&nbsp;or these Terms of Use must be filed within one (1) year after such claim or cause of action arose. Your&nbsp;conduct may be subject to other laws. Use of this Website is unauthorized in any jurisdiction that does not&nbsp;give effect to all provisions of these Terms of Use, including without limitation this Section 15 (Governing&nbsp;Law).</p>

            <p>&nbsp;</p>

            <h3>16. Contacting Us.</h3>

            <p>If you have any questions regarding the Website or these Terms of Use, please contact us by&nbsp;<a href="mailto:jmtobaccosite@gmail.com">JM</a>, by postal mail. &nbsp;Please note that e-mail communications will not necessarily be secure; accordingly, you should&nbsp;not include credit or other payment card information or other sensitive information in your e-mail&nbsp;correspondence with us.&nbsp;</p>

            <p>&nbsp;</p>

            <h3>17. Claims of Copyright Infringement.</h3>

            <p>The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who&nbsp;believe that material appearing on the Internet infringes their rights under U.S. copyright law. &nbsp;If you&nbsp;believe in good faith that materials available on the Website infringe your copyright, you (or your agent)&nbsp;may send the Company a notice requesting that it remove the material or block access to it. &nbsp;If you&nbsp;believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the&nbsp;DMCA permits you to send a counter-notice. Notices and counter-notices must meet the then-current&nbsp;statutory requirements imposed by the DMCA. See <a href="https://www.copyright.gov/">https://www.copyright.gov/</a> for details. &nbsp;Notices and&nbsp;counter-notices should be sent to: JM Tobacco, c/o Julie Allen, 850 Dixie Highway,&nbsp;Louisville, Kentucky 40210 USA, Telephone 502-774-7592, Fax 502-774-7188, email:&nbsp;Domain_Master@B-F.com.</p>

            <p>&nbsp;</p>

            <p>We suggest that you consult your legal advisor before filing a notice or counter-notice.</p>

            <p>&nbsp;</p>

            <h3>18. Important Note to New Jersey Consumers.</h3>

            <p>If you are a consumer residing in New Jersey, the following provisions of this Terms of Use do not apply to you (and do not limit any rights that you may have) to the extent that they are unenforceable under New Jersey law: (a) in Section 12 above, the disclaimer of liability for any indirect, incidental, consequential, special, exemplary or punitive damages of any kind (for example, to the extent unenforceable under the New Jersey Punitive Damages Act, New Jersey Products Liability Act, New Jersey Uniform Commercial Code and New Jersey Consumer Fraud Act; (b) in Section 12 above, the limitation on liability for lost profits, loss of use, loss of data, loss of other intangibles, loss of security of information, or unauthorized interception of information (for example, to the extent unenforceable under the New Jersey Identity Theft Protection Act and New Jersey Consumer Fraud Act); (c) in Section 12 above, application of the limitations of liability to the recovery of damages that arise under contract, tort (including negligence) or any other theory (for example, to the extent such damages are recoverable by a consumer under New Jersey law, including the New Jersey Products Liability Act); (d) in Section 13 above, the requirement that you indemnify Company (for example, to the extent the scope of such indemnity is prohibited under New Jersey law); (e) in Section 15 above, the Kentucky governing law provision (for example, to the extent that your rights as a consumer residing in New Jersey are required to be governed by New Jersey law); and (f) in Section 15 above, the provision requiring claims or causes of action to be brought within one (1) year (for example, to the extent that New Jersey law provides consumers with a longer period in which to bring such an action).</p>

            <h3>19. Miscellaneous.</h3>

            <p>If any provision of these Terms of Use shall be deemed to be unlawful, void or for any reason&nbsp;unenforceable, then that provision shall be deemed severable from these terms and shall not affect the&nbsp;validity and enforceability of any remaining provisions. These Terms of Use do not, and shall not be&nbsp;construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee&nbsp;relationship between you and Company. You may not assign, transfer or sublicense any or all of your&nbsp;rights or obligations under these Terms of Use without our express prior written consent. No waiver by&nbsp;either party of any breach or default hereunder will be deemed to be a waiver of any preceding or&nbsp;subsequent breach or default. Any heading, caption or section title contained herein is inserted only as a&nbsp;matter of convenience, and in no way defines or explains any section or provision hereof. These Terms&nbsp;of Use, together with all agreements and statements referred to herein and incorporated herein by&nbsp;reference, is the entire agreement between you and Company relating to the subject matter hereof and,&nbsp;except as otherwise provided herein, supersedes any and all prior or contemporaneous written or oral&nbsp;agreements or understandings between you and Company relating to such subject matter. Notices to&nbsp;you may be made by posting a notice (or a link to a notice) on the Website, by email, or by postal mail, at&nbsp;Company's discretion.&nbsp;Without limitation, you agree that a printed version of these Terms of Use and of&nbsp;any notice given in electronic form shall be admissible in judicial or administrative proceedings based&nbsp;upon or relating to these Terms of Use to the same extent and subject to the same conditions as other&nbsp;business documents and records originally generated and maintained in printed form.</p>

            <p>&nbsp;</p>

            <p>© 2018&nbsp;JM Tobacco. All rights reserved.</p>

          </div>
        </div>
      </div>
    );
  }
}

