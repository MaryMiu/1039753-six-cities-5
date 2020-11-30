import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PrivateRoute from "../private-route/private-route";
import Message from "../message/message";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Message />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => (<Favorites />)}></PrivateRoute>
        <Route exact path={`${AppRoute.OFFER}/:${AppRoute.ID}`}>
          <Room/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
