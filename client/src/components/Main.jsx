import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom'
import HomePage from './homepage';
import SignUp from './authentication/signup/signup';
import SignIn from './authentication/signin/signin';
import SignOut from './authentication/signout/signOut';
import CenterDetailIndex from './centerComponent/centerDetail';
import AllCentersIndex from './centerComponent/allCenters/index';
import NoMatch from './noMatch';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory({
    basename: '/'
});

class Main extends Component {
    render() {
        return (
            <Switch history={history}>
                <Route exact path ='/' component={HomePage} />
                <Route path ='/signup' component={SignUp} />
                <Route path = '/signin' component={SignIn} />
                <Route path = '/signout' component={SignOut} />
                <Route path = '/center/:id/:title' component={CenterDetailIndex} />
                <Route path = '/centers' component={AllCentersIndex} />
                <Route path='*' component={NoMatch} />
            </Switch>
        )
    }
}

export default Main;
