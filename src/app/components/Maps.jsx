const React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const Map = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'600px'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={22}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.props.lat}
          lng={this.props.lng}
          content={this.props.address}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }

});

module.exports = Map;

