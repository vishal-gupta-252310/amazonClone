// imported Packages
import React, { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// imported Conntext Connstants
import { userContext } from '../../Context/UserContext';

// imported Route Constant
import { dashboardRoute } from '../../Routing/RouteConstants';

// imported Masseges
import { loginFailMsg } from '../../Masseges';

// immported User details
import { adminUser, adminPass } from '../../AdminDetail';

// imporing css file
import './Login.css';

/**
 *  Use for Login In the App
 *
 */
const Login = () => {
    // a Constant for Navigate to the different Page
    const navigate = useNavigate();

    // states 
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Get the Context Value using Destructure
    const contextData = useContext(userContext);
    const { loginData, setLoginData } = contextData;

    /**
     * On submit the data in Context to go Dashboard of the App
     * @param {object} event is use for prevent refresh of the page
     */
    const handelSubmit = (event) => {
        // prevent page refreshing on submit
        event.preventDefault();

        // matching the input values
        if (loginUser === adminUser && loginPassword === adminPass) {
            setLoginData({
                ...loginData,
                username: loginUser,
                password: loginPassword,
                loggedIn: true,
            });

            // navigating to dashboard
            navigate(dashboardRoute);
            return;
        }
        // if Entered Values are wrong fire alert mesaage with wrong credential
        alert(loginFailMsg);
    };

    return (
        <div className="login">
        
            {/* Form for Login */}
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <h3>Login Form</h3>

                    {/* User Name field */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        name="username"
                        value={loginUser}
                        onChange={(e) => {
                            setLoginUser(e.target.value);
                        }}
                    />
                </div>

                {/* Password field */}
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        value={loginPassword}
                        onChange={(e) => {
                            setLoginPassword(e.target.value);
                        }}
                    />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
