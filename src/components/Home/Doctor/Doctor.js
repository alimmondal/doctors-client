import React, { useEffect } from 'react';
// import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Doctor = ({doctor}) => {
    useEffect (() => {
        AOS.init({
            offset: 100,
            duration: 3000,
            easing: 'ease',
        });
    })

    return (
        <div className="col-md-4 col-sm-6 text-center">
        {/* {
            doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} />
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        } */}

            <img style={{height: '200px'}} src={doctor.img} alt="" data-aos='flip-up' />
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.phone}</p>
            
        </div>
    );
};

export default Doctor;











// import React from 'react';
// import img from '../../../images/doctor1.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// const Doctor = () => {
//     return (
//         <div className="col-md-4 text-center">
//             <img style={{ height:'200px'}} className="img-fluid mb-3" src={img} alt=""/>
//             <h4>Dr. Coudi</h4>
//             <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
//         </div>
//     );
// };

// export default Doctor;