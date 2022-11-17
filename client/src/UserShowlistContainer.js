import React from "react";
import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import UserShowlistCard from "./UserShowlistCard";

import ShowCard from "./ShowCard";

function UserShowlistContainer({ showlists, shows }) {
    const { user, setUser } = useContext(UserContext)

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`users/${user.id}`)
            .then((r) => r.json())
            .then((data) => {
                setList(data.shows)
            })
    }, [])

    const myShows = list.map((show) => {
        // return <UserShowlistCard key={show.id} show={show} />
        return ( 
        <ul type="disc">

        <li>{show.date}</li>
        {/* <li>{show.artist_id}</li> */}
        <li>@{show.venue}</li>
        {/* <button>REMOVE</button> */}
        </ul>
        )
    })


    return (
        <div className="my-shows">
            <h2></h2>
            {/* {myshows!==undefined ? <p>{listItems}</p> : null} */}
            {/* <div>
            {listItems}
            </div> */}
            <div>{myShows}</div>
        
            {/* <ul className="cards">{myShows}</ul> */}
        </div>
    );


}

export default UserShowlistContainer;