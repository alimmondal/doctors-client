import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SignUp from '../SignUp/SignUp';
import LoginBg from '../../../images/loginBg.png';


const SignUpPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container pt-5 mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 h-25 shadow p-5 border border-primary rounded">
                        <SignUp></SignUp>
                    </div>
                    <div className="col-md-6 d-none d-md-block align-self-end">
                        <img className="img-fluid" src={LoginBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;