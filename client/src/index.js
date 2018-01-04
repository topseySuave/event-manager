import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer'

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
// );

const store = compose(
    applyMiddleware(thunk, loadingBarMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);

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
