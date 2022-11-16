import { Link } from "react-router-dom";
import {useContext} from 'react'
import UserContext from './UserContext'

function Navbar() {

  const {user, setUser} = useContext(UserContext) 


    function handleLogoutClick() {
      fetch("/logout", { 
        method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

  return (
    <div className="navbar">
    <header>
        <br/>

        {user ? (
        <>
          <button onClick={handleLogoutClick}>Logout</button>
          <nav>
          <Link to="/">Home </Link>
          <Link to="/profile">My Profile </Link>
          <Link to="/artists">Artists </Link>
          <Link to="/shows">Find A Show </Link>
            </nav>
        </> 
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}

    </header>
    </div>
  );
}

export default Navbar;