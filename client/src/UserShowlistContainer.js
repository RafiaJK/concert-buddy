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

    //see if i can do myshows within the setList


    //console.log(myshows)

    //see if i can do something similar to profile where we check for undefined first

    // const listItems = list.map(
    //     (element) => {
    //         return (
    //             <ul type="disc">
    //                 <li>{element.date}</li>
    //                 <li>{element.venue}</li>
    //                 <li>{element.artist.name}</li>
    //             </ul>
    //         )
    //     }
    // )

    console.log(list)

    const myShows = list.map((show) => {
        // return <UserShowlistCard key={show.id} show={show} />
        return ( 
        <ul type="disc">

        <li>{show.date}</li>
        {/* <li>{show.artist_id}</li> */}
        <li>{show.venue}</li>
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