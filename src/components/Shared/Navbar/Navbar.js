import React, { useContext, useState } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from '../../../App';
import './Navbar.css';
import logo from '../../../images/teathLogo.png';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);

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
            <img src={logo} alt="" width="36" height="30" class="d-inline-block align-text-top" />
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
                    <Link className="nav-link ms-2 text-primary" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-primary" to="/#">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-secondary" to="blogDetail">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-secondary" to="/contactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-2 text-secondary" to="/loginPage">Login</Link>
                </li> 
                
                <li className="nav-item">
                    <Link style={{border: '1px solid lightGray'}} className="nav-link ms-2 text-secondary" to="/#">{loggedInUser.name}</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
    );
};

export default Navbar;