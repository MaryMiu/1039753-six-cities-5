import React from "react";
import PropTypes from "prop-types";

import "../../../node_modules/leaflet/dist/leaflet.css";

const Map = (props) => {
  const {mapStyle} = props;
  return (
    <div style={mapStyle} id="map"></div>
  );
};

Map.propTypes = {
  mapStyle: PropTypes.object.isRequired
};

export default Map;
