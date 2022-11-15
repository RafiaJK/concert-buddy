import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditContactForm from "./EditContactForm";
import UserContext from "./UserContext";

function Profile() {
    const {user, setUser} = useContext(UserContext) 
    const [contact, setContact] = useState({})

    useEffect(() => {
      fetch(`users/${contact.id}`) 
          .then((r) => r.json())
          .then((data) => {
            setContact(data)
          });
      }, []);
      
    const {photo, bio, email, instagram, twitter} = contact
    //console.log(contact.contact===undefined)



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
            <h2>My Profile</h2>
            <h4>{contact.username}'s Info</h4>
            {contact.contact!==undefined ?
              <h3>{contact.contact.bio}</h3> : null }

            {contact.contact!==undefined ? 
                <h4>Instagram: @{contact.contact.instagram} | Twitter: @{contact.contact.twitter} | Email: {contact.contact.email}</h4>
              : null}

          <EditContactForm/>

        </div>
    );
}

export default Profile;