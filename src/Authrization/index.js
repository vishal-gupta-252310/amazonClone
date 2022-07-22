import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// imported Packages

import { loginRoute, dashboardRoute } from '../Routing/RouteVars';

import { userContext } from '../Context/UserContext';
// imported Created Context Variable

/**
 *
 *  Auth is use to Provide Authantication in app
 */
const Auth = () => {
    // a variable to navigate to the Pages
    const navigate = useNavigate();

    // Get the Context Value using destructring
    const contextData = useContext(userContext);
    const { loginData } = contextData;

    useEffect(() => {
        if (loginData.loggedIn === true) {
            // navigate to dashboard page
            navigate(dashboardRoute);
            return;
        }
        // Navigating to login page
        navigate(loginRoute);
    }, [loginData.loggedIn]);
    // Checking the logged in user
};
export default Auth;
