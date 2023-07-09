import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="icon-text">
                <FaEnvelope className="icon" />
                <span>kenakata@kenakata.com</span>
              </div>
              <div className="icon-text">
                <FaPhone className="icon" />
                <span>01719-109206</span>
              </div>
            </div>
          </div>
          <div className="footer-section follow-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
