import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Prescriptions = () => {
    document.title="prescriptions";
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundColor: '#F4FDFB', marginTop: '80px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-10 d-flex flex-column justify-content-center align-items-center py-5 my-5">
                            <h1>Prescriptions are coming soooooooon!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prescriptions;