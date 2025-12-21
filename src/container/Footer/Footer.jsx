import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      {/* Contact Info */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">477 Beake Ave, Coventry CV6 2HT</p>
        <p className="p__opensans">024 7509 0098</p>
      </div>

      {/* Logo & Quote */}
      <div className="app__footer-links_logo">
        <img src="logo.png" alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
        </p>
        <img src="leafe.png" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://web.facebook.com/ammakitchen.uk/" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/amma_kitchen_coventry/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
          <a href="https://www.youtube.com/channel/UCoW-kEyS6wXD8y0NfeRHDJA" target="_blank" rel="noopener noreferrer">
            <FiYoutube />
          </a>
        </div>
      </div>

      {/* Working Hours */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Amma Kitchen Coventry. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
