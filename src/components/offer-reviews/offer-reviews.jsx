import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferReview from "../offer-review/offer-review";
import withReview from "../../hocs/with-review/with-review";
import ReviewsForm from "../reviews-form/reviews-form";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/selectors";
import {MAX_COUNT_REVIEWS} from "../../const";
import {sortDateNewByOld} from "../../utils";

const ReviewsFormWrapped = withReview(ReviewsForm);

const OfferReviews = (props) => {

  const {reviews, authorizationStatus} = props;
  const sortedReviews = reviews.sort(sortDateNewByOld);
  const offerReviews = sortedReviews.length > MAX_COUNT_REVIEWS ? sortedReviews.slice(0, MAX_COUNT_REVIEWS) : sortedReviews;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews.map((offerReview) => (
          <OfferReview key={offerReview.id} review={offerReview} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <ReviewsFormWrapped />
        :
        ``}
    </section>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

OfferReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {OfferReviews};
export default connect(mapStateToProps)(OfferReviews);
