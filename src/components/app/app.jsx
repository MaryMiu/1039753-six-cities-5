import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../signin/signin";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import AuthorizedRoute from "../authorized-route/authorized-route";
import PrivateRoute from "../private-route/private-route";
import Message from "../message/message";

const App = (props) => {

  const {reviews} = props;

  return (
    <BrowserRouter>
      <Message />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <AuthorizedRoute exact path={`/login`} render={() => (<SignIn />)}></AuthorizedRoute>
        <PrivateRoute exact path={`/favorites`} render={() => (<Favorites />)}></PrivateRoute>
        <Route exact path="/offer/:id">
          <Room reviews={reviews} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default App;
