import React from 'react';
import './contact.component.css';
import '../../shared/styels/shared.css';
import Header from '../../shared/header/header.component';
import Footer from '../../shared/footer/footer.component';

function Contact() {
    return (
      <div id="contact-page-container">
        {Header()}
        <div className="content-container">
          <p className="email font-title">kimbygreenough@gmail.com</p>
        </div>
        {Footer()}
        </div>
    );
};

export default Contact;
