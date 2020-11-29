import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from "react-redux";
import store from "./store/store";
import {checkAuth} from "./store/api-actions";

Promise.all([
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});
