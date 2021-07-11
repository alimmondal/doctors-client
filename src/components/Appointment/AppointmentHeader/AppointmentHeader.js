import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <main  className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                    <img src={chair} alt="" className="img-fluid" />
                </div>
                <div className="col-md-4 mt-4  offset-md-1">
                    <p className="text-danger">Choose date before selecting services:</p>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

            </div>
        </main>
    );
};

export default AppointmentHeader;