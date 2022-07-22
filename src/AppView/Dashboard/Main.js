import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// imported Packages

import { userContext } from '../../Context/UserContext';
// imported Created Context

import HeaderNav from '../Navbar/HeaderNav';
import HocSlidder from '../Slidder';
import Card from '../MovieCard';
import { secureRoute } from '../../Routing/RouteVars';
// imported Reqiured Components

/**
 *  Main is Rendring  Multiple Components in Dashboard
 *
 */
const Main = () => {
    // a variable to navigate to the Pages
    const navigate = useNavigate();

    // Get the Context Value using destructring
    const contextData = useContext(userContext);
    const { loginData } = contextData;
    /**
     *  use to provide Authrization
     */
    if (loginData.loggedIn === false) {
        navigate(secureRoute);
    }
    return (
        <div>
            {/* Navbar Component */}
            <HeaderNav />

            {/* Slidder Component */}
            <HocSlidder />

            {/* MovieCard Component */}
            <Card />
        </div>
    );
};

export default Main;
