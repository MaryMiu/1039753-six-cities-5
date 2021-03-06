import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {
  withRouter
} from "react-router-dom";
import Header from "../header/header";
import OfferReviews from "../offer-reviews/offer-reviews";
import PlacesList from "../places-list/places-list";
import FavoriteButton from "../favorite-button/favorite-button";
import Map from "../map/map";
import {OfferType, MAX_COUNT_IMAGES} from "../../const";
import {
  formatFloatingPointNumberToPercent
} from "../../utils.js";
import {connect} from "react-redux";
import {fetchOffer, fetchOfferListNearby, fetchComments} from "../../store/api-actions";
import {getOffers, getOffer, getOffersNearby, getComments, getActiveOffer} from "../../store/selectors";
import {ActionCreator} from "../../store/action";

class Room extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._fetchInfoById();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this._fetchInfoById();
    }
  }

  _fetchInfoById() {
    const currentId = this.props.match.params.id;
    const {fetchOfferAction, fetchOffersNearbyAction, fetchCommentsAction} = this.props;
    fetchOfferAction(currentId);
    fetchOffersNearbyAction(currentId);
    fetchCommentsAction(currentId);
  }

  render() {
    const {comments, offer, offersNearby, getActiveOfferAction} = this.props;

    if (Object.keys(offer).length && offersNearby.length) {
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
      const offerImages = images.length > MAX_COUNT_IMAGES ? images.slice(0, MAX_COUNT_IMAGES) : images;
      getActiveOfferAction(offer);

      return (
        <div className="page">
          <Header />
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offerImages.map((img, i) => {
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
                    <FavoriteButton btnType={`property`} offerId={id}/>
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
                      {OfferType[type]}
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
                <Map offers={offersNearby} mapStyle={mapStyle} />
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <PlacesList offers={offersNearby} currentClasses={currentClasses} onMouse={() => null}/>
              </section>
            </div>
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

Room.propTypes = {
  offers: PropTypes.array.isRequired,
  offersNearby: PropTypes.array.isRequired,
  offer: PropTypes.object.isRequired,
  fetchOfferAction: PropTypes.func.isRequired,
  fetchOffersNearbyAction: PropTypes.func.isRequired,
  fetchCommentsAction: PropTypes.func.isRequired,
  getActiveOfferAction: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offer: getOffer(state),
  offersNearby: getOffersNearby(state),
  comments: getComments(state),
  activeOffer: getActiveOffer(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOfferAction: (id) => dispatch(fetchOffer(id)),
    fetchOffersNearbyAction: (id) => dispatch(fetchOfferListNearby(id)),
    fetchCommentsAction: (id) => dispatch(fetchComments(id)),
    getActiveOfferAction: (offer) => dispatch(ActionCreator.getActiveOffer(offer)),
  };
};

export {Room};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Room));
