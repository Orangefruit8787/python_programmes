import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have an index.css
import RootApp from './App'; // <--- CHANGED THIS LINE to import RootApp
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootApp /> {/* <--- CHANGED THIS LINE to render RootApp */}
  </React.StrictMode>
);

reportWebVitals();

