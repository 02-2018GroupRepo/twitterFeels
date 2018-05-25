import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    textAlign: "center",
                    justifyContent: "space-around"
                }} className= "Data-Wrapper">

                    <div style={style.dataDiv}>No</div>
                    <div style={style.dataDiv}>Flex</div>
                    <div style={style.dataDiv}>Zone</div>
                    <div style={style.dataDiv}>Flex</div>
                    <div style={style.dataDiv}>Zone</div>

                </div>

                <div style={{marginTop: 15}}>
                    <button className= "btn btn-primary btn-lg">
                        <Link to="/" style={{
                            color: "white"
                            }}>Map</Link>
                    </button>
                </div> 
            </div>
        )
    }
}
const style = {
    dataDiv: {
       color: "white",
       border: "solid 1px black",
       backgroundColor: "gray",
       borderRadius: "5px",
       padding: "80px"
    }
}
export default DataView;