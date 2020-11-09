import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";

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

    render() {
      return (
        <Component
          {...this.props}
        >
        </Component>
      );
    }
  }

  const mapStateToProps = (state) => ({
    activeOffer: state.activeOffer,
  });

  WithMap.propTypes = {
    activeOffer: PropTypes.object.isRequired,
    offers: PropTypes.array.isRequired,
  };

  return connect(mapStateToProps)(WithMap);

};

export default withMap;
