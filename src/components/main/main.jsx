import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import PlacesList from "../places-list/places-list";
import Sortlist from "../sortlist/sortlist";
import Map from "../map/map";
import Menu from "../menu/menu";
import {connect} from "react-redux";
import {Sort} from "../../const";
import {sortRatingDown, sortPriceLowToHight, sortPriceHightToLow} from "../../utils";
class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  sortOffers(offers, activeSortType) {
    switch (activeSortType) {
      case (Sort.POPULAR):
        return offers;
      case (Sort.LOW_TO_HIGH):
        return offers.sort(sortPriceLowToHight);
      case (Sort.HIGH_TO_LOW):
        return offers.sort(sortPriceHightToLow);
      case (Sort.TOP_RATED):
        return offers.sort(sortRatingDown);
    }
    return offers;
  }

  render() {
    const {activeCity, offers, activeSortType} = this.props;
    const filtredOffers = offers.filter((offer) => offer.city === activeCity).slice();
    const sortedOffers = this.sortOffers(filtredOffers, activeSortType);

    const mapStyle = {
      display: `flex`,
      height: `100%`,
      width: `100%`
    };
    const currentClasses = {
      listClass: `cities__places-list tabs__content`,
      cardClass: `cities__place-card`,
      imgClass: `cities__image-wrapper`,
    };

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Menu />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
                <Sortlist />
                <PlacesList offers={sortedOffers} currentClasses={currentClasses} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={sortedOffers} mapStyle={mapStyle} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
  activeSortType: state.activeSortType,
});

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);

