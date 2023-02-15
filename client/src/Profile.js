import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import EditContactForm from "./EditContactForm";
import UserContext from "./UserContext";
import UserShowlistContainer from "./UserShowlistContainer";

function Profile({ shows }) {
  const { user, setUser } = useContext(UserContext)

  const [contact, setContact] = useState({})
  useEffect(() => {
    fetch(`users/${contact.id}`)
      .then((r) => r.json())
      .then((data) => {
        setContact(data)
      });
  }, []);

  const { photo, bio, email, instagram, twitter } = contact

  const history = useHistory();
  function handleDeleteUser() {
    fetch(`users/${user.id}`, {
      method: "DELETE"
    })
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

  //console.log(user)
  // console.log(user.shows)

  return (
    <div className="whole-profile">
      <div className="profile-container"></div>
        <div className="profile-info">
          <h2>{contact.username}'s Profile:</h2>
          {contact.contact !== undefined ?
            <h3>My bio: <br></br>{contact.contact.bio}</h3> : null}

          {contact.contact !== undefined ?
            <h4>Instagram: @{contact.contact.instagram} <br>
            </br> Twitter: @{contact.contact.twitter} <br>
            </br> Email: {contact.contact.email}</h4>
            : null}
        </div>
      
      <br></br>

      <div className="myshows-container"></div>
        <div className="myshows-info">
        <h2>My Upcoming Shows:</h2>
          <UserShowlistContainer shows={shows} />
      </div>

      <br></br>
      
      <div className="update-profile-container"></div>
      <div className="update-profile-form">
      <h2>Update your info:</h2>
        <EditContactForm contact={contact} />
      </div>
      <br></br>

      <div className="delete-user-container"></div>
      <div className="delete-function">
      <h4>Delete Your Account</h4> 
      <p>We'll miss you - come back anytime!</p>
      <button onClick={handleDeleteUser}>Remove Account</button>
      </div>
    </div>
  );
}

export default Profile;