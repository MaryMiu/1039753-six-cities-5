import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PlaceCard from "../place-card/place-card";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  render() {
    const {currentClasses, offers, onMouseEnter} = this.props;
    const {listClass} = currentClasses;
    return (
      <div className={`${listClass} places__list`}>
        {offers.map((offer) => {
          return (
            <PlaceCard key={offer.id} offer={offer} currentClasses={currentClasses} onMouseEnter={onMouseEnter} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter(offer) {
    dispatch(ActionCreator.getActiveOffer(offer));
  }
});


PlacesList.propTypes = {
  currentClasses: PropTypes.shape({
    listClass: PropTypes.string,
    cardClass: PropTypes.string,
    imgClass: PropTypes.string,
  }),
  offers: PropTypes.array.isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
