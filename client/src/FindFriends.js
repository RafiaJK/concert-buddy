import { useEffect, useState, useContext } from "react"
import UserContext from "./UserContext"
import UsernameContext from "./UsernameContext"
import FriendCard from "./FriendCard"

function FindFriends({friends}){

    
    const friendComponents = friends.map((friend) => {
        return <FriendCard key={friend.id} friend={friend} />
    })

    return (
        <div>
            <ul className="cards">{friendComponents}</ul>
        </div>
    )

}
export default FindFriends;