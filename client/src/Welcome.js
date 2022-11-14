import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./ContactForm";

function Welcome(){

    return (
        <>
        <h1>Welcome to Concert Buddy!</h1>
        <p>Add your info to get started:</p>
        <ContactForm/>
        </>
    );

}

export default Welcome;