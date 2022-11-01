import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //lo renderiza dos veces
  <React.StrictMode>   
    <App />  
  </React.StrictMode>
);




//importa el archivo app.js en el index html