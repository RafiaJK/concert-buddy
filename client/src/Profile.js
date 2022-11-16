import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
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

    const history = useHistory();
    function handleDeleteUser() {
      fetch(`users/${user.id}`, { 
        method: "DELETE" })
        history.push('/signup')
    }

    // const [myShows, setMyShows] = useState([])
    // useEffect(() => {
    //   fetch(`users/showlists`) 
    //       .then((r) => r.json())
    //       .then((data) => {
    //         setMyShows(data)
    //       });
    //   }, []);

      // console.log(myShows.showlists)
      //console.log(user.shows)

    console.log(user)

    return (
        <div>
            <h2>My Profile</h2>
            <h4>{contact.username}'s Info</h4>
            {contact.contact!==undefined ?
              <h3>{contact.contact.bio}</h3> : null }

            {contact.contact!==undefined ? 
                <h4>Instagram: @{contact.contact.instagram} | Twitter: @{contact.contact.twitter} | Email: {contact.contact.email}</h4>
              : null}
          
          <EditContactForm contact={contact}/>

              <h3>View Your Shows:</h3>

              <h4>Delete Your Account</h4>
                <button onClick={handleDeleteUser}>DELETE</button>
        </div>
    );
}

export default Profile;