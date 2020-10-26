import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import Locations from "../locations/locations";

const Main = (props) => {
  const {count, offers, locations} = props;
  const coord = offers.map((offer) => offer.coord);
  const cities = locations.map((location) => location.title);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{count} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OfferList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map coord={coord} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

Main.propTypes = {
  count: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
};


