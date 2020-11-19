import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getErrorMessage} from "../../store/selectors";


class Message extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {error} = this.props;
    setTimeout(() => {
      console.log(`Удалить сообщение`);
    }, 5000);
    return (
      <div style={{position: `fixed`, width: `100%`, backgroundColor: `red`, color: `#fff`, textAlign: `center`, zIndex: `100`}}>{error}</div>
    );
  }
}

Message.propTypes = {
  error: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  error: getErrorMessage(state),
});

export {Message};
export default connect(mapStateToProps)(Message);
