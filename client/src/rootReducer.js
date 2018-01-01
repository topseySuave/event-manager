import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import AuthReducer from './reducers/authReducer'
import centerReducer from './reducers/centerReducer'

export default combineReducers({
    loadingBar: loadingBarReducer,
    authReducer: AuthReducer,
    centerReducer: centerReducer
});
