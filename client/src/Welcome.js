import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import UserContext from "./UserContext";

function Welcome(){
    const {user, setUser} = useContext(UserContext) 

    return (
        <>
        <h1>Welcome to Concert Buddy!</h1>
        <p>Add your info to get started:</p>
        <ContactForm/>
        </>
    );

}

export default Welcome;