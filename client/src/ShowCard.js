
function ShowCard({ show }) {
  const {venue, date, artist_id} = show

  return (
    <li className="card">
        <h3>{venue}</h3>
        <img src={show.artist.image} alt={"Artist Photo"}/>
        <h2>{show.artist.name}</h2>
        <h4>{date}</h4>
        <button>I'm Going!</button>
    </li>
  );

}

export default ShowCard;