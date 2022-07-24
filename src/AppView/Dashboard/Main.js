// imported Packages
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// imported Context constant
import { userContext } from '../../Context/UserContext';

// imported Reqiured Components
import HeaderNav from '../Navbar/HeaderNav';
import HocSlidder from '../Components/Slidder';
import Card from '../Components/MovieCard';

// imported Route Constant
import { secureRoute } from '../../Routing/RouteConstants';

/**
 *  Main is Rendring  Multiple Components in Dashboard
 *
 */
const Main = () => {
    // a constant to navigate to the Pages
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
