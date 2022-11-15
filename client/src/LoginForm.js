import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import UsernameContext from "./UsernameContext";
import PasswordContext from "./PasswordContext"

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
      <>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label> Username 
                <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </label>

            <label> Password 
                <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit"> Login </button>
        </form>
      </>
    );
}

export default LoginForm;