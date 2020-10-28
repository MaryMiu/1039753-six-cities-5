import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import Locations from "../locations/locations";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {city, offersInCity, onGetOffers} = this.props;
    this.city = city;
    this.onGetOffers = onGetOffers;
  }

  componentDidUpdate() {
    this.onGetOffers(this.city);
  }

  render() {
    const {count, offers, locations} = this.props;
    const coord = offers.map((offer) => offer.coord);
    const cities = locations.map((location) => location.title);
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
            <Locations cities={cities} />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{count} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <PlacesList offers={offers} currentClasses={currentClasses} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map coord={coord} mapStyle={mapStyle} />
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
  city: state.city,
  offersInCity: state.offersInCity,
});

const mapDispatchToProps = (dispatch) => ({
  onGetOffers(city) {
    dispatch(ActionCreator.getOffers(city));
  },
});

Main.propTypes = {
  count: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

