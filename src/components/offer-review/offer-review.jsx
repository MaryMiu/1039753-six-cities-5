import React from "react";
import PropTypes from "prop-types";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";
import moment from "moment";

export const formatCommentDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const OfferReview = (props) => {
  const {review} = props;
  const {user, rating, date, comment} = review;
  const {name, avatarUrl} = user;
  const humanDate = formatCommentDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: formatFloatingPointNumberToPercent(rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{humanDate}</time>
      </div>
    </li>
  );
};

export default OfferReview;

OfferReview.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string.isRequired,
    })
  })
};
