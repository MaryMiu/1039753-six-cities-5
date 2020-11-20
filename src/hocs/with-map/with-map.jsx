import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import {arrayEqual} from "../../utils";

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
      this.map = null;
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

    createMap() {
      const {offers, activeOffer} = this.props;
      const coords = offers.map((offer) => [offer.location.latitude, offer.location.longitude]);
      const cityLatitude = offers[0].city.location.latitude;
      const cityLongitude = offers[0].city.location.longitude;
      const cityCoord = [cityLatitude, cityLongitude];

      const MyIcon = leaflet.Icon.extend({
        options: {
          iconSize: [30, 30]
        }
      });

      let activeOfferCoord = [];

      if (Object.keys(activeOffer).length !== 0) {
        activeOfferCoord = [activeOffer.location.latitude, activeOffer.location.longitude];
      }

      const defaultIcon = new MyIcon({iconUrl: `img/pin.svg`});
      const activeIcon = new MyIcon({iconUrl: `img/pin-active.svg`});

      const zoom = 11;

      const map = leaflet.map(`map`, {
        center: cityCoord,
        zoom,
        zoomControl: false,
        marker: true
      });

      map.setView(cityCoord, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      coords.forEach((offerCoord) => {
        if (!arrayEqual(offerCoord, activeOfferCoord)) {
          leaflet
            .marker(offerCoord, {icon: defaultIcon})
            .addTo(map);
        } else {
          leaflet
            .marker(activeOfferCoord, {icon: activeIcon})
            .addTo(map);
        }
      });

      this.map = map;
    }

    render() {
      return (
        <Component
          {...this.props}
        >
        </Component>
      );
    }
  }

  const mapStateToProps = ({PROCESS}) => ({
    activeOffer: PROCESS.activeOffer,
  });

  WithMap.propTypes = {
    activeOffer: PropTypes.object.isRequired,
    offers: PropTypes.array.isRequired,
  };

  return connect(mapStateToProps)(WithMap);

};

export default withMap;
