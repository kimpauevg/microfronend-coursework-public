import './Display.css';
import React from 'react';

function Display({ displayText = 'test' }) {
  return (
      <div className="Display-block">
          <p>This is a display component</p>
          <div>{displayText}</div>
      </div>
  );
}

export default Display;
