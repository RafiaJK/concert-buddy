import { useEffect, useState, useContext } from "react";
import UserContext from "./UserContext";


function ArtistCard({ artist, showlist }) {
  const {name, image} = artist
  const { user, setUser } = useContext(UserContext)


  // const [userShow, setUserShow] = useState([])

  // useEffect(() => {
  //     fetch(`/shows`)
  //         .then((r) => r.json())
  //         .then((data) => {
  //             setUserShow(userShow)
  //         })
  // }, [])

  // console.log(userShow)

  return (
    <li className="card">
        <h3>{name}</h3>
        <img src={image} alt={"Artist Photo"}/>
        <p>Coming Soon:</p>
        <button>Follow</button>
    </li>
  );

}

export default ArtistCard;