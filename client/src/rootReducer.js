import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import AuthReducer from './reducers/authReducer'
import centerReducer from './reducers/centerReducer'
import activeCenterReducer from './reducers/activeCenterReducer'
import eventReducer from './reducers/eventReducer'

export default combineReducers({
    loadingBar: loadingBarReducer,
    authReducer: AuthReducer,
    centerReducer: centerReducer,
    activeCenter: activeCenterReducer,
    eventReducer: eventReducer
});
