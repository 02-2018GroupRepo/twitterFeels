import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios/index";

class DataView extends Component{
    constructor(props){
        super(props);
        this.state = {
            things: null,
            val_1: null,
            val_2: null,
            val_3: null,
            val_4: null,
            val_5: null,
            val_6: null,
        }
    }
    componentWillMount(){
        var self = this;
        axios.get('http://localhost:3030')
            .then(function (response) {
                self.setState({
                    things: response.data,
                    val_1: response.data.avgArray[1].toPrecision(2),
                    val_2: response.data.avgArray[3].toPrecision(1),
                    val_3: response.data.avgArray[5].toPrecision(1),
                    val_4: response.data.avgArray[7].toPrecision(2),
                    val_5: response.data.avgArray[9].toPrecision(2),
                    val_6: response.data.avgArray[11].toPrecision(2)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <div style={{marginTop: 15, fontWeight: 'bold'}}>
                    Sentiment analyses for tweets mentioning The Home Depot.
                </div>
                <div style= {{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "space-around",
                    marginTop: 15
                }} className= "Data-Wrapper">


                    <div style={style.dataDiv}>
                        Boise, Idaho
                        {'\n'}
                        {this.state.val_1}
                        </div>

                    <div style={style.dataDiv}>
                        Bellingham, Washington
                        {'\n'}
                        {this.state.val_2}
                        </div>

                    <div style={style.dataDiv}>
                        Williston, Virginia
                        {'\n'}
                        {this.state.val_3}
                        </div>

                    <div style={style.dataDiv}>
                        Miami, Florida
                        {'\n'}
                        {this.state.val_4}
                        </div>

                    <div style={style.dataDiv}>
                        San Diego, California
                        {'\n'}
                        {this.state.val_5}
                        </div>

                    <div style={style.dataDiv}>
                        Kennesaw, Georgia
                        {'\n'}
                        {this.state.val_6}
                        </div>

                </div>
                <div>Sentiment ranges from -5 to +5</div>


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
       backgroundColor: "#FA6304",
       borderRadius: "5px",
       padding: 50,
        margin: 20
    }
};
export default DataView;