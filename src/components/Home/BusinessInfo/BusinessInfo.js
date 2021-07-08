  
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData =[
    {
        title: 'Opening Hour',
        description: 'We are opening 7 days',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Contact Us Now',
        description: '+1569856257895',
        icon: faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className="bInfo d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
            
        </div>
    );
};

export default BusinessInfo;   