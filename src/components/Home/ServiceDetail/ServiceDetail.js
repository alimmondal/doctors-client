import React from 'react';
import {Link} from "react-router-dom";


const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-3 mb-5">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, nostrum? Nisi earum saepe vitae libero.</p>
            <Link to="/appointment">
            <button className="bt-brand mb-5">GET APPOINTMENT</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;