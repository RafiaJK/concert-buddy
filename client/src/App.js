import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp';
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import Profile from './Profile';
import ArtistContainer from './ArtistContainer';
import ShowContainer from './ShowContainer';
import Welcome from './Welcome';
import UserContext from './UserContext';
import UsernameContext from './UsernameContext';
import PasswordContext from './PasswordContext';
import UserShowlistCard from './UserShowlistCard';
import Home from './Home';

function App() {
  const [user, setUser] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  // auto-login
  useEffect(() => {
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

  // const [showlists, setShowlists] = useState([])
  // useEffect (() => { 
  //   fetch("/showlists")
  //   .then((r)=>r.json())
  //   .then(setShowlists);
  // }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
      <UsernameContext.Provider value={{ username, setUsername }}>
      <PasswordContext.Provider value={{ password, setPassword }}>

      <Navbar  />

      <div>
          {user ? ( 
            <Switch>

              <Route exact path="/home">
                <Home/>
              </Route>

              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/profile">
                <Profile shows={shows}/>  
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

              <Route exact path="/showlists">
              </Route>

            </Switch>
          ) : (
            <Switch>

              <Route exact path="/">
                <SignUp setUser={setUser}/>
              </Route>

              <Route exact path="/signup">
                <SignUp setUser={setUser}/>
              </Route>

              <Route exact path="/login">
                 <LoginForm setUser={setUser}/>
              </Route>
            </Switch>
          )} 

      </div> 
      </PasswordContext.Provider>
      </UsernameContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
