import React from "react";
import fluoride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import teeth from "../../../images/teethWhitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

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
  return (
      <section className="Services-container mt-5">
        <div className="text-center">
          <h5 style={{ color: "#0FCFE7" }}>OUR SERVICES</h5>
          <h2>Services We Provide</h2>
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