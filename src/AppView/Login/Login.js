import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// imported Packages

import { userContext } from '../../Context/UserContext';
// imported Created Context

import { dashboardRoute } from '../../Routing/RouteVars';
// imported Route Variables

import { loginFailMsg } from '../../Masseges';
import { adminUser, adminPass } from '../../AdminDetail';
// imported Masseges and UserDetails

import './Login.css';
// imporing css file

/**
 *  Use for Login In the App
 *
 */
const Login = () => {
    // a Variable for Navigate to the different Page
    const navigate = useNavigate();

    // states of this Component
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Get the Context Value using Destructure
    const contextData = useContext(userContext);
    const { loginData, setLoginData } = contextData;

    /**
     * On submit the data in Context to go Dashboard of the App
     * @param {object} event is use for prevent refresh
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
