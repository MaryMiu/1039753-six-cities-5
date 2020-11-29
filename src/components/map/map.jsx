import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";

const ICON_WIDTH = 30;
const ICON_HEIGHT = 30;
const DEFAULT_ICON_URL = `img/pin.svg`;
const ACTIVE_ICON_URL = `img/pin-active.svg`;
class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidMount() {
    this._createMap();
  }

  componentDidUpdate() {
    if (this.map !== null) {
      this._removeMap();
      this._createMap();
    }
  }

  _removeMap() {
    this.map.remove();
  }

  _createMap() {
    const {offers, activeOffer} = this.props;
    const isOffersLoaded = offers.length !== 0;

    if (isOffersLoaded) {
      const coords = offers.map((offer) => [offer.location.latitude, offer.location.longitude]);
      const firstOffer = offers[0];
      const cityLatitude = firstOffer.city.location.latitude;
      const cityLongitude = firstOffer.city.location.longitude;
      const cityCoords = [cityLatitude, cityLongitude];
      const zoom = firstOffer.city.location.zoom;

      const MyIcon = leaflet.Icon.extend({
        options: {
          iconSize: [ICON_WIDTH, ICON_HEIGHT]
        }
      });

      const defaultIcon = new MyIcon({iconUrl: DEFAULT_ICON_URL});
      const activeIcon = new MyIcon({iconUrl: ACTIVE_ICON_URL});

      const map = leaflet.map(`map`, {
        center: cityCoords,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(cityCoords, zoom);

      leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

      coords.forEach((offerCoord) => {
        leaflet
          .marker(offerCoord, {icon: defaultIcon})
          .addTo(map);
      });
      if (Object.keys(activeOffer).length !== 0) {
        leaflet
          .marker([activeOffer.location.latitude, activeOffer.location.longitude], {icon: activeIcon})
          .addTo(map);
      }

      this.map = map;

      return map;
    } else {
      return null;
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
  mapStyle: PropTypes.object.isRequired,
  activeOffer: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeOffer: PROCESS.activeOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
