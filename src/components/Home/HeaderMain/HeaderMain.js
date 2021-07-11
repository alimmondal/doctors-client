import React from 'react';
import chair from '../../../images/chair.png';
import {Link} from "react-router-dom";
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container">
            <div  className="row de-flex align-items-center headerMHeight">
                <div className="col-md-5 py-3">
                    <h1 style={{ color: '#444058' }}>Your New Smile <br /> Starts Here </h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus autem explicabo nulla dolor exercitationem.</p>
                    <Link to="/appointment">
                        <button className="btn btn-brand">GET APPOINTMENT</button>
                    </Link>
                </div>
                <div className="col-md-7">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;