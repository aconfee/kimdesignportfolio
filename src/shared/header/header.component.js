import React, { useState, useEffect } from 'react';
import './header.component.css';
import '../styels/shared.css';
import { LINK_WORK, LINK_CONTACT, LINK_RESUME } from './constants';

function Header() {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => { window.removeEventListener("resize", handleResize) }
  }, []);

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const renderHamburger = () => {
    if(width >= 950) return null;

    return (
      <div className="hamburger">
        <div id="the-burger" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          <img src="https://cdn4.iconfinder.com/data/icons/website-library/32/hamburger_List_hamburger_right_menu_website-512.png" alt="tasty burger" />
        </div>
        <div id="links-container" style={{display: showBurgerMenu ? 'grid' : 'none'}}>
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

  const renderLinks = () => {
    if(width < 950) return null;

    return (
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
    );
  };

  return (
    <div id='header-container'>

      { renderHamburger() }

      <div id="logo-container">
        <a href="/">
          <img src="./logo.png" alt="Site logo." />
        </a>
      </div>

      { renderLinks() }

    </div>
  );
};

function getActiveLinkClass(pathname) {
    return pathname === window.location.pathname ? "active" : "";
}

export default Header;
