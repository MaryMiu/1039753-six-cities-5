import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import PlacesList from "../places-list/places-list";
import Sortlist from "../sortlist/sortlist";
import Map from "../map/map";
import Menu from "../menu/menu";
import {connect} from "react-redux";

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {activeCity, offers} = this.props;
    const offersByCity = offers.filter((offer) => offer.city === activeCity);
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
                <b className="places__found">{offersByCity.length} places to stay in {activeCity}</b>
                <Sortlist />
                <PlacesList offers={offersByCity} currentClasses={currentClasses} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offersByCity} mapStyle={mapStyle} />
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
});

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export {Main};
export default connect(mapStateToProps)(Main);

