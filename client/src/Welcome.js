import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import UserContext from "./UserContext";

function Welcome(){
    const {user, setUser} = useContext(UserContext) 

    return (
        <div className="login">
        <div className="rectangle"></div>

        <h1 className="welcome-to">Welcome to </h1> 

        <p className="welcome-next-event">Your next event is around the corner!</p>
        <h3 className="welcome-join">Join our community of concert goers in just one more step - add your contact info!</h3>
        <ContactForm/>
        <div className="welcome-logo"> </div>

        </div>
    );

}

export default Welcome;