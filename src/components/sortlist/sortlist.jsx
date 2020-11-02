import React, {PureComponent} from "react";
import {Sort} from "../../const";

export default class Sortlist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      type: Sort.POPULAR,
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
      this.setState({type: evt.target.dataset.type, text: evt.target.textContent});
    }
  }

  render() {
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
          <li className={`places__option ${this.state.type === Sort.POPULAR ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.POPULAR}>Popular</li>
          <li className={`places__option ${this.state.type === Sort.LOW_TO_HIGH ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.LOW_TO_HIGH}>Price: low to high</li>
          <li className={`places__option ${this.state.type === Sort.HIGH_TO_LOW ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.HIGH_TO_LOW}>Price: high to low</li>
          <li className={`places__option ${this.state.type === Sort.TOP_RATED ? `places__option--active` : ``}`} tabIndex="0" data-type={Sort.TOP_RATED}>Top rated first</li>
        </ul>
      </form>
    );
  }
}
