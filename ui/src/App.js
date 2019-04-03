import React, { Component } from 'react';
import logo from './assets/IMG_0198.JPG';
import './App.css';

const styles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
}

const labels = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <img style={styles} src={logo} />
                <div style={labels} >
                    <h1>Coming Soon</h1>
                    <p>Alan Knipe: Innovation Day 2019</p>
                </div>
            </div>
        );
    }
}

export default App;
