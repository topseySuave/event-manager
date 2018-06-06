import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './reducers/authReducer';
import centerReducer from './reducers/centerReducer';
import activeCenterReducer from './reducers/activeCenterReducer';
import eventReducer from './reducers/eventReducer';

export const rootReducer = combineReducers({
  /**
     * @Authentication reducer for user validation
     * * */
  authReducer: AuthReducer,

  /**
     * @center reducer for center storage to store
     * * */
  centerReducer,

  /**
     * @active center reducer to display center details from store
     * * */
  activeCenter: activeCenterReducer,

  /**
     * @event reducer for event storage to store
     * * */
  eventReducer
});

export const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);
