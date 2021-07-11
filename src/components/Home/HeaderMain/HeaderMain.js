import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import {Link} from "react-router-dom";
import './HeaderMain.css';
import { useSpring, animated, config } from 'react-spring'


const HeaderMain = () => {

    const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

    return (
        <div className="container">
            <div  className="row de-flex align-items-center headerMHeight">
                <div className="col-md-5 py-3">
                    <animated.h1 style={props}>Your New Smile <br /> Starts Here </animated.h1>
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