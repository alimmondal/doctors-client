import React, { useEffect, useState } from 'react';
import AppoinmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/postAppointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div  className="" >
            <Navbar></Navbar>
            <div style={{ backgroundColor: "#F4FDFB", marginTop: '80px'  }} className="">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-10 col-sm-4" >
                            <h5 className="text-brand">All Patients</h5>
                            <AppoinmentDataTable appointments={appointments} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;