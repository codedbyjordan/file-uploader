import React from 'react';
import Nav from './components/Nav';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/file-uploader">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
