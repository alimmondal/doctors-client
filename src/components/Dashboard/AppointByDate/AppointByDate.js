import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointments: {appointments.length}</h1>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="py-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
            
        </div>
    );
};

export default AppointByDate;