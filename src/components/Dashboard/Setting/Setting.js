import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Setting = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundColor: '#F4FDFB'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-10 d-flex flex-column justify-content-center align-items-center py-5 my-5">
                            <h1>Setting is coming soooooooon!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;