import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Autocomplete } from '@react-google-maps/api';
const api = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
      center: {
        lat: 180,
        lng: 180
      }
    };
  }

  onPlaceChanged = () => {
    if (this.autocomplete !== null) {
      const place = this.autocomplete.getPlace();
      if (place.geometry) {
        this.setState({
          place,
          center: place.geometry.location.toJSON()
        });
      }
    }
  };

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <div>
        <Autocomplete
          onLoad={autocomplete => {
            this.autocomplete = autocomplete;
          }}
          onPlaceChanged={this.onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter an address"
            style={{
              margin: `10px`,
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </Autocomplete>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={this.state.center}
          center={this.state.center}
        >
          {this.state.place && (
            <Marker
              position={this.state.place.geometry.location}
              title={this.state.place.name}
            />
          )}
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: api
})(MapContainer);