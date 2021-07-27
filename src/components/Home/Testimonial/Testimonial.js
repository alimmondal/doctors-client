import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = (props) => {

  useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 3000,
        easing: 'ease',
    });
})

  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="card shadow " >
      <div className="card-body">
        <p className="card-text text-center" data-aos='flip-down'>{quote}</p>
      </div>
      <div className="card-footer d-flex  align-items-center" data-aos='fade-right' >
        <img className="mx-3" src={img} alt="" width="60" />
        <div>
          <h6 className="text-primary" >{name}</h6>
          <p className="m-0" data-aos='fade-right' >{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;