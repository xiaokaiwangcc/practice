import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * 是因为18里面，ReactDOM.createRoot(document.getElementById('root')).render(<App />)
 * 是会启用新的并发模式，会合并settimeout，如果用的是ReactDOM.render(<App />, document.getElementById('root'))就不会合并
 * @type {Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
