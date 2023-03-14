import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import { Logged } from './features/login/Logged';
import { Login } from './features/login/Login';

function App() {

  const loginAutorisation = useSelector(state => state.login.acces);

  return (
    <div className="App">
      {loginAutorisation? <Logged /> : <Login />}
    </div>
  );
}

export default App;
