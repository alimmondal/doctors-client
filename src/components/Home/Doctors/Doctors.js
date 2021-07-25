// import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import doctor2 from '../../../images/doctor1.png';
import doctor1 from '../../../images/heroImage 1.png';
// import doctor3 from '../../../images/beuty.jpg'


const Doctors = () => {

    const doctors = [
        {
            img: doctor1,
            name: 'Dr. Alom',
            phone: '+8801860060068'
        },
        {
            img: doctor2,
            name: 'Dr. Cudi',
            phone: '+8801860060068'
        },
        {
            img: doctor2,
            name: 'Dr. Cudi',
            phone: '+8801860060068'
        },
    ]

    // const [doctors, setDoctors] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/admins')
    //         .then(res => res.json())
    //         .then(data => setDoctors(data))
    // }, [])

    return (
        <section className="doctors mt-5">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Doctors;






// import React from 'react';
// import Doctor from '../Doctor/Doctor';
// const Doctors = () => {
//     return (
//         <section className="doctors">
//             <div className="container">
//                 <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
//                 <div className="row">
//                     <Doctor/>
//                     <Doctor/>
//                     <Doctor/>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Doctors;