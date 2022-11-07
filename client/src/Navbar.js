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
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      <nav>
        <Link to="/">Home </Link>
        <Link to="/contact">Update Profile</Link>
      </nav>

    </header>
  );
}

export default Navbar;