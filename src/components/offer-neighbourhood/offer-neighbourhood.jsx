import React from "react";
import PropTypes from "prop-types";
import OfferNeighbour from "../offer-neighbour/offer-neighbour";

const OfferNeighbourhood = (props) => {
  const {offers} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer, i) => (
          <OfferNeighbour key={`${i}-${offer.id}`} offer={offer} />
        ))}
      </div>
    </section>
  );
};

export default OfferNeighbourhood;

OfferNeighbourhood.propTypes = {
  offers: PropTypes.array.isRequired
};
