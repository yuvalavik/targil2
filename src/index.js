import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Register from './register/Register';
import Chat from './chat/Chat'

const App = () => {
  const [user, setUser] = useState([]); // Initialize user state as null

  return (
    <React.StrictMode>
      <Register setUser={setUser} user={user} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);