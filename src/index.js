import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Register from './register/Register';
import Login from './login/Login';

const App = () => {
  const [user, setUser] = useState([]); // Initialize user state as null

  return (
    <React.StrictMode>
      <Router>
    {/* <Route exact path="/" component={Register setUser={setUser} user={user}} /> */}
        <Route path="/" component={Login} />
        <Route path="/Register" render={() => <Register setUser={setUser} user={user}/>} />  
        <Register setUser={setUser} user={user} />
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);