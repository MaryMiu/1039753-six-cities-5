import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Sort} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
class Sortlist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      text: `Popular`
    };

    this.hundleClick = this.hundleClick.bind(this);
  }

  hundleClick(evt) {
    evt.preventDefault();

    const sortBy = evt.target.closest(`.places__sorting-type`);
    const currentSort = evt.target.closest(`.places__option`);

    if (evt.target === sortBy) {
      this.setState({opened: !this.state.opened});
    } else if (evt.target === currentSort) {
      this.setState({text: evt.target.textContent, opened: false});
    }
  }

  render() {
    const {activeSortType, onOptionClick} = this.props;
    return (
      <form className="places__sorting" action="#" method="get" onClick={this.hundleClick}>
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          {this.state.text}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.opened === true ? `places__options--opened` : ``}`}>
          <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.POPULAR ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.POPULAR}>Popular</li>
          <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.LOW_TO_HIGH ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.LOW_TO_HIGH}>Price: low to high</li>
          <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.HIGH_TO_LOW ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.HIGH_TO_LOW}>Price: high to low</li>
          <li onClick={onOptionClick} className={`places__option ${activeSortType === Sort.TOP_RATED ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.TOP_RATED}>Top rated first</li>
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onOptionClick(evt) {
    dispatch(ActionCreator.getActiveSort(evt.target.dataset.type));
  },
});

Sortlist.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

export {Sortlist};
export default connect(mapStateToProps, mapDispatchToProps)(Sortlist);
