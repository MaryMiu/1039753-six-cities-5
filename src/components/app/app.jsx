import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {

  const {count} = props;

  return (
    <Main count={count} />
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired
};

export default App;
