import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div className="container">
            <div style={{height: '600px'}} className="row de-flex align-items-center">
            <div className="col-md-5 ">
                <h1 style={{color: '#444058'}}>Your New Smile <br/> Starts Here </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusamus autem explicabo nulla dolor exercitationem.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-7">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </div>
        </div>
    );
};

export default HeaderMain;