import expect from 'expect';
import * as actionTypes from '../../src/actions';
import { store } from '../../src/rootReducer';

// import active center actions
import { fetchCenterDispatch } from
  '../../src/actions/center-actions/activeCenterAction';
import {
  addCenterPayload,
  updateCenterPayload
} from '../../src/actions/modalAction';
import {
  fetchCentersDispatch,
  searchCenterDispatch
} from '../../src/actions/center-actions/fetchCenterAction';
import { deleteAction } from
  '../../src/actions/center-actions/deleteCenterAction';
import * as centerActionMock from '../__mocks__/actions/centerActionMock';

let newState;

describe('Center actions', () => {
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
