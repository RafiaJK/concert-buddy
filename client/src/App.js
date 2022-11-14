import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp';
import LoginForm from './LoginForm';
import ContactForm from './ContactForm';
import Navbar from './Navbar';
import Profile from './Profile';
import ArtistContainer from './ArtistContainer';
import ShowContainer from './ShowContainer';
import Welcome from './Welcome';

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

  const [artists, setArtists] = useState([])

  useEffect (() => { 
      fetch("/artists")
      .then((r)=>r.json())
      .then(setArtists);
  }, [])

  const [shows, setShows] = useState([])
  useEffect (() => { 
    fetch("/shows")
    .then((r)=>r.json())
    .then(setShows);
  }, [])


  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />

      <main>
          {user ? ( 
            <Switch>

              <Route exact path="/">
              </Route>

              <Route path="/profile">
                <Profile/>  
              </Route>

              <Route exact path="/artists">
                <ArtistContainer artists={artists}/>
              </Route>

              <Route exact path="/shows">
                <ShowContainer shows={shows}/>
              </Route>

              <Route exact path="/welcome">
                <Welcome/>
              </Route>

            </Switch>
          ) : (
            <Switch>
              <Route exact path="/signup">
                <SignUp setUser={setUser}/>
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
