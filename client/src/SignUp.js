import { useState, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import ContactForm from "./ContactForm";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";


function SignUp() {
  const { user, setUser } = useContext(UserContext)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/welcome');

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="signup">
      <div className="rectangle"></div>
      <h2 className="signup-welcome">Sign up to start!</h2>
      <h4 className="login-enter-details">Please enter your details.</h4>

      <form onSubmit={handleSubmit}>
        <label className="signup-username" htmlFor="username">Username:
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /></label>

        <label className="signup-password" htmlFor="password">Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></label>

        <label className="signup-passwordconfirm" htmlFor="password_confirmation">Confirm Password:
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        /></label>

        <button className="signup-button" type="submit">Sign up now!</button>
      </form>
      <p className="signup-haveaccount-login">Already have an account?  <Link to="/login">Log in</Link> now!</p>
      <div className="signup-logo"> </div>
    </div>

  );
}

export default SignUp;