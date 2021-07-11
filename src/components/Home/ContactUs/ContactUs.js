import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import { faClock, faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
                <div className="">
                    <div className="">
                        <BusinessInfo></BusinessInfo>
                    </div>
                    <div className="">
                        <Contact></Contact>
                    </div>
                    <div className="text-center">
                        <div className="">
                        <h1> <span className="text-brand">Newsletter</span> Subscription</h1>
                        </div>
                        <div  className="d-flex justify-content-center align-items-center">
                        <input  type="email" name="" id="" placeholder="Email-id" /> <button style={{border:'none',fontSize:'2.4rem', marginTop:'' }} className="text-brand bg-white"><FontAwesomeIcon icon={faEnvelope} /></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;