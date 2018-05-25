import React, { Component } from 'react';
import MyMapComponent from './MyMapComponent'


class Map extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "#25A4F4"
            }}>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `75vh`, width: '80vw' }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: "15px"  }} />}
                />
            </div>
        )
    }
}

export default Map;