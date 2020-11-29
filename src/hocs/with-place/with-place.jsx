import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const withPlace = (Component) => {
  class WithPlace extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        active: null
      };
    }

    render() {
      const {onMouseAction} = this.props;

      return (
        <Component
          {...this.props}
          onMouse={onMouseAction}
        >
        </Component>
      );
    }
  }

  const mapStateToProps = ({PROCESS}) => ({
    activeOffer: PROCESS.activeOffer,
  });

  const mapDispatchToProps = (dispatch) => ({
    onMouseAction(offer) {
      dispatch(ActionCreator.getActiveOffer(offer));
    }
  });

  WithPlace.propTypes = {
    onMouseAction: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithPlace);

};

export default withPlace;
