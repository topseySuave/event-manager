/**
* ADD_USER action Constant, To add a new user to the store
* */
export const ADD_USER = 'ADD_USER';

/**
 * SET_USER action Constant,
 * To set the current signed in user details and authentication.
 * * */
export const SET_USER = 'SET_USER';

/**
 * REMOVE_USER action Constant,
 * To remove a user from the database then from the store .
 * * */
export const REMOVE_USER = 'REMOVE_USER';

/**
 * ADD_CENTER_SUCCESS action Constant,
 * To add a success request action when a
 * new center is being added to the database
 * * */
export const ADD_CENTER_SUCCESS = 'ADD_CENTER_SUCCESS';

/**
 * ADD_CENTER_FAlLURE action Constant,
 * To add a failure request action when a
 * new center is being added to the database
 * * */
export const ADD_CENTER_FAlLURE = 'ADD_CENTER_FAlLURE';

/**
 * ADD_CENTER_REQUEST action Constant,
 * To add a request action when a
 * new center is being sent to the database
 * * */
export const ADD_CENTER_REQUEST = 'ADD_CENTER_REQUEST';

/**
 * FETCH_CENTERS action Constant,
 * To fetch centers from the database.
 * * */
export const FETCH_CENTERS = 'FETCH_CENTERS';

/**
 * FETCH_CENTER_DETAIL action Constant,
 * To fetch a center details from the database.
 * * */
export const FETCH_CENTER_DETAIL = 'FETCH_CENTER_DETAIL';

/**
 * REMOVE_CENTER action Constant,
 * To remove a center from the database then the store.
 * * */
export const REMOVE_CENTER = 'REMOVE_CENTER';

/**
 * FETCH_RELATED_CENTERS action Constant,
 * To fetch a centers related centers
 * from the database then add to the store.
 * * */
export const FETCH_RELATED_CENTERS = 'FETCH_RELATED_CENTERS';

/**
 * EDIT_CENTER_REQUEST action Constant,
 * To add the center details to the store so
 * the details can be gotten and appended to the nodal form.
 * * */
export const EDIT_CENTER_REQUEST = 'EDIT_CENTER_REQUEST';

/**
 * EDIT_CENTER action Constant,
 * TO edit and change the center details.
 * * */
export const EDIT_CENTER = 'EDIT_CENTER';

/**
 * EDIT_CENTER_FAILURE action Constant,
 * action when edit center request failed.
 * * */
export const EDIT_CENTER_FAILURE = 'EDIT_CENTER_FAILURE';

/**
 * FETCH_EVENTS action constants.
 * TO fetch all centers from the database and add to the store.
 * * */
export const FETCH_EVENTS = 'FETCH_EVENTS';

/**
 * ADD_EVENT action constants.
 * To add a new event to the database and to the store.
 * * */
export const ADD_EVENT = 'ADD_EVENT';

/**
 * ADD_EVENT action constants.
 * To add a new event to the database and to the store.
 * * */
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

/**
 * EDIT_EVENT_REQUEST action constants.
 * To add a edit request before editing
 * an existing event in the database and the store.
 * * */
export const EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST';

/**
 * EDIT_EVENT action constants.
 * To edit an existing event in the database and the store.
 * * */
export const EDIT_EVENT = 'EDIT_EVENT';

/**
 * EDIT_EVENT_FAILURE action constants.
 * To throw error when edit request could not be made.
 * * */
export const EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';

/**
 * REMOVE_EVENT action constants.
 * To remove an existing event in the database and the store.
 * * */
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const LOADMORE_EVENT_REQUEST = 'LOADMORE_EVENT_REQUEST';
export const LOADMORE_EVENT_SUCCESS = 'LOADMORE_EVENT_SUCCESS';
export const LOADMORE_EVENT_FAILURE = 'LOADMORE_EVENT_FAILURE';

export const LOADMORE_CENTER_REQUEST = 'LOADMORE_CENTER_REQUEST';
export const LOADMORE_CENTER_SUCCESS = 'LOADMORE_CENTER_SUCCESS';
export const LOADMORE_CENTER_FAILURE = 'LOADMORE_CENTER_FAILURE';

export const SEARCH_CENTER_TITLE = 'SEARCH_CENTER_TITLE';
export const SEARCH_CENTER_TITLE_FAILED = 'SEARCH_CENTER_TITLE_FAILED';

export const SEARCH_EVENT_TITLE = 'SEARCH_EVENT_TITLE';
export const SEARCH_EVENT_TITLE_FAILED = 'SEARCH_EVENT_TITLE_FAILED';
export const SESSION_EVENTS = 'SESSION_EVENTS';
export const SESSION_EVENTS_FAILURE = 'SESSION_EVENTS_FAILURE';
export const EVENT_STATUS_CHANGE = 'EVENT_STATUS_CHANGE';
export const NOT_FOUND = 'NOT_FOUND';

export const IMAGE_PLACEHOLDER = 'http://placehold.it/600/92c952';
