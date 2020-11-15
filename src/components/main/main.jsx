import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import withPlace from "../../hocs/with-place/with-place";
import withCollapse from "../../hocs/with-collapse/with-collapse";
import withMap from "../../hocs/with-map/with-map";
import PlacesList from "../places-list/places-list";
import Sortlist from "../sortlist/sortlist";
import Map from "../map/map";
import Menu from "../menu/menu";
import Empty from "../empty/empty";
import {connect} from "react-redux";
import {Sort} from "../../const";
import {sortRatingDown, sortPriceLowToHight, sortPriceHightToLow} from "../../utils";
import {getActiveCity, getOffersByCity, getActiveSortType} from "../../store/selectors";

const SortListWrapped = withCollapse(Sortlist);
const PlacesListWrapped = withPlace(PlacesList);
const MapWrapped = withMap(Map);

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
    const sortedOffers = this.sortOffers(offers, activeSortType);

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
      <div className={`page page--gray page--main ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
        <Header />
        <main className={`page__main page__main--index ${offers.length === 0 ? `cities__places-container--empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Menu />
          </div>
          <div className="cities">
            {offers.length > 0 ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
                  <SortListWrapped />
                  <PlacesListWrapped offers={sortedOffers} currentClasses={currentClasses} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <MapWrapped offers={sortedOffers} mapStyle={mapStyle} />
                  </section>
                </div>
              </div>
              :
              <Empty />
            }
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  activeSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  offers: getOffersByCity(state),
  activeSortType: getActiveSortType(state),
});

export {Main};
export default connect(mapStateToProps)(Main);

