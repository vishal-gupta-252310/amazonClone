import React, { useState, useMemo } from 'react';
// import Packages

import userContext from './Context/UserContext';
// imported Created Context

import Routing from './Routing';
import Auth from './Authrization';
// imported Requried Componenets

const App = () => {
// state for the context
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    loggedIn: false,
  });
  const AuthContext = useMemo(() => ({
    loginData, setLoginData,
  }));
  return (
    // Providing the context value to our App
    <userContext.Provider value={AuthContext}>
      <div className="App">
        {/* Use for Authrization */}
        <Auth />

        {/*  USe for Routing */}
        <Routing />
      </div>
    </userContext.Provider>
  );
};

export default App;
