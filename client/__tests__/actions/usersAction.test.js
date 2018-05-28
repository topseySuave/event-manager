import expect from 'expect';
import * as actionTypes from '../../src/actions';
import { store } from '../../src/rootReducer';
import * as userMock from '../__mocks__/actions/userMock';
import {
  setCurrentUser,
  removeCurrentUser
} from '../../src/actions/authActions';

describe('user actions', () => {
  let newState;

  test('should make set a user to reducer', () => {
    store
      .dispatch(setCurrentUser(userMock.userState));
    // get the state
    newState = store.getState();
    let { isAuthenticated, user } = newState.authReducer;
    expect(isAuthenticated).toBeTruthy();
    expect(user.lastName).toBe('Micah');
  });

  test('should remove a user from reducer', () => {
    store
      .dispatch(removeCurrentUser());
    // get the state
    newState = store.getState();
    let { isAuthenticated, user } = newState.authReducer;
    expect(isAuthenticated).toBeFalsy();
  });
});
