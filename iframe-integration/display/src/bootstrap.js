import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from "./Display";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter basename='/display'>
        <Display />
      </BrowserRouter>
  </React.StrictMode>
);
