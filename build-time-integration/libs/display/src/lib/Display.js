import './Display.css';
import React from 'react';

export function Display({ displayText = 'test' }) {
  return (
      <div className="Display-block">
          <h3>This is a remote display component</h3>
          <div className="Display-text">{displayText}</div>
      </div>
  );
}

export default Display;
