import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp';
import LoginForm from './LoginForm';
import ContactForm from './ContactForm';
import Navbar from './Navbar';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />

      <main>
          {user ? ( 
            <Switch>

              <Route exact path="/">
              </Route>

              <Route path="/contact">

              </Route>


            </Switch>
          ) : (
            <Switch>
              <Route exact path="/signup">
                <SignUp setUser={setUser}/>
                <ContactForm/>
              </Route>
              <Route exact path="/login">
                 <LoginForm setUser={setUser}/>
              </Route>
            </Switch>
          )}

      </main> 
    </BrowserRouter>
  );
}

export default App;
