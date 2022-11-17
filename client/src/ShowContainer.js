import React from "react";
import ShowCard from "./ShowCard";

function ShowContainer({shows}) {

    const showComponents = shows.map((show) => {
        return <ShowCard key={show.id} show={show} />
    })

    return (
        <div className="cards-container">
        <ul className="cards">{showComponents}</ul>
        </div>
    );

}

export default ShowContainer;