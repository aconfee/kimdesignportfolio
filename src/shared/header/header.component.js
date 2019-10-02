import React from 'react';
import './header.component.css';
import '../styels/shared.css';
import { LINK_WORK, LINK_CONTACT, LINK_RESUME } from './constants';

function Header() {
  return (
    <div id='header-container'>

      <div id="logo-container">
        <a href="/">
          <img src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Site logo." />
        </a>
      </div>

      <div id="links-container">
        <div className={ "link " + getActiveLinkClass(LINK_WORK) }>
          <a href={ LINK_WORK }>WORK</a>
        </div>
        <div className={"link " + getActiveLinkClass(LINK_CONTACT) }>
          <a href={LINK_CONTACT }>CONTACT</a>
        </div>
        <div className={ "link " + getActiveLinkClass(LINK_RESUME) }>
          <a href={ LINK_RESUME }>RESUME</a>
        </div>
      </div>

    </div>
  );
};

function getActiveLinkClass(pathname) {
    return pathname === window.location.pathname ? "active" : "";
}

export default Header;
