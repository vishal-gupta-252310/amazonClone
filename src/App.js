import React, { useState } from 'react';
// import Packages

import { userContext } from './Context/UserContext';
// imported Created Context

import Routing from './Routing';
import Auth from './Authrization';
// imported Requried Componenets

function App() {
//state for the context
  const [loginData,setLoginData] = useState({
    username : '',
    password : '',
    loggedIn : false
  });
  return (
    // Providing the context value to our App
    <userContext.Provider value={{loginData,setLoginData}}>
      <div className="App">
        {/* Use for Authrization */}
        <Auth />

        {/*  USe for Routing */}
        <Routing />
      </div>
    </userContext.Provider>
  );
}

export default App;
