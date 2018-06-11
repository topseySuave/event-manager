import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../src/actions';
import { store } from '../../src/rootReducer';
import {
  eventsDispatchAction,
  searchEventsDispatch,
  createEvent,
  createEventRequest,
  fetchEventRequest
} from '../../src/actions/events-actions';

import * as eventActionMock from '../__mocks__/actions/eventsMock';

let newState;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Events Actions', () => {
  describe('events async actions', () => {
    test('should be able to create an event', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {
              statusCode: 200,
              center: { id: 1 }
            }
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      const eventData = { title: 'this is us' };
      let expectedActions = [{ type: 'EDIT_EVENT_FAILURE' }];
      return mockedStore.dispatch(createEvent(eventData, '')).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should make a image upload request with image', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {}
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      const eventData = { title: 'this is us', img_url: { name: '2.jpg' } };
      let expectedActions = [];
      return mockedStore.dispatch(createEventRequest(eventData)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });

    test('should make a image upload request without image', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: {}
          },
        });
      });
      const mockedStore = mockStore({ posts: {} });
      const eventData = { title: 'this is us', img_url: {} };
      let expectedActions = [{ type: 'EDIT_EVENT_FAILURE' }];
      return mockedStore.dispatch(createEventRequest(eventData)).then(() => {
        // return of async actions
        expect(mockedStore.getActions()).toEqual(expectedActions);
      });
    });
  });

  test('should make an edit event request', () => {
    store.dispatch(eventsDispatchAction('edit_request', eventActionMock
      .oneEvent));

    newState = store.getState();
    let { eventToEdit, editEvent } = newState.eventReducer;
    expect(editEvent).toBeTruthy();
    expect(eventToEdit.id).toBe(1);
  });

  test('should edit an event', () => {
    eventActionMock.oneEvent.id = 2;
    store.dispatch(eventsDispatchAction('edit', eventActionMock.oneEvent));

    newState = store.getState();
    let { eventToEdit, editEvent } = newState.eventReducer;
    expect(editEvent).toBeTruthy();
    expect(eventToEdit.id).toBe(2);
  });

  test('should add an event', () => {
    store.dispatch(eventsDispatchAction('add', eventActionMock.oneEvent));

    newState = store.getState();
    let { sessEvents: { events } } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(events).toBeTruthy();
    expect(events.length).toBe(1);
  });

  test('should adding an event fail', () => {
    store.dispatch(eventsDispatchAction('add', eventActionMock.oneEvent));

    newState = store.getState();
    let { sessEvents: { events } } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(events).toBeTruthy();
    expect(events.length).toBe(2);
  });

  test('should fetch all events', () => {
    store.dispatch(eventsDispatchAction('fetch', eventActionMock.allEvents));

    newState = store.getState();
    let { sessEvents: { events } } = newState.eventReducer;
    expect(events).toBeTruthy();
    expect(events.length).toBe(4);
  });

  test('should delete an event', () => {
    store.dispatch(eventsDispatchAction('fetch', eventActionMock.allEvents));
    store.dispatch(eventsDispatchAction('delete', eventActionMock.oneEvent));

    newState = store.getState();
    let { sessEvents: { events } } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(events).toBeTruthy();
    expect(events.length).toBe(3);
  });

  test('should editing an event fail', () => {
    store.dispatch(eventsDispatchAction('EDIT_EVENT_FAILURE'));

    newState = store.getState();
    let { isLoading } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(isLoading).toBeFalsy();
  });

  test('should store all events as session events', () => {
    store.dispatch(eventsDispatchAction('SESSION_EVENTS', eventActionMock
      .allEvents));

    newState = store.getState();
    let { sessEvents: { events } } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(events).toBeTruthy();
    expect(events.length).toBe(3);
  });

  test('should storing all events as session events fail', () => {
    store.dispatch(eventsDispatchAction('SESSION_EVENTS_FAILURE'));

    newState = store.getState();
    let { sessEvents } = newState.eventReducer;
    // console.log('newSate ==> ', newState);
    expect(sessEvents.length).toBe(0);
  });

  test('should event status change', () => {
    store.dispatch(eventsDispatchAction('EVENT_STATUS_CHANGE'));

    newState = store.getState();
    let { eventStatusChange } = newState.activeCenter;
    // console.log('newSate ==> ', newState);
    expect(eventStatusChange).toBeTruthy();
  });

  test('should load more events request run', () => {
    store.dispatch(eventsDispatchAction('LOADMORE_EVENT_REQUEST'));

    newState = store.getState();
    let { loadmore, loadingmore } = newState.eventReducer;
    expect(loadmore).toBeTruthy();
    expect(loadingmore).toBeTruthy();
  });

  test('should load more events run successfully', () => {
    store.dispatch(eventsDispatchAction('fetch', eventActionMock.allEvents));
    store
      .dispatch(eventsDispatchAction('LOADMORE_EVENT_SUCCESS', eventActionMock
        .allEvents));

    newState = store.getState();
    let { loadingmore, sessEvents: { events } } = newState.eventReducer;
    expect(loadingmore).toBeFalsy();
    expect(events.length).toBe(4);
  });

  test('should load more events fail', () => {
    store.dispatch(eventsDispatchAction('fetch', eventActionMock.allEvents));
    store
      .dispatch(eventsDispatchAction('LOADMORE_EVENT_FAILURE'));

    newState = store.getState();
    let { loadingmore, sessEvents: { events } } = newState.eventReducer;
    expect(loadingmore).toBeFalsy();
    expect(events.length).toBe(4);
  });

  test('should search for an event', () => {
    store.dispatch(searchEventsDispatch(eventActionMock.allEvents));

    newState = store.getState();
    let { loadingmore, sessEvents: { events } } = newState.eventReducer;
    expect(loadingmore).toBeFalsy();
    expect(events.length).toBe(4);
  });
});
