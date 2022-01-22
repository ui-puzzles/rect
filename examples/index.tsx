import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/app';
import reportWebVitals from './reportWebVitals';
import '@/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
