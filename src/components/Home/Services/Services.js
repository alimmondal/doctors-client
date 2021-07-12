import React, { useState } from "react";
import fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import teeth from "../../../images/teethWhitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { useSpring, animated, config } from 'react-spring';

const servicesData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: Cavity,
  },
  {
    name: "Teeth Whitening",
    img: teeth,
  },
];

const Services = () => {

  const [flip, set] = useState (false)
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
      <section className="Services-container mt-5">
        <div className="text-center">
          <h5 style={{ color: "#0FCFE7" }}>OUR SERVICES</h5>
          <animated.h2 style={props}>Services We Provide</animated.h2>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="w-75 row">
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
            </div>
      </section>
    
  );
};

export default Services;