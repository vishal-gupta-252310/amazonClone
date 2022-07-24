// imported Packages
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//  imported Required Routes Constants
import { loginRoute, dashboardRoute } from '../Routing/RouteConstants';

// imported Context Constant
import { userContext } from '../Context/UserContext';

/**
 *
 *  Auth is use to Provide Authantication in app
 */
const Auth = () => {
    // a constant to navigate to the Pages
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
        // navigate to login page
        navigate(loginRoute);
    }, [loginData.loggedIn]);
};
export default Auth;
