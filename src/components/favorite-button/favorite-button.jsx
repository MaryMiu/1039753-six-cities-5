import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFavorite} from "../../store/api-actions";
import {getFavoriteIds} from "../../store/selectors";
import {OfferButton} from "../../const";

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  _handleStatusChange(id, isFavorite) {
    const {setFavorite, removeFavorite} = this.props;
    if (isFavorite) {
      return removeFavorite(id);
    } else {
      return setFavorite(id);
    }
  }

  render() {
    const {favoriteIds, btnType, offerId} = this.props;
    const isFavorite = favoriteIds.includes(offerId);

    return (
      <button className={`${btnType}__bookmark-button button ${isFavorite ? `${btnType}__bookmark-button--active` : ``}`} type="button"
        onClick={()=> {
          this._handleStatusChange(offerId, isFavorite);
        }}>
        <svg className="place-card__bookmark-icon" width={OfferButton[btnType].WIDTH} height={OfferButton[btnType].HEIGHT}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  favoriteIds: PropTypes.array.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteIds: getFavoriteIds(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite(offerId) {
    dispatch(changeFavorite({offerId, status: 0}));
  },
  setFavorite(offerId) {
    dispatch(changeFavorite({offerId, status: 1}));
  },
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
