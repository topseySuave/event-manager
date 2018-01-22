import { store } from '../'
// import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '../components/authentication/setAuthenticationToken'
import {setCurrentUser, signOutRequest} from '../actions/authActions'

// dotenv.config();

export default class authCheck {
    constructor() {
    }

    jwtIsSet() {
        return !!localStorage.getItem('jwtToken')
    }

    isSignedIn() {
        if (this.jwtIsSet()) {
            // let current_time = new Date().getTime() / 1000;
            jwt.verify(localStorage.getItem('jwtToken'), '#(@#GYzU#EWERGFXTSWEW(@#YW($EW(', (err, decoded) => {
                if (err) {
                    store.dispatch(signOutRequest());
                } else {
                    setAuthorizationToken(localStorage.getItem('jwtToken'));
                    store.dispatch(setCurrentUser(localStorage.getItem('jwtToken')));
                }
            });
        }
    }

    isAdmin() {
        if (this.jwtIsSet()) {
            if (jwtDecode(localStorage.getItem('jwtToken')).role) {
                return true;
            }
        }
        return false;
    }
}