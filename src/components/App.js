import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home/';
import SignUp from './SignUp/';
import SignIn from './SignIn/';
import Profile from './Profile/';
import Result from './Result/';
import Rent from './Rent/';

const App = () => (
  <Router>
    <div className="main-container">
      <Navigation signedIn={false} />
      <div className="page-container">
        <Route exact path="/" render={Home} />
        <Route exact path="/signup" render={SignUp} />
        <Route exact path="/signin" render={SignIn} />
        <Route exact path="/profile" render={Profile} />
        <Route exact path="/result" render={Result} />
        <Route exact path="/rent" render={Rent} />
      </div>
    </div>
  </Router>
);

export default App;
