import React from "react";
import PropTypes from "prop-types";
import FavoritesCard from "../favorites-card/favorites-card";

const FavoritesLocation = (props) => {
  const {city, offers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer, i) => (
          <FavoritesCard key={`${i}-${offer.id}`} offer={offer} />
        ))}
      </div>
    </li>
  );
};

export default FavoritesLocation;

FavoritesLocation.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};
