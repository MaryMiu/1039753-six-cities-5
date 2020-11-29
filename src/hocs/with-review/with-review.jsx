import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
        isDisabled: false,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleDisabledChange = this.handleDisabledChange.bind(this);
      this.resetForm = this.resetForm.bind(this);

    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    handleDisabledChange() {
      this.setState({isDisabled: !this.state.isDisabled});
    }

    resetForm() {
      this.setState({
        rating: ``,
        comment: ``,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          rating={Number(this.state.rating)}
          comment={this.state.comment}
          isDisabled={this.state.isDisabled}
          onChangeForm={this.handleFieldChange}
          onChangeDisabledState={this.handleDisabledChange}
          resetForm={this.resetForm}
        >
        </Component>
      );
    }
  }

  WithReview.propTypes = {
    onChangeForm: PropTypes.func.isRequired,
    onChangeInputState: PropTypes.func.isRequired,
    onChangeButtonState: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
