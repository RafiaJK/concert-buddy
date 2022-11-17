import { useState, useContext } from "react";
import UsernameContext from './UsernameContext';
import UserContext from './UserContext';

function UserShowlistCard({ show, showlist }) {
  const { venue, date, artist_id } = show
  const { user, setUser } = useContext(UserContext)

  return (
    <li className="card">
      <h3>{venue}</h3>
      <img src={show.artist.image} alt={"Artist Photo"} />
      <h2>{show.artist.name}</h2>
      <h4>{date}</h4>    
    </li>
  );

}

export default UserShowlistCard;