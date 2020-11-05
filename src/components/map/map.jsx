import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";

export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }

  createMap() {
    const {coord} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    map.fitBounds(coord);

    coord.forEach((offerCoord) => {
      leaflet
        .marker(offerCoord, {icon})
        .addTo(map);
    });

    this.map = map;
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    if (this.map !== null) {
      this.map.remove();
      this.map = null;

      this.createMap();
    }
  }

  render() {
    const {mapStyle} = this.props;
    return (
      <div style={mapStyle} id="map"></div>
    );
  }
}

Map.propTypes = {
  coord: PropTypes.array.isRequired,
  mapStyle: PropTypes.object.isRequired
};
