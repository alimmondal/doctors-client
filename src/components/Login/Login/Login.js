import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../images/loginBg.png';
import firebaseConfig from '../firebase.config';
import { Link } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }



  //Fb Sign In handler 
  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const newUserInfo = { ...user };
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        // var credential = result.credential;
        // var user = result.user;
        // var accessToken = credential.accessToken;
        history.replace(from);
        // console.log(result.user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  const handleGoogleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: '',
        }
        setUser(signedOutUser);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
  }


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


  const handleSubmit = (e) => {
    console.log(user.email, user.password);

    if (user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(res.user)
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


  return (
    <div className="login-page container">
      <div className="row align-items-center" >
        <div className="col-md-6 shadow p-5 rounded">

          <h3>Sign In:</h3>
          {/* <p>Name: {user.name}</p> */}
          {/* <p>Show Email: {user.email} </p> */}
          <p>Show Password: {user.password}</p>

          <form onSubmit={handleSubmit}>
            <input type="email" onBlur={handleBlur} name="email" placeholder="your email address" id="" required className="form-control" />
            <br />
            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" id="" required className="form-control" />

            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="form-group">
              {/* <input type="submit" value="Sign In" className="bt-brand " /> */}
              <button type="submit" className="bt-brand"><i class="fas fa-sign-in-alt me-2 text-white"></i>Sign In</button>
            </div>
          </form>

          <p style={{ color: 'red' }}>{user.error}</p>
          {
            user.success && <p style={{ color: 'green' }}>User logged in successfully</p>
          }

          <Link to="signUpPage">
            <p>Don't have an account? Sign Up</p>
          </Link>

          <div className="from-group ">
            <h3>Easy Sign In:</h3>
            {
              user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign Out</button> :
                <button className="bt-brand" onClick={handleGoogleSignIn}><i class="fab fa-google text-white  p-2 me-2 App-logo" />Sign In With Google</button>
            }
            <br />
            <br />
            <button className="bt-brand" onClick={handleFbSignIn}><i class="fab fa-facebook text-white  p-2 me-2 App-logo" />Sign In Using Facebook</button>

            {
              user.isSignedIn && <div>
                <p>Welcome {user.name}</p>
                <p>Your email: {user.email}</p>
                <img src={user.photo} alt="" />
              </div>
            }
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;