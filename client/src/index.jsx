import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500, teal300, green300, black } from "material-ui/styles/colors";
import App from "./components/App";
import AuthCheck from "./helpers/authCheck";
import rootReducer from "./rootReducer";
import history from "../src/util/history";

import registerServiceWorker from "./registerServiceWorker";

export const store = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);

new AuthCheck().isSignedIn();

history.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === "POP") {
      return;
    }
    // In all other cases, check fragment/scroll to top
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  });
});

const muiTheme = getMuiTheme({
  palette: {
    textColor: black
  },
  appBar: {
    height: 64
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
