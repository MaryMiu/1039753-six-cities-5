import React from "react";
import PropTypes from "prop-types";
import {Sort} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const Sortlist = (props) => {
  const {opened, onClickToggle, activeSortType, onOptionClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={onClickToggle} className="places__sorting-type" tabIndex="0">
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened === true ? `places__options--opened` : ``}`}>
        <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.POPULAR ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.POPULAR}>Popular</li>
        <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.LOW_TO_HIGH ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.LOW_TO_HIGH}>Price: low to high</li>
        <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.HIGH_TO_LOW ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.HIGH_TO_LOW}>Price: high to low</li>
        <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.TOP_RATED ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.TOP_RATED}>Top rated first</li>
      </ul>
    </form>
  );
};

Sortlist.propTypes = {
  opened: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  onClickToggle: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeSortType: PROCESS.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onOptionClick(evt) {
    dispatch(ActionCreator.getActiveSort(evt.target.dataset.type));
  },
});

export {Sortlist};
export default connect(mapStateToProps, mapDispatchToProps)(Sortlist);
