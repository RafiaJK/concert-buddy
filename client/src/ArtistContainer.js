import React from "react";
import ArtistCard from "./ArtistCard";
import { useState } from "react";

function ArtistContainer({artists}) {


    const artistComponents = artists.map((artist) => {
        return <ArtistCard key={artist.id} artist={artist} />
    })

    return (
        <ul className="cards">{artistComponents}</ul>
    );

}

export default ArtistContainer;