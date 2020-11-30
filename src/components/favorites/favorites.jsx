import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import FavoritesLocation from "../favorites-location/favorites-location";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import {fetchFavoriteList} from "../../store/api-actions";
import {getFavoriteOffers, getFavoriteIds} from "../../store/selectors";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchFavoriteListAction} = this.props;
    fetchFavoriteListAction();
  }

  render() {
    const {favoritesOffers, favoriteIds} = this.props;
    const filtredFavoritesOffers = favoritesOffers.filter((favoritesOffer) => favoriteIds.includes(favoritesOffer.id));
    const favoriteCities = filtredFavoritesOffers.map((favoritesOffer) => favoritesOffer.city.name);
    const uniqueCities = Array.from(new Set(favoriteCities));
    return (
      <div className={`page ${filtredFavoritesOffers.length === 0 ? `page--favorites-empty` : ``}`}>
        <Header />
        {filtredFavoritesOffers.length > 0 ?
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {uniqueCities.map((uniqueCity) => {
                    return (
                      <FavoritesLocation key={uniqueCity} city={uniqueCity} offers={filtredFavoritesOffers.filter((filtredFavoriteOffer) => filtredFavoriteOffer.city.name === uniqueCity)} />
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

Favorites.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  favoriteIds: PropTypes.array.isRequired,
  fetchFavoriteListAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesOffers: getFavoriteOffers(state),
  favoriteIds: getFavoriteIds(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteListAction: () => dispatch(fetchFavoriteList())
  };
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
