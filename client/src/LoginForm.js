import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import UsernameContext from "./UsernameContext";
import PasswordContext from "./PasswordContext"
import { Link } from "react-router-dom";

function LoginForm() {
  const { user, setUser } = useContext(UserContext)
  const {username, setUsername} = useContext(UsernameContext) 
  const {password, setPassword} = useContext(PasswordContext) 
  const [login, setLogin] = useState("")
  const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }
    

    return (
      <div className="login">
      <h2>Login</h2>
        <div className="rectangle"></div>
        <div className="login-logo"></div>
        <h2 className="login-welcome">Welcome back!</h2>
        <h4 className="login-enter-details">Please enter your details.</h4>
        <form onSubmit={handleSubmit}>
            <label className="login-user"> Username 
                <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </label>

            <label className="login-password"> Password 
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button className="login-button" type="submit"> Login </button>
        </form>
      <p className="login-noaccount-signup">Don’t have an account?  <Link to="/signup">Sign up</Link> for free!</p>
      </div>
    );
}

export default LoginForm;