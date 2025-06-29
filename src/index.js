import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have an index.css
import App from './App'; // Make sure this path correctly points to your App.js
import reportWebVitals from './reportWebVitals'; // Import the web-vitals reporter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
