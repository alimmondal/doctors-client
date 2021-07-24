import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const Button = () => {
    return (
        <div>
            <Link to='/loginPage'>
                <button className="btn">Sign Up</button>
            </Link>
        </div>
    );
};

export default Button;