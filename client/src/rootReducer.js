import { combineReducers } from 'redux';
import AuthReducer from './reducers/authReducer';
import centerReducer from './reducers/centerReducer';
import activeCenterReducer from './reducers/activeCenterReducer';
import eventReducer from './reducers/eventReducer';

export default combineReducers({
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
