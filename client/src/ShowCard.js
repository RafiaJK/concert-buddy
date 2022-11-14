import { useState } from "react";

function ShowCard({ show, showlist }) {
  const { venue, date, artist_id } = show
  //const {show_id} = showlist
  //const [going, setGoing] = useState(show.going)
  const [going, setGoing] = useState([])


  const newShowlist = {
    show_id: show.id,
  }

  // function handleGoing(){
  //   setGoing((going) => !going)
  //   fetch('/showlists',{
  //     method:"PATCH",
  //     headers:{"Content-Type": "application/json"},
  //     body: JSON.stringify(newShowlist)
  //   })
  // }

  function handleShowlistClick(e) {
    e.preventDefault()
    fetch('/showlists', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShowlist),
    });
  }

  console.log(handleShowlistClick)

  return (
    <li className="card">
      <h3>{venue}</h3>
      <img src={show.artist.image} alt={"Artist Photo"} />
      <h2>{show.artist.name}</h2>
      <h4>{date}</h4>
      {going? (
        <button onClick={handleShowlistClick}className="primary">♥</button>
      ) : (
        <button onClick={handleShowlistClick}>♡</button>
      )}
    </li>
  );

}

export default ShowCard;