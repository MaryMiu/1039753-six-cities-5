import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getActiveOffer} from "../../store/selectors";
import {sendComment} from '../../store/api-actions';

const MIN_LENGH_REVIEW = 50;
const MAX_LENGH_REVIEW = 300;
class ReviewsForm extends PureComponent {

  constructor(props) {
    super(props);

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {activeOffer, onChangeDisabledState, sendCommentAction, rating, comment, resetForm} = this.props;
    const {id} = activeOffer;
    onChangeDisabledState();
    sendCommentAction(id, rating, comment).then(() => {
      onChangeDisabledState();
      resetForm();
    }).catch(() => {
      onChangeDisabledState();
    });

  }

  render() {
    const {rating, comment, isDisabled, onChangeForm} = this.props;

    const isChecked = rating > 0;
    const isFilled = (comment.length > MIN_LENGH_REVIEW && comment.length < MAX_LENGH_REVIEW);

    const buttonDisabledRules = (!(isChecked && isFilled));
    const isDisabledButton = isDisabled ? isDisabled : buttonDisabledRules;

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="comment">Your comment</label>
        <div className="reviews__rating-form form__rating">
          <input onChange={onChangeForm} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" disabled={isDisabled} checked={isChecked} required />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input onChange={onChangeForm} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" disabled={isDisabled} checked={isChecked} required />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input onChange={onChangeForm} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" disabled={isDisabled} checked={isChecked} required />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input onChange={onChangeForm} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" disabled={isDisabled} checked={isChecked} required />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input onChange={onChangeForm} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" disabled={isDisabled} checked={isChecked} required />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea onChange={onChangeForm} className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isDisabled} value={comment} required></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit comment please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isDisabledButton}>Submit</button>
        </div>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  activeOffer: PropTypes.object.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  onChangeDisabledState: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  sendCommentAction: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendCommentAction(id, rating, comment) {
    return dispatch(sendComment(id, rating, comment));
  },
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
