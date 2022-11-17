import { Link } from "react-router-dom";
import {useContext } from 'react'
import UserContext from './UserContext'
import {useHistory} from "react-router-dom"

function Navbar() {

  const {user, setUser} = useContext(UserContext) 

  const history = useHistory();


    function handleLogoutClick() {
      history.push('/login');
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
          <Link className="connectlink" to="/friends"> Connect </Link>
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