import React, { Component } from 'react';
import logo from './assets/pizza.jpg';
import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import Images from './Images';

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

const ImagesWrapper = {
    width: "400px",
    margin: "0 auto",
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <img style={styles} src={logo} />
                <div style={labels} >
                    <h1>TODAY!</h1>
                    <p>Alan Knipe: Innovation Day 2019</p>
                    <div style={ImagesWrapper}>
                        <Images />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
