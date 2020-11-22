import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {Provider} from "react-redux";
import store from "./store/store";
import {checkAuth} from "./store/api-actions";

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)

);
