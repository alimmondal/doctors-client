import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    // const [navbar, setNavbar] = useState(false);

    // const changeNavBackground = () => {
    //     if(window.scrollY >= 80){
    //         setNavbar(true);
    //     }
    //     else{
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener('scroll', changeNavBackground);

    return (
        <div>
        <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container container-fluid navbar-container">
        <Link className="logo" to='/'>
            {/* <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
           <span className="logoText">iDental</span> 
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link className="nav-link ms-3 text-primary" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/appointment">Appointment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/loginPage">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/#">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/#">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/#">Reviews</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="#">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/contactUs">Contact Us</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
    );
};

export default Navbar;