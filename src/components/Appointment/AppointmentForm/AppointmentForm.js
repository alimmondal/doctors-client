import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {

    // const { register, handleSubmit, errors} = useForm();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        // console.log(data)
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('appointment success');
            }
        })
            console.log('submit clicked');
    }

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-brand text-center">{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>On{date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5">
              
                    <input defaultValue="Your Name" {...register("name")} className="form-control" />
                     <br/>

                     <input {...register("phone", { required: true })}  placeholder="Phon number" className="form-control" />
                    {errors.phone && <span className="error">Phone is required</span>}

                     <br />
                     <input defaultValue="Your email address" {...register("email", { required: true })}className="form-control" />
                      {errors.email && <span className="error">Email is required</span>}
                    <br />

                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender")} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            

                        </div>
                        <div className="col-4">
                            <input {...register("age")} className="form-control" name="age" placeholder="Your Age" type="number" />
                            
                        </div>
                        <div className="col-4">
                            <input {...register("time")} className="form-control" name="time" placeholder="Visiting Time" type="text" />
                            
                        </div>
                    </div>

                   <br/>
                    <input type="submit" className="btn-brand"/>
                    
            </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;