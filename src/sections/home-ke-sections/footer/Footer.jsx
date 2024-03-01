import "./Footer.css"
import ic1 from "../../../assets/logo/ic1.png"
import ic2 from "../../../assets/logo/ic2.webp"
import ic3 from "../../../assets/logo/ic3.png"
import ic4 from "../../../assets/logo/ic4.png"
import ic5 from "../../../assets/logo/ic5.png"
import ic6 from "../../../assets/logo/ic6.png"
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"


const Footer = () => {
   // const [show, setShow] = useState(false);
   const [lgShow, setLgShow] = useState(false);
   const [lgShow2, setLgShow2] = useState(false);
   // const handleClose = () => setShow(false);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   return (
      <>
         <div className="fmain">
            <footer className="footer-02" >
               <div className="container" style={{ paddingTop: 73 }}>

                  <div className="row">
                     <div className="col-md-4 col-lg-5" >
                        <div className="row">
                           <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                              <h2 className="footer-heading"> VICTA </h2>
                              <p>The energy issue is basically a blockchain issue due to the carbon footprint associated with mining digital assets like Bitcoin. </p>
                              <p ><img src={ic6} style={{ height: 20, width: 20, marginRight: 5 }} alt="address" /> Office No.902, 9th Floor, Opal Tower, Business Bay, Dubai,
                                 United Arabs Emirates </p>
                              <p ><img src={ic5} style={{ height: 20, width: 20, marginRight: 5 }} alt="email" /> info@victacapitals.com </p>
                           </div>

                        </div>
                     </div>
                     <div className="col-md-8 col-lg-7">
                        <div className="row">
                           <div className="col-md-3 mb-md-0 mb-4 border-left">
                              <h2 className="footer-heading">Quick Links</h2>
                              <ul className="list-unstyled">

                                 <li><a href="#about-main" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
                                 <li><a href="#roadmap-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Roadmap</a></li>
                                 <li><a href="#toko-head" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokenomics</a></li>
                                 <li><a href="https://victastake.com/" style={{ textDecoration: 'none' }} className="py-1 d-block">Staking</a></li>
                                 <li><a href="#hero-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Whitepaper</a></li>
                                 <li><a href="#usecase-main" style={{ textDecoration: 'none' }} className="py-1 d-block">Ecosystem</a></li>
                                 {/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Team Members</a></li> */}
                              </ul>
                           </div>

                           <div className="col-md-3 mb-md-0 mb-4 border-left">
                              <h2 className="footer-heading">Privacy</h2>
                              <ul className="list-unstyled">
                                 <li><Link to="/terms-and-conditon" onClick={scrollToTop} style={{ textDecoration: 'none' }} id="top" className="py-1 d-block">Terms and condition</Link></li>
                                 <li><Link to="/privacy" onClick={scrollToTop} style={{ textDecoration: 'none' }} id="top" className="py-1 d-block">Privacy Policy</Link></li>
                                 <li>  <Link style={{ textDecoration: 'none' }} className="py-1 d-block" onClick={() => setLgShow(true)}>
                                    <a style={{ textDecoration: 'none' }} href="#top"> Legal Agreement</a>
                                 </Link></li>
                                 <li><Link style={{ textDecoration: 'none' }} className="py-1 d-block" onClick={() => setLgShow2(true)}>
                                    <a style={{ textDecoration: 'none' }} href="#top2">Disclaimer</a>
                                 </Link></li>
                                 {/* <li><Link to="/Blog" onClick={scrollToTop} style={{ textDecoration: 'none' }} id="top" className="py-1 d-block">Blog</Link></li> */}


                              </ul>
                           </div>
                           <div className="col-md-3 mb-md-0 mb-4 border-left">
                              <h2 className="footer-heading">Social</h2>
                              <ul className="list-unstyled">
                                 <li><a target="blank" href="https://www.facebook.com/profile.php?id=61553615871015" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img src={ic1} style={{ height: 20, width: 20 }} alt="fb" /> Facebook</a></li>
                                 <li><a target="blank" href="https://twitter.com/victa_official" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img src={ic4} style={{ height: 20, width: 20 }} alt="x" /> X - (Twitter)</a></li>
                                 <li><a target="blank" href="https://www.instagram.com/victa.official/" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img src={ic2} style={{ height: 20, width: 20 }} alt="ig" /> Instagram</a></li>
                                 <li><a target="blank" href="https://www.linkedin.com/in/victa-capital-13081229a/" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img src={ic3} style={{ height: 20, width: 20 }} alt="Linkedin" /> Linkedin</a></li>
                                 <li></li>
                                 {/* <li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Googleplus</a></li> */}

                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row mt-5">
                     <div className="col-md-6 col-lg-8">


                     </div>

                  </div>
               </div>

            </footer>
         </div>
         <Modal size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
               <Modal.Title>Legal Agreement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>
                  By entering and using the Sites, and/or any page accessible on the Sites you signify your acceptance, without limitation or qualification, of these Terms without modification. By accessing and using the Sites (whether or not you have registered for an account with us), you acknowledge that you are bound by the Terms to the extent that each section applies.
                  We may change or amend the Terms from time to time without individual notice to you. You should check the Terms regularly to ensure that you are happy with any changes. If you continue to use the Sites you will be deemed to have accepted any changes to the Terms. <a style={{ textDecoration: "none" }} href="https://www.victacapitals.com">www.victacapitals.com</a> reserves the right to remove any information or material on the Sites without warning, and without prejudice to any other accrued rights, and/or make available such information or material when required to do so by law or when requested to do so by regulatory bodies or law enforcement organizations
                  If you do not agree to comply with your obligations in these Terms please do not use the Sites.
                  <br /><br />
                  There may be parts of the Sites, and some services, which are not available to visitors to the Sites. The Sites may therefore require you to sign-up, subscribe or register for a membership account with us in order for you to access certain pages of the Sites or services. During the course of any such registration or sign-up you will provide us with personal information about you. If there are any changes to the information supplied to us it is your responsibility to inform us straight away. Changes to your registration details should be made through your account page.
                  By registering or subscribing you consent to us using your data for the provision of the services and/or products. Your name, username and/or profile may be displayed publicly on the Sites when you submit content to the Sites or as otherwise specified. We may transfer your data to any of our affiliates or third parties, or if it is necessary for us to comply applicable laws or regulations. Further information regarding our processing of your personal data can be found in our privacy policy at  <a style={{ textDecoration: "none" }} href="https://www.victacapitals.com">www.victacapitals.com</a>
                  You will choose, or be provided with a user name and password. <br /><br />You must treat such information as confidential and must not disclose it to any third party.
                  Please tell us, by updating your settings, of any changes to the information that you provided when registering. If you wish to cancel your membership or account on the Sites at any time, you may do so by contacting us at <a style={{ textDecoration: "none", border: "none" }} href="mailto:support@victacapitals.com">support@victacapitals.com</a> <br /><br />
                  We may disable your login or registration at any time (temporarily or permanently) if we believe it is reasonable to do so, for example because you have failed to comply with the Terms or we believe it is necessary to do so to protect your personal information.
                  If you know or suspect that anyone other than you knows your user name or password you should promptly notify us at <a href="mailto:support@victacapitals.com">support@victacapitals.com</a>. Should you forget your password for your account, please select the “I forgot my password” option on our Sites. You will be asked to submit your user name and e-mail address and a new password will be generated for you to use.

               </p>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
         </Modal>

         <Modal size="lg"
            show={lgShow2}
            onHide={() => setLgShow2(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
               <Modal.Title>Disclaimer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>
                  Creators and maintainers of this bep20-token are not liable for any loss when trading this cryptocurrency token. None of the information on this website should be construed as providing legal or financial advice. Please note there are always risks associated with smart contracts. Please use at your own risk.
                  <br /><br />
                  Do conduct your own due diligence and consult your financial advisor before making any investment decisions and follow the rules of your country. This bep20-token is purely meme-based and is NOT official coin acknowledged by the city called Dubai.

               </p>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
         </Modal>
      </>
   )
}

export default Footer



