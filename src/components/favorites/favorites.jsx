import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import {CITIES} from "../../const";
import FavoritesLocation from "../favorites-location/favorites-location";


const Favorites = (props) => {

  const {offers} = props;
  const favoriteCities = CITIES.slice(0, 2);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((favoriteCity) => {
                return (
                  <FavoritesLocation key={favoriteCity} city={favoriteCity} offers={offers} />
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
