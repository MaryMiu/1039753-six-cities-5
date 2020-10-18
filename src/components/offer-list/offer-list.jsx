import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }
  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} onMouseEnter={() => this.handleClick(offer)} />
        ))}
      </div>
    );
  }
  handleClick(offer) {
    this.setState({active: offer});
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired
};
