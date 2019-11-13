import React from 'react';
import './cloverleaf.component.css';
import '../../shared/styels/shared.css';
import Footer from '../../shared/footer/footer.component';
import TextBlockCentered from '../../shared/textBlockCentered/textBlockCentered.component';
import TextBlockFull from '../../shared/textBlockFull/textBlockFull.component';
import ProjectHeader from '../../shared/projectHeader/projectHeader.component';

const PUBLIC_ASSETS_ROOT = "./public_cloverleaf";

function Cloverleaf() {
    return (
        <div id="cloverleaf-page-container">
            <ProjectHeader />
            <div className="content-container">
                <img src={formatPublicResourcePath("cover.png")} alt="Cloverleaf cover." />
                {TextBlockCentered(
                    "The Challenge", 
                    "In business since 1946, The Clover Leaf is a small, family-owned business that had been using the same logo since their inception in the 40's. They needed a brand refresh to combine its multitude of offerings under one cohesive set of design guidelines. Additionally, in order to compete with big-box stores, it required a renewed online presence and refreshed marketing collateral to stay top-of-mind with customers and constantly drive in-store and online engagement."
                )}
                <img src={formatPublicResourcePath("01.png")} alt="Old and new logo." />
                {TextBlockFull(
                    "THE APPROACH", 
                    "Every product in this small-town hobby store is centered around fun -- carrying that essence through to the logo and design collateral was imperative. All of the branding, marketing, and UI design was approached with this fun freshness in mind ensuring that the new designs felt modern, but approachable and friendly. One of the top goals for this project was to present the store as the customers' friendly, trustworthy small-town business choice, such that they prefer shopping here over big-box retailers.",
                    "#f5f5f1"
                )}
                <img src={formatPublicResourcePath("02.png")} className="image-margin" alt="Logo initial sketches." />
                <img src={formatPublicResourcePath("03.png")} alt="Logo refined iterations." />
                {TextBlockCentered(
                    "", 
                    "Custom illustrations are used throughout the advertising, print, and digital experience. The illustrations are all reminiscent of a children's book, underpinning the idea that The Clover Leaf is centered first and foremost around fun, and highlighting that magical feeling of visiting a toy shop as a child."
                )}
                <img src={formatPublicResourcePath("04.png")} className="image-margin" alt="Store-front illustrations." />
                <img src={formatPublicResourcePath("05.png")} alt="Landing page illustrations." />
                <div style={{marginTop: "-82px", marginBottom: "-82px"}}>
                    {TextBlockFull(
                        "BRANDING", 
                        "The old logo was a stuffy, heavy serif that didn't immediately communicate the store's product offering to customers. I created playful, quirky hand-drawn logos and drew upon the store's retro roots to make the logo feel familiar, yet fresh and new. The new logo truly communicates the business' tagline: \"One-Stop-Shop for all Things Fun\". The store's signature clover leaf design has now become its new mascot, \"Clover\", a character that can be used in branding and advertising as a fun touchpoint for customers.",
                        "#f8f1ff"
                    )}
                </div>
                <img src={formatPublicResourcePath("06.png")} className="image-margin" alt="Branding typography." />
                <img src={formatPublicResourcePath("07.png")} className="image-margin" alt="Branding color palette." />
                <img src={formatPublicResourcePath("08.png")} alt="Logo guide." />
                <div style={{marginTop: "-82px"}}>
                    {TextBlockFull(
                        "UI DESIGN", 
                        "In a web-driven consumer world, maintaining a strong online presence is necessary to stay connected with customers. The Clover Leaf wanted to make their product offering understandable and accessible for customers through their online store, and to clearly display the wide variety of what the business offered.",
                        "#f1f1f1"
                    )}
                </div>
                <img src={formatPublicResourcePath("09.png")} className="image-margin" alt="UI sketches." />
                <img src={formatPublicResourcePath("10.png")} className="image-margin" alt="UI sketches." />
                <img src={formatPublicResourcePath("11.png")} className="image-margin" alt="UI sketches." />
                <img src={formatPublicResourcePath("12.png")} className="image-margin" alt="UI sketches." />
                <img src={formatPublicResourcePath("13.png")} className="image-margin" alt="Full UI mock."  />
                <img src={formatPublicResourcePath("14.png")} alt="Full UI mock." />
                {TextBlockFull(
                    "MARKETING", 
                    "With marketing material, the approach was to create multiple digital and print touch-points to ensure customers keep the business top of mind. Sales events, product announcements, and holiday specials are all important touch-points to draw customers for online purchases and in-store visits; as such, I created a variety of printed mailers, digital advertisements, and email designs.",
                    "white"
                )}
                <img src={formatPublicResourcePath("15.png")} className="image-margin" alt="Email templates." />
                <img src={formatPublicResourcePath("16.png")} className="image-margin" alt="Online advertisement template." />
                <img src={formatPublicResourcePath("17.png")} className="image-margin" alt="Holiday mailer design." />
                <img src={formatPublicResourcePath("18.png")} alt="Back to school mailer design." />
                {/* <a id="back-to-work" className="font-subtitle" href="/">BACK TO ALL WORK</a> */}
                <div style={{marginBottom: "400px" }}></div>
            </div>
            {Footer()}
        </div>
    );
};

function formatPublicResourcePath(fileName) {
    return `${PUBLIC_ASSETS_ROOT}/${fileName}`;
}

export default Cloverleaf;
