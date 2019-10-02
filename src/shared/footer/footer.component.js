import React from 'react';
import './footer.component.css';

function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-content-container">
        <div id="description-contact-container">
          <div className="description-text">
            <p>Like what you see?</p>
            <p>Work with me!</p>
          </div>
          <div className="contact-text">Contact</div>
        </div>
        <div className="copyright">All content &copy; { new Date().getFullYear() } Kim Greenough, all rights reserved.</div>
        <div className="social-icons">
          <div>Thing1</div>
          <div>Thing2</div>
          <div>Thing3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
