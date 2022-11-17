import { useState, useContext } from "react";
import UsernameContext from './UsernameContext';
import UserContext from './UserContext';


function ShowCard({ show, showlist }) {
  const { venue, date, artist_id } = show
  const { user, setUser } = useContext(UserContext)

  // const [going, setGoing] = useState([])

  const newShowlist = {
    show_id: show.id,
    user_id: user.id
  }

  function handleShowlistClick(e) {
    e.preventDefault()
    updateShowlists(newShowlist)
    fetch('users/showlists', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShowlist)
    });
  }

  const [showlists, setShowlists] = useState([])
  function updateShowlists(newShowlist) {
    const showlistToAdd = { ...newShowlist, id: updateShowlists.length + 1 }
    setShowlists([...showlists], showlistToAdd)
}

// console.log(user.showlists)

  return (
    <li className="card">
      <h3>{venue}</h3>
      <img src={show.artist.image} alt={"Artist Photo"} />
      <h2>{show.artist.name}</h2>
      <h4>{date}</h4>
      {/* {going? ( */}
        <button onClick={handleShowlistClick}className="primary">Add To My Shows</button>
      {/* ) : (
        <button onClick={handleShowlistClick}>♡</button>
      )} */}

      {/* <p>Attending: {show.showlists}</p> */}
      
    </li>
  );

}

export default ShowCard;