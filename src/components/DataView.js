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
                    textAlign: "center",
                    justifyContent: "space-around"
                }} className= "Data-Wrapper">

                    <div style={style.dataDiv}>No</div>
                    <div style={style.dataDiv}>Flex</div>
                    <div style={style.dataDiv}>Zone</div>
                    <div style={style.dataDiv}>Flex</div>
                    <div style={style.dataDiv}>Zone</div>

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