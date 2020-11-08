import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {CITIES} from "../../const";


const Menu = (props) => {
  const {onCityChange, activeCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city} className="locations__item">
            <a className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`}
              data-location={`${city}`} href="#" onClick={(evt) => {
                onCityChange(evt, city);
              }}>
              <span>{`${city}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

Menu.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt, activeCity) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(activeCity));
  },
});

export {Menu};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
