import { useEffect, useState } from "react";


function ArtistCard({ artist }) {
  const {name, image} = artist

  return (
    <li className="card">
        <h3>{name}</h3>
        <img src={image} alt={"Artist Photo"}/>
        <button>Follow</button>
    </li>
  );

}

export default ArtistCard;