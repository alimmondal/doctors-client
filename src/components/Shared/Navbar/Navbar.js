import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';
import logo from '../../../images/teathLogo.png'
import { UserContext } from '../../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const changedBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changedBackground);

    return (
        <div className="container">
            <nav className={navbar ? 'navbars active' : 'navbars'}>
                <div className="navbars-container ">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    
                  <img src={logo} alt="" className="img-fluid" />
                  
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/appointment'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Appointment
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/dashboard'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Dashboard <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/blogDetail'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contactUs'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contactUs'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            {loggedInUser.name}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/loginPage'
                            className='navs-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button  />
                </div>
            </nav>
        </div>
    );
};

{/* <i class='fab fa-firstdraft' /> */}

export default Navbar;