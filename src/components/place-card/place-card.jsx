import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";

const PlaceCard = (props) => {
  const {currentClasses, offer, onMouseEnter} = props;
  const {previewImage, title, isPremium, isFavorite, type, rating, price, id} = offer;
  const {cardClass, imgClass} = currentClasses;

  return (
    <article className={`${cardClass} place-card`} onMouseEnter={() => onMouseEnter(offer)} >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className={`${imgClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={`${previewImage}`} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: formatFloatingPointNumberToPercent(rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  currentClasses: PropTypes.shape({
    listClass: PropTypes.string,
    cardClass: PropTypes.string,
    imgClass: PropTypes.string,
  }),
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.ROOM, OfferType.HOUSE, OfferType.HOTEL]).isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
  })
};

export default React.memo(PlaceCard);

