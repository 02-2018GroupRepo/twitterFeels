import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const testIcon = require('../face.png');
const markers = [{ lat: 27.1750, lng: 78.0422, id: 1 },{ lat: 57.1750, lng: 98.0422, id: 2 },{ lat: 17.1750, lng: 78.0422, id: 3 },{ lat: 17.1750, lng: 48.0422, id: 4 },{ lat: 27.1750, lng: 8.0422, id: 5 },{ lat: 57.1750, lng: 78.0422, id: 6 }];

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 27.1750, lng: 78.0422 }}
    >
        {/*{props.isMarkerShown && <Marker defaultIcon={testIcon} position={{ lat: 27.1750, lng: 78.0422 }} />}*/}
        {markers.map(marker => (
            <Marker
                defaultIcon={testIcon}
                position={{ lat: marker.lat, lng: marker.lng}}
                key={marker.id}
            />
        ))}
    </GoogleMap>
));

export default MyMapComponent;
