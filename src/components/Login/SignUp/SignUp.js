import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';


const SignUp = () => {
    let history = useHistory();
    let location = useLocation();
    document.title="signUp";
  
    let { from } = location.state || { from: { pathname: "/loginPage" } };

    // const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })


    //created user with email and password
    const handleBlur = (event) => {
        let isFieldValid = true;
        console.log(event.target.name, event.target.value)
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    //
    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    //update user info
    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name

        }).then(() => {
            console.log('Update user name successfully')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="center">
            <h1>Sign Up</h1>

            {/* <p>Show Name: {user.name}</p>
            <p>Show Email: {user.email} </p> */}
            <p>Show Password: {user.password}</p>

            <form onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" id="" required className="form-control"/>
                <br />
                <input type="email" onBlur={handleBlur} name="email" placeholder="your email address" id="" required className="form-control"/>
                <br />
                <input type="password" onBlur={handleBlur} name="password" placeholder="Password" id="" required className="form-control"/>
                <br /><i class="fas fa-user-plus "></i>
                <input type="submit" value="Sign Up" className="bt-brand " />

            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User created successfully</p>}
            <Link to="loginPage">
                <p>Already have an account? Sign In</p>
            </Link>

        </div>
    );
};

export default SignUp;