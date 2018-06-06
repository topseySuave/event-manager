import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/actions';
import { store } from '../../src/rootReducer';

// import active center actions
import {
  fetchCenterDispatch,
  fetchCenterAction,
  editCenterRequestAction
} from
  '../../src/actions/center-actions/activeCenterAction';
import {
  addCenterPayload,
  updateCenterPayload,
  createCenter
} from '../../src/actions/modalAction';
import {
  fetchCentersDispatch,
  searchCenterDispatch,
  fetchCentersAction,
  loadMoreCenters
} from '../../src/actions/center-actions/fetchCenterAction';
import { deleteAction, deleteCenterRequest } from
  '../../src/actions/center-actions/deleteCenterAction';
import * as centerActionMock from '../__mocks__/actions/centerActionMock';

let newState, centerApi;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Center actions', () => {
  beforeEach(() => {
    moxios.install();
    centerApi = '/api/v1/centers';
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('async actions', () => {
    test('should fetch centers from server successfully', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {
              centers: [{ id: 1 }]
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      return mockedStore.dispatch(fetchCentersAction()).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(centerActionMock
          .expectedActions);
      });
    });

    test('should load more centers successfully', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {
              statusCode: 200,
              centers: [{ id: 1 }]
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [{
        type: 'LOADMORE_CENTER_REQUEST'
      }, {
        type: 'LOADMORE_CENTER_FAILURE'
      }];
      return mockedStore.dispatch(loadMoreCenters(2)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should load more centers fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            data: {
              statusCode: 400,
              centers: []
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [{
        type: 'LOADMORE_CENTER_REQUEST'
      }, {
        type: 'LOADMORE_CENTER_FAILURE'
      }];
      return mockedStore.dispatch(loadMoreCenters(2)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should delete a center', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {
              statusCode: 200,
              center: { id: 2 }
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [{
        payload: {
          data: {
            center: { id: 2 },
            statusCode: 200
          }
        },
        type: 'REMOVE_CENTER'
      }];
      return mockedStore.dispatch(deleteCenterRequest(2)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should deleting a center fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {
            data: {
              statusCode: 200,
              center: { id: 2 }
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [];
      return mockedStore.dispatch(deleteCenterRequest()).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should the id specified be wrong', () => {
      let response = fetchCenterAction(null);
      expect(response).toBe('id is required for the request to be successful');
    });

    test('should make an edit center request', () => {
      const mockedStore = mockStore({ posts: {} });
      let expectedResponse = { type: 'EDIT_CENTER_REQUEST' };
      let response = mockedStore.dispatch(editCenterRequestAction());
      expect(response).toEqual(expectedResponse);
    });

    test('should fetch a center successfully', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {
              statusCode: 200,
              center: { id: 2 }
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [{
        center: {
          data: {
            center: {
              id: 2
            },
            statusCode: 200
          }
        },
        type: 'FETCH_CENTER_DETAIL'
      }];
      return mockedStore.dispatch(fetchCenterAction(2)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should fetching a center fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            data: {
              statusCode: 400,
              center: {}
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      let expectedActions = [{ type: 'NOT_FOUND' }];
      return mockedStore.dispatch(fetchCenterAction(2)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('dealing with the general centers actions', () => {
    test('should make a request action to reducer', () => {
      store
        .dispatch(addCenterPayload(centerActionMock
          .MakeCenterRequest, 'request'));
      // get the state
      newState = store.getState();
      const { startAddingCenter } = newState.centerReducer;
      expect(startAddingCenter).toBeTruthy();
      expect(startAddingCenter).toBe(true);
    });

    test('should add a new centers', () => {
      // store center object to the store
      store
        .dispatch(addCenterPayload(centerActionMock
          .activeCenter.center, 'success'));
      // get the state
      newState = store.getState();
      const { centers } = newState.centerReducer;
      expect(centers).toBeTruthy();
      expect(centers[0].id).toBe(1);
    });

    test('should be run a failure action', () => {
      store.dispatch(addCenterPayload(centerActionMock
        .centerFailure, 'failure'));

      // get the state
      newState = store.getState();
      const { message, statusCode } = newState.centerReducer;
      expect(message).toBe('center could not be added');
      expect(statusCode).toBe(401);
    });

    test('should fetch centers', () => {
      store
        .dispatch(fetchCentersDispatch(centerActionMock
          .centers, 'FETCH_CENTERS'));

      // get the state
      newState = store.getState();
      const { centers } = newState.centerReducer;
      const centersMock = centerActionMock.centers.centers;
      expect(centers.length).toBeGreaterThan(1);
      expect(centers).toBe(centersMock);
    });

    test('should load more action make a request', () => {
      store.dispatch(fetchCentersDispatch(null, 'LOADMORE_CENTER_REQUEST'));
      // get the state
      newState = store.getState();
      const { loadmore, loadingmore } = newState.centerReducer;
      expect(loadmore).toBeTruthy();
      expect(loadingmore).toBeTruthy();
    });

    test('should load more action fail', () => {
      store.dispatch(fetchCentersDispatch(null, 'LOADMORE_CENTER_FAILURE'));
      // get the state
      newState = store.getState();
      const { loadingmore } = newState.centerReducer;
      expect(loadingmore).toBeFalsy();
    });

    test('should load more action succeed', () => {
      store.dispatch(fetchCentersDispatch(centerActionMock
        .centers, 'LOADMORE_CENTER_SUCCESS'));

      // get the state
      newState = store.getState();
      const { centers } = newState.centerReducer;
      expect(centers.length).toBeGreaterThan(4);
    });

    test('should load more action return false from reducer', () => {
      store.dispatch(fetchCentersDispatch(centerActionMock
        .centers, 'LOADMORE_CENTER_SUCCESS'));

      // get the state
      newState = store.getState();
      const { centers } = newState.centerReducer;
      expect(centers.length).toBeGreaterThan(4);
    });

    test('should search action run', () => {
      let payload = centerActionMock.centers;
      store.dispatch(searchCenterDispatch(payload));

      // get the state
      newState = store.getState();
      const { centers } = newState.centerReducer;
      expect(centers.length).toBe(4);
    });

    test('should search action run with empty center', () => {
      let payload = (centerActionMock.centers.centers = []);
      store.dispatch(searchCenterDispatch(payload));

      // get the state
      newState = store.getState();
      // console.log('newState ===> ', newState);
      const { centers } = newState.centerReducer;
      expect(centers.length).toBe(4);
    });

    test('should search action fail', () => {
      store.dispatch(searchCenterDispatch(null, 'SEARCH_CENTER_TITLE_FAILED'));

      // get the state
      newState = store.getState();
      const { searchFailure } = newState.centerReducer;
      expect(searchFailure).toBeTruthy();
    });
  });

  describe('dealing with active center action', () => {
    test('should fetch a center details', () => {
      store.dispatch(fetchCenterDispatch(centerActionMock
        .activeCenter, 'FETCH_CENTER_DETAIL'));

      // get the state
      newState = store.getState();
      const { center } = newState.activeCenter;
      expect(center).toBeTruthy();
      expect(center.id).toBe(1);
    });

    test('should make an edit center request', () => {
      store.dispatch(fetchCenterDispatch(null, 'EDIT_CENTER_REQUEST'));

      // get the state
      newState = store.getState();
      const { editCenter } = newState.activeCenter;
      expect(editCenter).toBeTruthy();
    });

    test('should edit a center succeed', () => {
      store.dispatch(updateCenterPayload(centerActionMock
        .activeCenter, 'success'));

      // get the state
      newState = store.getState();
      // console.log('newState ===> ', newState);
      const { center } = newState.activeCenter;
      expect(center.id).toBe(1);
    });

    test('should delete a center', () => {
      store.dispatch(deleteAction(centerActionMock.activeCenter));

      // get the state
      newState = store.getState();
      // console.log('newState ===> ', newState);
      const { center } = newState.activeCenter;
      expect(center).toBeFalsy();
    });
  });
});
