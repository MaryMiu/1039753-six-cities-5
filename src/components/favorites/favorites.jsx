import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {Сities} from "../../const";
import FavoritesLocation from "../favorites-location/favorites-location";


const Favorites = (props) => {

  const {offers} = props;
  const cities = Object.values(Сities).slice(0, 2);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city, i) => {
                return (
                  <FavoritesLocation key={`${i}-${city}`} city={city} offers={offers} />
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

export default Favorites;

Favorites.propTypes = {
  offers: PropTypes.array.isRequired
};
