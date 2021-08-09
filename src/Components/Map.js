import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.2307,
      lng: 72.8567
    },
    zoom: 11
  };
  
  render() {
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
          <AnyReactComponent
            lat={19.2307}
            lng={72.8567}
            text="My Marker"
            />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;

const API = "AIzaSyC4sWc7sQxxPa51yPWFCmi6QSRWdFxUEr4"