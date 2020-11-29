import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlacesList = (props) => {
  const {currentClasses, offers, onMouse} = props;
  const {listClass} = currentClasses;

  return (
    <div className={`${listClass} places__list`}>
      {offers.map((offer) => {
        return (
          <PlaceCard key={offer.id} offer={offer} currentClasses={currentClasses} onMouse={onMouse} />
        );
      })}
    </div>
  );
};

PlacesList.propTypes = {
  currentClasses: PropTypes.shape({
    listClass: PropTypes.string,
    cardClass: PropTypes.string,
    imgClass: PropTypes.string,
  }),
  offers: PropTypes.array.isRequired,
  onMouse: PropTypes.func.isRequired
};

export default PlacesList;

