import React from "react";
import PropTypes from "prop-types";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";
import moment from "moment";

const renderRating = (rating) => {
  return formatFloatingPointNumberToPercent(rating);
};

export const formatCommentDate = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const OfferReview = (props) => {
  const {review} = props;
  const {name, avatar, star, date, text} = review;
  const percentFromRating = renderRating(star);
  const humanDate = formatCommentDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: percentFromRating + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{humanDate}</time>
      </div>
    </li>
  );
};

export default OfferReview;

OfferReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })
};
