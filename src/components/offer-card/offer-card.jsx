import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";

const renderPremium = () => {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};

const renderRating = (rating) => {
  return formatFloatingPointNumberToPercent(rating);
};

const OfferCard = (props) => {
  const {offer} = props;
  const {photo, title, premium, type, rating, price} = offer;
  const percentFromRating = renderRating(rating);
  const premiumTemplate = renderPremium();
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => props.onMouseEnter()} >
      {premium ? premiumTemplate : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={`img/${photo}`} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: percentFromRating + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;

OfferCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.ROOM, OfferType.HOUSE, OfferType.HOTEL]).isRequired,
    rating: PropTypes.number.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stuff: PropTypes.array.isRequired,
  })
};
