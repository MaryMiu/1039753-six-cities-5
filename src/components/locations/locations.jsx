import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Сities} from "../../const";

export default class Locations extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: Сities.PARIS
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const link = evt.target.closest(`.locations__item-link`);
    evt.preventDefault();
    if (link !== null) {
      const {dataset} = link;
      this.setState({currentCity: dataset.location});
    }
  }

  render() {
    const {cities} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a className={`locations__item-link tabs__item ${this.state.currentCity === city ? `tabs__item--active` : ``}`} data-location={`${city}`} href="#" onClick={this.handleClick}>
                <span>{`${city}`}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Locations.propTypes = {
  cities: PropTypes.array.isRequired,
};
