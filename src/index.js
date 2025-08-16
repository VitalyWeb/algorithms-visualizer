import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "prismjs/themes/prism-tomorrow.css"; // тема подсветки
import "prismjs"; // сам PrismJS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);