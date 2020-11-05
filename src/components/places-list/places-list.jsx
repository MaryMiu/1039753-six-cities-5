import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

export default class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  render() {
    const {currentClasses, offers} = this.props;
    const {listClass} = currentClasses;
    return (
      <div className={`${listClass} places__list`}>
        {offers.map((offer) => {
          return (
            <PlaceCard key={offer.id} offer={offer} currentClasses={currentClasses} onMouseEnter={this.handleMouseEnter} />
          );
        })}
      </div>
    );
  }

  handleMouseEnter(id) {
    this.setState({active: id});
  }
}

PlacesList.propTypes = {
  currentClasses: PropTypes.shape({
    listClass: PropTypes.string,
    cardClass: PropTypes.string,
    imgClass: PropTypes.string,
  }),
  offers: PropTypes.array.isRequired
};
