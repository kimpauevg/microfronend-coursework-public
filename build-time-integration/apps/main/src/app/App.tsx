import './App.css';
import React, {Suspense, useState} from "react";
import {useRef} from 'react';
import {Display} from '@build-time-integration/display'
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [displayText, setDisplayText] = useState('');

  function updateText() {
    setDisplayText(displayText + ' ' + inputRef.current!.value);
    inputRef.current!.value = ''
  }


  return (
    <div className="App">
      <h2 className="App-title">Client Side Integration</h2>
      <div className="App-row">
        <div className="App-block">
          <h3 className="App-text">
            This is input which will send text to display
          </h3>
          <input ref={inputRef}/>
          <button
            onClick={updateText}
          >
            Send to display
          </button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {<Display displayText={displayText}/>}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
