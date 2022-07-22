import React from 'react';
import { Routes, Route } from 'react-router-dom';
// imported Packages

import { loginRoute, dashboardRoute, secureRoute } from './RouteVars';
// imported Route Variables

import Login from '../AppView/Login/Login';
import Main from '../AppView/Dashboard/Main';
import Auth from '../Authrization';
// imported Requred Components

const Routing = () => {
    return (
        <>
            {/* Creating Routes for the App */}
            <Routes>
                {/* login Route */}
                <Route exact path={loginRoute} element={<Login />} />

                <Route exact path={secureRoute} element={<Auth />} />

                {/* dashboard Route */}
                <Route path={dashboardRoute} element={<Main />} />
            </Routes>
        </>
    );
};

export default Routing;
