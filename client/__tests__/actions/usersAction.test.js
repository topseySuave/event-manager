import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/actions';
import { store } from '../../src/rootReducer';
import * as userMock from '../__mocks__/actions/userMock';
import {
  setCurrentUser,
  removeCurrentUser,
  userSignupRequest,
  userSignInRequest
} from '../../src/actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user actions', () => {
  let newState;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

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

  test('should signup request be made', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            statusCode: 200,
            user: { id: 1, lastName: 'gabriel' }
          }
        },
      });
    });
    const mockedStore = mockStore({});
    return mockedStore.dispatch(userSignupRequest(userMock.signUpRequest));
  });

  test('should signin request be made', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            statusCode: 200,
            message: 'signin successful',
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
              .eyJpZCI6MiwibGFzdE5hbWUiOiJGb3N0
              ZXIiLCJyb2xlIjpmYWxzZSwiaWF0IjoxNTI3MjY1MTIzL
              CJleHAiOjE1MjczNTE1MjN9
              .ErCDwGG_Jh09Kdr1_Dxa5o1Au5xmtmwYlEoU5F1avPg`
          }
        },
      });
    });
    const mockedStore = mockStore({});
    return mockedStore.dispatch(userSignInRequest(userMock.signInRequest))
      .then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual([]);
      });
  });
});
