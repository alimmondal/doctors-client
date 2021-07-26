import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './OurDoctors.css'

const OurDoctors = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 pt-4">
                <div className="bg-secondary text-white">
                    <h1 className="ourDoctor">Please wait...</h1>
                </div>
            </div>
        </div>
    );
};

export default OurDoctors;