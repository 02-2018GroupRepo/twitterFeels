import React, { Component } from 'react';
import MyMapComponent from './MyMapComponent';
import { Link } from 'react-router-dom';
import axios from 'axios';

const faceOne = require('../Images/Face1.png');
//angery

const faceFive = require('../Images/Face5.png');
//happy

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            things: null,
        }
    }
    componentWillMount(){
        var self = this;
        axios.get('http://localhost:3030')
            .then(function (response) {
                self.setState({
                    things: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        // if (this.state.things){
        //     console.log(this.state.things.avgArray);
        // }

        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "lightgrey",
                marginTop: "30px"
            }}>

                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `75vh`, width: '80vw' }} />}
                    mapElement={<div style={{ height: `100%`, borderRadius: "15px"  }} />}
                />
                <div style={{marginTop: 15}}>
                    <button className= "btn btn-primary btn-lg">
                        <Link to="/Data" style={{
                            color: "white"
                            }}>View Data</Link>
                    </button>
                </div>    
            </div>
        )
    }
}

export default Map;