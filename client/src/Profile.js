import React, { useState, useEffect } from "react";
import { Edit } from "react-admin";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditContactForm from "./EditContactForm";

function Profile() {

    const [contact, setContact] = useState([])

    useEffect(() => {
       // fetch("/contacts/:id")
       fetch(`/${contact.id}`)
          .then((r) => r.json())
          .then((data) => {
            setContact(data)
          });
      }, []);
      
    console.log(contact)

    const {photo, bio, email, instagram, twitter} = contact

    //EDIT CURRENT CONTACT INFO
    const [editedContact, setEditedContact] = useState(contact)

    function editContact(e) {
        e.preventDefault()
    
        fetch(`/${contact.id}`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedContact),
        });
        setEditedContact(editedContact)
      }



    return (
        <div>
            <h2>My Profile</h2>
            <h4>My Info</h4>
            <h3>{bio}</h3>
            <h4>Instagram: @{instagram} | Twitter: @{twitter} | Email: {email}</h4>
           
            {/* <Route exact path="/profile"> 
                 <EditContactForm/>
            </Route>  */}

        </div>
    );
}

export default Profile;