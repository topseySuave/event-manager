import React from 'react';
import ReactDOM from 'react-dom';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import authCheck from './helpers/authCheck';
import rootReducer from './rootReducer';
// import { fetchEventRequest } from './actions/events-actions'

import registerServiceWorker from './registerServiceWorker';

export default store = compose(
  applyMiddleware(thunk, loadingBarMiddleware()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);

new authCheck().isSignedIn();

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
