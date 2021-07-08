import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import ContactUs from "./components/Home/ContactUs/ContactUs";
import Footer from "./components/Shared/Footer/Footer";
import Home from "./components/Home/Home/Home";
import LoginPage from "./components/Login/LoginPage/LoginPage";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/loginPage">
          <LoginPage></LoginPage>
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
      <Footer></Footer>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
