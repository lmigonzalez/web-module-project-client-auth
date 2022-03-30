import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";






function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link to='login' className="links">Login</Link>
          <Link to='friends' className="links">Friend List</Link>
          <Link to='/add' className="links">Add Friend</Link>
          <Link to='logout' className="links">Logout</Link>
        </header>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <PrivateRoute exact path="/friends" component={FriendList}/>

        <PrivateRoute exact path="/add" component={AddFriend}/>

        <PrivateRoute exact path="/logout" component={Logout}/>
         
      </div>
    </Router>
  );
}

export default App;
