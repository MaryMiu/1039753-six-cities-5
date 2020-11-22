import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import {CITIES} from "../../const";
import FavoritesLocation from "../favorites-location/favorites-location";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {fetchFavoriteList} from "../../store/api-actions";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    const {fetchFavoriteListAction} = this.props;
    fetchFavoriteListAction().then(() => {
      this.setState({isLoaded: true});
    });
  }

  render() {
    const {isLoaded} = this.state;
    if (!isLoaded) {
      return null;
    } else {
      const {favoritesOffers} = this.props;
      const favoriteCities = CITIES.slice(0, 2);
      return (
        <div className={`page ${favoritesOffers.length === 0 ? `page--favorites-empty` : ``}`}>
          <Header />
          {favoritesOffers.length > 0 ?
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {favoriteCities.map((favoriteCity) => {
                      return (
                        <FavoritesLocation key={favoriteCity} city={favoriteCity} offers={favoritesOffers} />
                      );
                    })}
                  </ul>
                </section>
              </div>
            </main>
            :
            <FavoritesEmpty />
          }
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </a>
          </footer>
        </div>
      );
    }
  }
}

Favorites.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  fetchFavoriteListAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  favoritesOffers: DATA.favoritesOffers,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteListAction: () => dispatch(fetchFavoriteList())
  };
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
