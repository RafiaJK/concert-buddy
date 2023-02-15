import { useState, useContext, useEffect } from "react";
import UsernameContext from './UsernameContext';
import UserContext from './UserContext';

function FriendCard({friend}) {
    const { user, setUser } = useContext(UserContext)
    const { username, setUsername } = useContext(UsernameContext)
    const { photo, bio, email, instagram, twitter } = friend

    const [usernames, setUsernames] = useState({})
    useEffect(() => {
      fetch(`/users`)
        .then((r) => r.json())
        .then((data) => {
          setUsernames(data)
        });
    }, []); 

    //console.log(friend.user.username)

    return (
        <li className="friend-card">
            <h2>{friend.user.username}</h2>
            <h3>Bio: {bio}</h3>
            <h5>Email: <br></br>{email}</h5>
            <h5>Socials: <br></br> Instagram: {instagram} <br></br> Twitter: {twitter} </h5>
        </li>
    );

}

export default FriendCard;