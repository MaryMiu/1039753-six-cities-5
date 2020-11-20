import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";
import {ActionCreator} from "./store/action";
import {fetchOfferList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOfferList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>,
    document.querySelector(`#root`)

);
