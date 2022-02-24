import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./Components/Header"
import { Footer } from "./Components/Footer";
import Home from "./main/Home";
import Movies from "./Components/Movies";
import TV from "./Components/TV";
import PlayVideo from "./Components/PlayVideo";

import './App.css';



function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/TV" element={<TV/>}/>
                    <Route path="/:category/:id/play" element={<PlayVideo props/>}/>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
