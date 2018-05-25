import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Map from "./components/Map";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">BirdMachine</h1>
                    </header>

                        <Route path="/" component={Map} />


                </div>
            </Router>

        );
    }
}

export default App;