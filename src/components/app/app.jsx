import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../signin/signin";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PrivateRoute from "../private-route/private-route";
import Message from "../message/message";

const App = () => {
  return (
    <BrowserRouter>
      <Message />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute exact path={`/favorites`} render={() => (<Favorites />)}></PrivateRoute>
        <Route exact path="/offer/:id">
          <Room/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
