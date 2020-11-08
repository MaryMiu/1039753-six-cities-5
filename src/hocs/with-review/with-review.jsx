import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {

      return (
        <Component
          {...this.props}
          onChangeForm={this.handleFieldChange}
          onSubmitForm={this.handleSubmit}
        >
        </Component>
      );
    }
  }

  WithReview.propTypes = {
    onChangeForm: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
