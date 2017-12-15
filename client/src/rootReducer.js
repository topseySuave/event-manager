import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import AuthReducer from './reducers/authReducer'

export default combineReducers({
    loadingBar: loadingBarReducer,
    AuthReducer: AuthReducer
});
