import React, { useRef } from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSpring, animated } from '@react-spring/web'


const AppointmentHeader = ({ handleDateChange }) => {

    const n = useRef(0)
    const styles = useSpring({
      loop: () => 10 > n.current++,
      from: { x: 0 },
      to: { x: 50 },
    })
    

    return (
        <main className="container mt-5">
            <div className="row">
            
                <animated.div style={{...styles}} className="col-md-6">
                <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                    <img src={chair} alt="" className="img-fluid" />
                </animated.div>
                <div className="col-md-4 offset-md-1  mt-4  ">
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