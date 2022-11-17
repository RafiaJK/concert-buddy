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
    <div className="navbg">
    <div className="navbar">
    {/* <div className="navlogo"></div> */}

    <header>
        <br/>

        {user ? (
        <>
          <button className="logoutbutton" onClick={handleLogoutClick}>Logout</button>
          <nav>
          <Link className="navlogo" to="/">Home </Link>
          <Link className="myprofilelink" to="/profile">My Profile </Link>
          <Link className="artistslink" to="/artists">Artists </Link>
          <Link className="findshowslink" to="/shows">Find A Show </Link>
            </nav>
        </> 
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
    </header>
  
    </div></div>
  );
}

export default Navbar;