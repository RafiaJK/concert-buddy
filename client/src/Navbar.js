import { Link } from "react-router-dom";


function Navbar({user, setUser}) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

  return (
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
  );
}

export default Navbar;