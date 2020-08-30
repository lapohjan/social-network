import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Feeds from './components/homepage/Feeds';
import PostDetails from './components/posts/PostDetails';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import CreateNewPost from './components/posts/CreateNewPost';
// import { FIREBASE_CONFIG as fbConfig} from './config/fbConfig';
// import { FirebaseReducer } from 'react-redux-firebase';
// import Firebase from 'firebase';

// //initialize Firebase
// Firebase.initializeApp(fbConfig);

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Feeds} />
              <Route path='/project/:id' component={PostDetails} />
              <Route path='/login' component={LogIn} />
              <Route path='/register' component={Register} />
              <Route path='/create' component={CreateNewPost} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
