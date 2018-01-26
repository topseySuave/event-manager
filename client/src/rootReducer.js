import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import AuthReducer from './reducers/authReducer'
import centerReducer from './reducers/centerReducer'
import activeCenterReducer from './reducers/activeCenterReducer'
import eventReducer from './reducers/eventReducer'

export default combineReducers({
    /**
     * @loading bar reducer for ajax request runtime.
     * **/
    loadingBar: loadingBarReducer,

    /**
     * @Authentication reducer for user validation
     * **/
    authReducer: AuthReducer,

    /**
     * @center reducer for center storage to store
     * **/
    centerReducer: centerReducer,

    /**
     * @active center reducer to display center details from store
     * **/
    activeCenter: activeCenterReducer,

    /**
     * @event reducer for event storage to store
     * **/
    eventReducer: eventReducer
});