import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Consulting.css'

const Consulting = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 pt-4">
                <div className="text-white">
                    <h1 className="consulting">Please wait for consulting...</h1>
                </div>
            </div>
        </div>
    );
};

export default Consulting;