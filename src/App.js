import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar'
import Feeds from './Components/HomePage/Feeds'
import LogIn from './Components/Auth/LogIn'
import LogOut from './Components/Auth/LogOut'
import Register from './Components/Auth/Register'
import PostDetails from './Components/Posts/PostDetails'
import CreateNewPost from './Components/Posts/CreateNewPost'
import Firebase from 'firebase'
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig';

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/" component={Feeds}></Route>
            <Route exact path="/create" component={CreateNewPost}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={LogIn}></Route>
            <Route exact path="/logout" component={LogOut}></Route>
            <Route exact path="/post/:id" component={PostDetails}></Route>
          </Switch>       
        </div>
      </div>
    </Router>
  );
}

export default App;