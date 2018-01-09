import React from 'react';
import ReactDOM from 'react-dom';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import jwtDecode from 'jwt-decode'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import setAuthorizationToken from './components/authentication/setAuthenticationToken'
import { setCurrentUser } from './actions/authActions'
import rootReducer from './rootReducer'

import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(
//             thunk,
//             loadingBarMiddleware()
//         ),
//         window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
// );

export const store = compose(
    applyMiddleware(thunk, loadingBarMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);

if(localStorage.getItem('jwtToken')) {
    if(jwtDecode(localStorage.getItem('jwtToken')).exp > new Date().now){
        localStorage.removeItem('jwtToken');
    }else {
        setAuthorizationToken(localStorage.getItem('jwtToken'));
        store.dispatch(setCurrentUser(localStorage.getItem('jwtToken')));
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
