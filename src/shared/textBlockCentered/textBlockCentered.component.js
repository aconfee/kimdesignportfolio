import React from 'react';
import './textBlockCentered.component.css';

function TextBlockCentered(titleText, text) {
  return (
    <div id="text-block-centered-container">
        <p className="font-title">{ titleText }</p>
        <p className="font-text">{ text }</p>
    </div>
  );
};

export default TextBlockCentered;
