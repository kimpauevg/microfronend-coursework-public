import React, {useState} from 'react';


function Display() {
  const [displayText, setDisplayText] = useState('');

  const listener = new BroadcastChannel('display');

  listener.onmessage = function (message) {
      setDisplayText(displayText + ' ' + message.data);
  }

  const displayBlockStyle=  {
      "background": "#9c61fb",
      "borderRadius": "5px",
      "color": "black",
      "margin": "10px",
      "padding": "10px",
  }

  const displayTextStyle = {
      "border": "1px black solid",
      "borderRadius": "5px",
      "margin": "10px",
      "padding": "10px",
  }

  return (
      <>
          <div style={displayBlockStyle} className="Display-block">
              <h3>This is a remote display component</h3>
              <div style={displayTextStyle} className="Display-text">{displayText}</div>
          </div>
      </>
  );
}

export default Display;
