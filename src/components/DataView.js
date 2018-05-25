import React, { Component } from 'react';

class DataView extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div style= {{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center"
                }} className= "Data-Wrapper">
                    <div>how</div>
                    <div>u</div>
                    <div>doin</div>
                    <div>lil</div>
                    <div>mama</div>

                </div>
            </div>
        )
    }
}

export default DataView;