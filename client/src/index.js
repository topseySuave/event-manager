import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    applyMiddleware(loadingBarMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
