import React, { Component } from 'react';
import MyMapComponent from './MyMapComponent'


class Map extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `84vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

export default Map;