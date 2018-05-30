import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const faceOne = require('../Images/Face1.png');
const faceTwo = require('../Images/Face2.png');
const faceThree = require('../Images/Face3.png');
const faceFour = require('../Images/Face4.png');
const faceFive = require('../Images/Face5.png');



const markers = [
    { lat: 43.615852, lng: -116.282355, id: 1, icon: faceTwo }, // idaho gps
    { lat: 48.785569, lng: -122.47977, id: 2, icon: faceThree }, // washington state
    { lat: 44.441371, lng: -73.118691, id: 3, icon: faceTwo }, // vt thd
    { lat: 25.763267, lng: -80.243685, id: 4 , icon: faceFour}, // miami
    { lat: 32.752141, lng: -117.213786, id: 5, icon: faceFour },    // san diego
    { lat: 34.0521947, lng: -84.598989, id: 6, icon: faceFive } // experimental store
    ];

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={4.4}
        defaultCenter={{ lat: 39.8283, lng: -98.5795 }}
    >
        {/*{props.isMarkerShown && <Marker defaultIcon={testIcon} position={{ lat: 27.1750, lng: 78.0422 }} />}*/}
        {markers.map(marker => (
            <Marker
                defaultIcon={marker.icon}
                position={{ lat: marker.lat, lng: marker.lng}}
                key={marker.id}
            />
        ))}
    </GoogleMap>
));

export default MyMapComponent;
