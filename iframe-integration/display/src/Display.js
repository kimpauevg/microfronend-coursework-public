import './Display.css';
import React, {useState} from 'react';


function Display() {
  const [displayText, setDisplayText] = useState('');

  const listener = new BroadcastChannel('display');

  listener.onmessage = function (message) {
      setDisplayText(displayText + ' ' + message);
  }

  return (
      <div className="Display-block">
          <h3>This is a remote display component</h3>
          <div className="Display-text">{displayText}</div>
      </div>
  );
}

export default Display;
