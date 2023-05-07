import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Login from './login/Login';
import Register from './register/Register';
//import Chat from './chat/Chat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);


