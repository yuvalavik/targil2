import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Register from './register/Register';

const App = () => {
  const [user, setUser] = useState(null); // Initialize user state as null

  return (
    <React.StrictMode>
      <Register setUser={setUser} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);