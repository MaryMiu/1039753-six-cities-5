import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getErrorMessage} from "../../store/selectors";


class Message extends PureComponent {
  constructor(props) {
    super(props);
    this.messageRef = createRef();
  }

  render() {
    const {error} = this.props;
    setTimeout(() => {
      this.messageRef.current.remove();
    }, 5000);
    return (
      <div ref={this.messageRef} style={{position: `fixed`, width: `100%`, backgroundColor: `#d20000`, color: `#fff`, textAlign: `center`, zIndex: `100`}}>{error}</div>
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
