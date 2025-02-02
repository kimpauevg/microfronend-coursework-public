import './App.css';
import React from "react";
import {useRef} from 'react';
function App() {
    const inputRef = useRef(null);
    const channel = new BroadcastChannel('display');
    function updateText() {
        channel.postMessage(inputRef.current.value);

        inputRef.current.value = '';
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
                <iframe title="display" className="App-iframe" src="http://v2446558.hosted-by-vdsina.ru:11300/display"></iframe>
            </div>
        </div>
    );
}

export default App;
