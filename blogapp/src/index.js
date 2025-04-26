import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the BlogApp component
import './App.css'; // Optional: if you want general styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);