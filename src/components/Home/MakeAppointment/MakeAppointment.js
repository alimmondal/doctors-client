import React from 'react';
import doctor from '../../../images/doctor1.png';
import './MakeAppointment.css';
import { Link } from "react-router-dom";

import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styles from './styles.module.css'

const MakeAppointment = () => {

    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })

    return (
        <section className="pt-5 mt-5 container">
            <div className={styles.container} onMouseOver={() => toggle(!state)}>
                <animated.div
                    className={styles.text}
                    style={{
                        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                        scale: x.to({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                        }),
                    }}>
                    <div className="make-appointment">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 d-none d-md-block">
                                    <img src={doctor} alt="" />
                                </div>
                                <div className="desCol col-md-7 text-white py-5">
                                    <h5 className="text-primary text-uppercase ">Appointment</h5>
                                    <h1 className="my-4">Make an Appointment <br /> Today</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                                    <Link to="/contactUS">
                                        <button className="bt-brand">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </section>
    );
};

export default MakeAppointment;