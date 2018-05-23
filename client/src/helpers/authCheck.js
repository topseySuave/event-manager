import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import { store } from '../';
import setAuthorizationToken from
  '../components/authentication/setAuthenticationToken';
import { setCurrentUser, signOutRequest } from '../actions/authActions';

/**
 * AuthCheck Class
 * */
export default class AuthCheck {
  /**
   * jwtIsSet Method
   * @return { boolean }
   * */
  jwtIsSet() {
    return !!localStorage.getItem('jwtToken');
  }

  /**
   * isSignedIn Method
   * @return { void }
   * */
  isSignedIn() {
    if (this.jwtIsSet()) {
      jwt.verify(
        localStorage.getItem('jwtToken'),
        process.env.SECRET_KEY,
        (err, decoded) => {
          if (err) {
            store.dispatch(signOutRequest());
          } else {
            setAuthorizationToken(localStorage.getItem('jwtToken'));
            store.dispatch(setCurrentUser(localStorage.getItem('jwtToken')));
          }
        }
      );
    }
  }

  /**
   * isAdmin Method
   * @return { boolean }
   * */
  isAdmin() {
    if (this.jwtIsSet()) {
      if (jwtDecode(localStorage.getItem('jwtToken')).role) return true;
    }
    return false;
  }
}
