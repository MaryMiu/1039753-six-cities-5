import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {CITIES} from "../../const";


const Menu = (props) => {
  const {onCityChange, city} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((it) => (
          <li key={it} className="locations__item">
            <a className={`locations__item-link tabs__item ${city === it ? `tabs__item--active` : ``}`}
              data-location={`${it}`} href="#" onClick={(evt) => {
                onCityChange(evt);
              }}>
              <span>{`${it}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    const link = evt.target.closest(`.locations__item-link`);
    evt.preventDefault();
    if (link !== null) {
      const {dataset} = link;
      dispatch(ActionCreator.changeCity(dataset.location));
      dispatch(ActionCreator.getOffers(dataset.location));
    }
    return false;
  },
});

Menu.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export {Menu};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
