import React, { useState, useEffect } from 'react';
import { useContext } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointByDate from '../AppointByDate/AppointByDate';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
    marginTop: '80px'
    // height:'100vh'
}

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    document.title="Dashboard";

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/byDateAppointments', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])


    return (
        <section className="">
            <Navbar></Navbar>
            <div style={containerStyle} >
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-5 col-sm-3  pb-5 pt-3">
                            <Calendar
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </div>
                        <div className="col-md-4 ">
                            <AppointByDate appointments={appointments}></AppointByDate>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;