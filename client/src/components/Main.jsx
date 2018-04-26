import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomePage from './homepage';
import SignUp from './authentication/signup/signup';
import SignIn from './authentication/signin/signin';
import SignOut from './authentication/signout/signOut';
import CenterDetailIndex from './centerComponent/centerDetail';
import AllCentersIndex from './centerComponent/allCenters/index';
import MyEvents from './bodyComponents/myEvents';
import NoMatch from './noMatch';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/center/:id/:title" component={CenterDetailIndex} />
        <Route path="/centers" component={AllCentersIndex} />
        <Route path="/my-events" component={MyEvents} />
        <Route path="*" component={NoMatch} />
      </Switch>
    );
  }
}

export default Main;
