import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";

import "../../../node_modules/leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }

  createMap() {
    const {offers, activeOffer} = this.props;
    const coord = offers.map((offer) => offer.coord);
    const city = [52.38333, 4.9];

    const MyIcon = leaflet.Icon.extend({
      options: {
        iconSize: [30, 30]
      }
    });

    const defaultIcon = new MyIcon({iconUrl: `img/pin.svg`});
    const activeIcon = new MyIcon({iconUrl: `img/pin-active.svg`});

    const zoom = 11;

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

    coord.forEach((offerCoord) => {
      if (offerCoord !== activeOffer.coord) {
        leaflet
        .marker(offerCoord, {icon: defaultIcon})
        .addTo(map);
      } else {
        leaflet
        .marker(offerCoord, {icon: activeIcon})
        .addTo(map);
      }
    });

    this.map = map;
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    if (this.map !== null) {
      this.map.off();
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

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

Map.propTypes = {
  activeOffer: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  mapStyle: PropTypes.object.isRequired
};

export {Map};
export default connect(mapStateToProps)(Map);
