import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const testIcon = require('../face.png');

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap

        defaultZoom={7}
        defaultCenter={{ lat: 27.1750, lng: 78.0422 }}
    >
        {props.isMarkerShown && <Marker defaultIcon={testIcon} position={{ lat: 27.1750, lng: 78.0422 }} />}
    </GoogleMap>
));

export default MyMapComponent;
