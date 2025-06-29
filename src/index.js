import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have an index.css
import RootApp from './App'; // <--- This line should be 'RootApp'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootApp /> {/* <--- This line should render 'RootApp' */}
  </React.StrictMode>
);

reportWebVitals();

