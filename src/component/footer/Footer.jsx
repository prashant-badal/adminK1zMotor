import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaMapMarker, FaClock } from 'react-icons/fa';
import logo from "../../assets/images/logo1.jpg"
import style from './Footer.module.css'; // Assuming you're using CSS Modules
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.areaBgInner}>
        <div className={style.footerMain}>
          <Container>
            <Row>
              <Col md={3}>
                <div className={style.footerSection}>
                  <a className={style.footerLogo} href="home.html">
                    <img  src={logo} alt="Logo" />
                  </a>
                  <div className={style.footerInfo}>
                  We specialize in connecting car buyers and sellers through a seamless, trusted platform. Our focus is on providing reliable vehicles, fair pricing, and excellent customer service. Experience smooth, hassle-free car transactions with us
                  </div>
                  <ul className={style.socialNet}>
                    <li className={style.socialNetItem}>
                      <a className={style.socialNetLink} href="https://facebook.com">
                        <FaFacebook />
                      </a>
                    </li>
                    {/* <li className={style.socialNetItem}>
                      <a className={style.socialNetLink} href="https://twitter.com">
                        <FaTwitter />
                      </a>
                    </li> */}
                    <li className={style.socialNetItem}>
                      <a className={style.socialNetLink} href="https://linkedin.com">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li className={style.socialNetItem}>
                      <a className={style.socialNetLink} href="https://instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    {/* <li className={style.socialNetItem}>
                      <a className={style.socialNetLink} href="https://youtube.com">
                        <FaYoutube />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </Col>
              {/* <Col md={4}>
                <section className={style.footerSectionColumns}>
                  <h3 className={style.footerSectionTitle}>Top Brands</h3>
                  <ul className={style.footerListColumns}>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Alfa Romeo</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Ferrari</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">BMW Series</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Mercedes</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Aston Martin</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Toyota</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Opel</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Land Rover</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Mclaren</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Peugeot</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Renault</a></li>
                  </ul>
                </section>
              </Col> */}
              {/* <Col md={2}>
                <section className={style.footerSectionOne}>
                  <h3 className={style.footerSectionTitle}>Categories</h3>
                  <ul className={style.footerList}>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Trucks</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Sports Cars</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Crossovers</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Hybrid Cars</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Hybrid SUVs</a></li>
                    <li className={style.footerListItem}><a className={style.footerListLink} href="about.html">Future Cars</a></li>
                  </ul>
                </section>
              </Col> */}
              <Col md={3}>
                <section className={style.footerSection}>
                  <h3 className={style.footerSectionTitle}>Address Information</h3>
                  <div className={style.footerContactLg}>
                    Call us<span className={style.textPrimary}> (042) 789 35490</span>
                  </div>
                  <div className={style.footerContact}>
                    <FaEnvelope className={style.iconXs} /> support@motorland.com
                  </div>
                  <div className={style.footerContact}>
                    <FaMapMarker className={style.iconLg} /> Fairview Ave, El Monte, CA, 91732
                  </div>
                  <div className={style.footerContact}>
                    <FaClock className={style.iconL} /> Mon - Fri : 09:00am to 06:00pm
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.copyright}>
          <Container>
            <Row>
              <Col xs={12}>
                Copyrights 2024<a className={style.copyrightBrand} href="home.html"> K1Z Auto Sales</a> All Rights Reserved
                {/* <a className={style.copyrightLink} href="privacy-policy.html">Privacy Policy</a>
                <a className={style.copyrightLink} href="terms-of-use.html">Terms & Conditions</a> */}
              </Col>
            </Row>
          </Container>
        </div>
        <span className={style.btnUp} id="toTop">TOP</span>
      </div>
    </footer>
  );
};

export default Footer;
