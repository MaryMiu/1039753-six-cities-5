import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {
  withRouter
} from "react-router-dom";
import Header from "../header/header";
import OfferReviews from "../offer-reviews/offer-reviews";
import PlacesList from "../places-list/places-list";
import withMap from "../../hocs/with-map/with-map";
import Map from "../map/map";
import {OfferType} from "../../const";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";
import {connect} from "react-redux";
import {fetchOffer, fetchOfferListNearby, fetchComments} from "../../store/api-actions";

const MapWrapped = withMap(Map);

class Room extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const currentId = this.props.match.params.id;
    const {fetchOfferAction, fetchOffersNearbyAction, fetchCommentsAction} = this.props;
    fetchOfferAction(currentId);
    fetchOffersNearbyAction(currentId);
    fetchCommentsAction(currentId);
  }

  render() {
    const {comments, offer, offersNearby} = this.props;
    if (Object.keys(offer).length === 0) {
      return null;
    }

    const {id, images, title, description, isPremium, type, rating, price, bedrooms, maxAdults, goods, host} = offer;
    const {avatarUrl, name, isPro} = host;
    const mapStyle = {
      display: `flex`,
      height: `100%`,
      width: 1144,
      margin: `0 auto`,
    };
    const currentClasses = {
      listClass: `near-places__list`,
      cardClass: `near-places__card`,
      imgClass: `near-places__image-wrapper`,
    };

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((img, i) => {
                  return (
                    <div key={`${i}-img`} className="property__image-wrapper">
                      <img className="property__image" src={`${img}`} alt="Photo studio" />
                    </div>);
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: formatFloatingPointNumberToPercent(rating) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((stuffItem, i) => {
                      return (<li key={`${i}-${id}`} className="property__inside-item">
                        {stuffItem}
                      </li>);
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={isPro ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={`${avatarUrl}`} width="74" height="74" alt="Host avatarUrl" />
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <OfferReviews reviews={comments} />
              </div>
            </div>
            <section className="property__map map">
              <MapWrapped offers={offersNearby} mapStyle={mapStyle} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList offers={offersNearby} currentClasses={currentClasses} onMouseEnter={() => null}/>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  offers: PropTypes.array.isRequired,
  offersNearby: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([OfferType.APARTMENT, OfferType.ROOM, OfferType.HOUSE, OfferType.HOTEL]).isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.object.isRequired,
  }),
  fetchOfferAction: PropTypes.func.isRequired,
  fetchOffersNearbyAction: PropTypes.func.isRequired,
  fetchCommentsAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = ({DATA, COMMENTS}) => ({
  offers: DATA.offers,
  offer: DATA.offer,
  offersNearby: DATA.offersNearby,
  comments: COMMENTS.comments,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOfferAction: (id) => dispatch(fetchOffer(id)),
    fetchOffersNearbyAction: (id) => dispatch(fetchOfferListNearby(id)),
    fetchCommentsAction: (id) => dispatch(fetchComments(id)),
  };
};

export {Room};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
