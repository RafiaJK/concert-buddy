import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./ContactForm";

function Profile() {

    const [contact, setContact] = useState([])

    useEffect(() => {
        fetch("/contacts/:id")
          .then((r) => r.json())
          .then((data) => {
            setContact(data)
          });
      }, []);

    const {photo, bio, email, instagram, twitter} = contact
    console.log(contact)


    //EDIT CURRENT CONTACT INFO
    // const [editedContact, setEditedContact] = useState(contact)

    // function editContact(e) {
    //     e.preventDefault()
    
    //     fetch(`/${contact.id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(editedContact),
    //     });
    //     setEditedContact(editedContact)
    //   }



    return (
        <div>
            <h2>Your Profile</h2>
            <h3>{bio}</h3>
            <h4>Instagram: @{instagram} | Twitter: @{twitter} | Email: {email}</h4>
            {/* <Route exact path="/profile">
                 <ContactForm/>
            </Route> */}

        </div>
    );
}

export default Profile;