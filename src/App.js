import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import ContactUs from "./components/Home/ContactUs/ContactUs";
import Home from "./components/Home/Home/Home";
import LoginPage from "./components/Login/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
// import Login from "./components/Login/Login/Login";
import Setting from "./components/Dashboard/Setting/Setting";
import BlogDetail from "./components/Home/BlogDetail/BlogDetail";
import Prescriptions from "./components/Dashboard/Prescriptions/Prescriptions";
import SignUp from "./components/Login/SignUp/SignUp";
import SignUpPage from "./components/Login/SignUpPage/SignUpPage";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/pres">
            <Prescriptions></Prescriptions>
          </Route>
          <Route path="/blogDetail">
            <BlogDetail></BlogDetail>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/AllPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/loginPage">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/signUpPage">
            <SignUpPage></SignUpPage>
          </Route>
          <Route path="/setting">
            <Setting></Setting>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
