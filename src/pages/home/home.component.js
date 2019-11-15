import React from 'react';
import './home.component.css';
import Header from '../../shared/header/header.component';
import Footer from '../../shared/footer/footer.component';

const PUBLIC_ASSETS_ROOT = "./public_home"

function Home() {
  return (
    <div id="home-page-container">
      { Header() }
      <div className="content-container">
        <a href="/cloverleaf">
          <div className="link-content">
            <img src={formatPublicResourcePath("theCloverLeaf.png")} alt="The Cloverleaf branding project cover." />
            <div className="overlay">
              <div className="overlay-content">
                <p className="project-title">The Clover Leaf</p>
                <p className="project-subtitle">UI, Illustration, Visual Design, Marketing Collateral</p>
              </div>
            </div>
          </div>
        </a>
        <a href="/andpeonies">
          <div className="link-content">
            <img src={formatPublicResourcePath("andPeonies.png")} alt="And Peonies branding project cover." />
            <div className="overlay">
              <div className="overlay-content">
                <p className="project-title">& PEONIES</p>
                <p className="project-subtitle">Branding Design, Typography</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      { Footer() }
    </div>
  );
};

function formatPublicResourcePath(fileName) {
  return `${PUBLIC_ASSETS_ROOT}/${fileName}`;
}

export default Home;
