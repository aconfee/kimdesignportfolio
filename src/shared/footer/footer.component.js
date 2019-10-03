import React from 'react';
import './footer.component.css';

function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-content-container">
        <div id="description-contact-container">
          <div className="description-text">
            <p id="you-likey">Like what you see?</p>
            <p id="hire-me">Work with me!</p>
          </div>
          <a href="/contact">
            <div className="contact-text">Contact</div>
          </a>
        </div>
        <div className="copyright">All content &copy; { new Date().getFullYear() } Kim Greenough, all rights reserved.</div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kimgreenough/">
            <div className="social-icon linkedin"></div>
          </a>
          <a href="https://dribbble.com/kimbyarting">
            <div className="social-icon dribbble"></div>
          </a>
          <a href="https://www.behance.net/kimbyartinc5ac">
            <div className="social-icon behance"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
