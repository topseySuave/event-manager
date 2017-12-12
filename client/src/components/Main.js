import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homepage';
import SignUp from './authentication/signup/signup';
import SignIn from './authentication/signin/signin';
import CenterDetailIndex from './centerComponent/centerDetail'
import AllCenters from './centerComponent/allCenters'
import NoMatch from './noMatch'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path ='/' component={HomePage} />
                <Route path ='/signup' component={SignUp} />
                <Route path = '/signin' component={SignIn} />
                <Route path = '/center-detail' component={CenterDetailIndex} />
                <Route path = '/centers' component={AllCenters} />
                <Route path='*' component={NoMatch} />
            </Switch>
        )
    }
}

export default Main;
