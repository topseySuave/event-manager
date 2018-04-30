import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { store } from '../';
import setAuthorizationToken from '../components/authentication/setAuthenticationToken';
import { setCurrentUser, signOutRequest } from '../actions/authActions';

export default class AuthCheck {
  jwtIsSet() {
    return !!localStorage.getItem('jwtToken');
  }

  isSignedIn() {
    if (this.jwtIsSet()) {
      jwt.verify(localStorage.getItem('jwtToken'), 'iamgabrieltopseysuavemicah', (err, decoded) => {
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
      if (jwtDecode(localStorage.getItem('jwtToken')).role) return true;
    }
    return false;
  }
}
