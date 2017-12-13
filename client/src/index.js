import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
// import HomePage from './components/homepage';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(loadingBarMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
