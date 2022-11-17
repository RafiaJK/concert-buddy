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
            .then(setList);
    }, [])

    const myshows = list.shows
    console.log(myshows)

    // const myShows = myshows.map((show) => {
    //     return <UserShowlistCard key={myshows.id} myshows={myshows} />
    // })

    return (
        <div className="my-shows">
            <h2></h2>
            {/* <ul className="cards">{myShows}</ul> */}
        </div>
    );


}

export default UserShowlistContainer;