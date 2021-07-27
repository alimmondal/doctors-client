import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../../images/featured.png';
import image2 from '../../../images/featured2.png';
import image3 from '../../../images/featured3.png';
import image4 from '../../../images/featured4.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedService.css';


const FeaturedService = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
    ]

    const settings = {
        dots: true,
        // lazyLoad: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        // focusOnSelect: true,
        // cssEase: "linear",
       
    };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 3000,
            easing: 'ease',
        });
    })

    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0" data-aos='zoom-in-down'>


                        <Slider {...settings} >
                            {images.map((img, idx) => {
                                return (<div>
                                    <img src={img} alt={img} style={{ height: '500px', margin: '0 auto' }} />
                                </div>)
                            })}
                        </Slider>
                    </div>
                    <div className="col-md-7 align-self-center" data-aos='fade-down'>
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <Link to="/contactUs">
                            <button className="bt-brand">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FeaturedService;