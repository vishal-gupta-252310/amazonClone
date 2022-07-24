// imported Packages
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// imported Route constant
import { loginRoute, dashboardRoute, secureRoute } from './RouteConstants';

// imported Required Components
import Login from '../AppView/Login/Login';
import Main from '../AppView/Dashboard/Main';
import Auth from '../Authrization';

/**
 * Routing use to Navigate to the different Pages
 */
const Routing = () => {
    return (
        <>
            {/* Creating Routes for the App */}
            <Routes>
                {/* login Route */}
                <Route exact path={loginRoute} element={<Login />} />

                {/* Authrization Route */}
                <Route exact path={secureRoute} element={<Auth />} />

                {/* dashboard Route */}
                <Route path={dashboardRoute} element={<Main />} />
            </Routes>
        </>
    );
};

export default Routing;
