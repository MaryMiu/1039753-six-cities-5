import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import Menu from "../menu/menu";
import {connect} from "react-redux";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, offers} = this.props;
    const coord = offers.map((offer) => offer.coord);
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
                <b className="places__found">{offers.length} places to stay in {city}</b>
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
  offers: state.offers,
});

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);

