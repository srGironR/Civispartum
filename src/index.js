import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

    <script
    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    crossOrigin></script>

  <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossOrigin></script>

  <script>var Alert = ReactBootstrap.Alert;</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
