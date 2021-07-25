import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
    // height:'100vh'
}

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }


    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('phone', info.phone);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAnAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('doctor added successfully')
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }

    return (
        <section className="  ">
            <Navbar></Navbar>
            <div style={{ backgroundColor: "#F4FDFB", marginTop: '80px' }} className=" mt-">
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="col-md-10 pb-5" >
                            <h4>Add a Doctor</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Name</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Phone</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Address</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="address" placeholder="Address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Upload an image</label>
                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;

                                // <form onSubmit={handleSubmit}>
                                //  <div className="form-group">
                                //     <label htmlFor="exampleInputEmail1">Email address</label>
                                //     <input onChange={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                                // </div>
                                // <div className="form-group">
                                //     <label htmlFor="exampleInputPassword1">Name</label>
                                //     <input onChange={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                                // </div>
                                // <div className="form-group">
                                //     <label htmlFor="exampleInputPassword1">Upload an image</label>
                                //     <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                                // </div>
                                // <br />
                                // <button type="submit" className="btn btn-primary">Submit</button> */}
                                // </form>