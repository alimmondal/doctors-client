import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Login from '../Login/Login';

const LoginPage = () => {
    return (
        <div className="pt-5 mt-4">
            <Navbar></Navbar>
            <Login></Login>
        </div>
    );
};

export default LoginPage;