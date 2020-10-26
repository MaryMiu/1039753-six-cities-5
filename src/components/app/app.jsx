import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../signin/signin";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

const App = (props) => {

  const {count, offers, reviews, locations} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main count={count} offers={offers} locations={locations} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route exact path="/offer/:id">
          <Room offers={offers} reviews={reviews} />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
