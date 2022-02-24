import React from "react";
import {Link } from "react-router-dom"

import "./index.css"

const navbar = [
    {
        path: "/",
        name: "HOME"
    },
    {
        path: "/movies",
        name: "MOVIE"
    },
    {
        path: "/TV",
        name: "TV"
    },  
]

const Header = () => {

    return (
        <header className="header">
            <div className="header-container container">
                <div className="header-logo">
                <Link 
                    to="/"   
                    className="header-logo-link"
                >
                    MyMovie
                </Link>
                </div>
                <ul className="header-nav">
                    {navbar.map((item, index) => (
                        <li 
                            key = {index} 
                            className="header-nav-item"
                        >
                            <Link to = {item.path} className="header-nav-item-link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="header-nav-icon-mobile">
                    <i className="ti-align-right header-nav-icon"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
