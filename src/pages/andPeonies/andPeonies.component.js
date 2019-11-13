import React from 'react';
import './andPeonies.component.css';
import '../../shared/styels/shared.css';
import Footer from '../../shared/footer/footer.component';
import TextBlockCentered from '../../shared/textBlockCentered/textBlockCentered.component';
import TextBlockFull from '../../shared/textBlockFull/textBlockFull.component';
import ProjectHeader from '../../shared/projectHeader/projectHeader.component';

const PUBLIC_ASSETS_ROOT = "./public_andpeonies";

function AndPeonies() {
    return (
        <div id="andpeonies-page-container">
            <ProjectHeader />
            <div className="content-container">
                <img src={formatPublicResourcePath("cover.png")} alt="And peonies cover."/>
                {TextBlockCentered(
                    "The Challenge", 
                    `&peonies is about the basics. It is for the girl who wants to be comfortable and stylish without too much effort, whether she's meeting friends for brunch or going on a first date. Everything is feminine without being overly frilly, comfortable without being slubby. Fresh flowers are some of the simplest pleasures in life, just like clothing should be. The overall brand aesthetic should be evocative of understated elegance and simplicity, just like classic French-girl style.


                    Inspiration images for color and mood of the brand are shown below. Dusky, muted pinks and warm cream, greys, and browns comprise the color palette, making it feminine but not overly girly.`
                )}
                <img src={formatPublicResourcePath("01.png")} alt="Branding mood board." />
                {TextBlockFull(
                    "THE APPROACH", 
                    "With the inspiration images in mind, I created a series of sketches exploring how to capture that feeling of freshness and elegant simplicity. While minimalist sans-serifs captured the clean, modern and fresh aesthetic of the brand, I felt drawn to serifs that introduced elegance and a feminine look to the logo. In the end I edited a thick serif, flattening the letterforms at their baseline to add a touch of geometry, thus making the logo clean, minimal, and elegant all at once.",
                    "white"
                )}
                <img src={formatPublicResourcePath("02.png")} className="image-margin" alt="Logo initial iterations." />
                <img src={formatPublicResourcePath("03.png")} alt="Logo guide." />
                {TextBlockFull(
                    "BRANDING", 
                    "The typography, color palette, and additional brand-marks were carefully created and selected to complement each other, supporting the soft, feminine aesthetic core to the &peonies brand.",
                    "white"
                )}
                <img src={formatPublicResourcePath("04.png")} className="image-margin" alt="Brand typography." />
                <img src={formatPublicResourcePath("05.png")} className="image-margin" alt="Brand color palette." />
                <img src={formatPublicResourcePath("06.png")} alt="Additional logos and marks." />
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

export default AndPeonies;
