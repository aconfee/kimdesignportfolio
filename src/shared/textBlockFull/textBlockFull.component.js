import React from 'react';
import './textBlockFull.component.css';

function TextBlockFull(titleText, text, backgroundColor) {
  return (
    <div id="text-block-full-container" style={{ backgroundColor: backgroundColor }}>
        <p className="font-title">{ titleText }</p>
        <p className="font-text">{ text }</p>
    </div>
  );
};

export default TextBlockFull;
