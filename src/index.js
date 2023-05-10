import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login/Login';
import Chat from './chat/Chat';
import Register from './register/Register';
import Chat from './chat/Chat'


const App = () => {
  const [user, setUser] = useState([]); // Initialize user state as an empty array
  const [curuser, setcuruser] = useState({}); // initial value is an empty object

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setcuruser={setcuruser} user={user}/>} />
        <Route path="/Register" element={<Register setUser={setUser} user={user} />} />
        <Route path="/Chat" element={<Chat curuser ={curuser} setcuruser={setcuruser} />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
