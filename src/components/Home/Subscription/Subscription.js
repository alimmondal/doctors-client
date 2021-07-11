import React from 'react';
import { faClock, faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Subscription = () => {
    return (
        <div>
            <hr style={{color: '#000'}} />
            <div  className="text-center">
                <div className="">
                    <h1> <span className="text-brand">Newsletter</span> Subscription</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input type="email" name="" id="" placeholder="Email-id" /> <button style={{ border: 'none', fontSize: '2.4rem', backgroundColor: '#E6E6E6' }} className="text-brand "><FontAwesomeIcon icon={faEnvelope} /></button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;