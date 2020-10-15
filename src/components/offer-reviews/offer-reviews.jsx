import React from "react";
import PropTypes from "prop-types";
import OfferReview from "../offer-review/offer-review";
import ReviewsForm from "../reviews-form/reviews-form";


const OfferReviews = (props) => {

  const {reviews} = props;
  const count = reviews.length;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{count}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, i) => (
          <OfferReview key={`${i}-${review.id}`} review={review} />
        ))}
      </ul>
      <ReviewsForm />
    </section>
  );
};

export default OfferReviews;

OfferReviews.propTypes = {
  reviews: PropTypes.array.isRequired
};
