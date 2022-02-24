import React from "react";

import "./footer.css"


export const Footer = () => {
    return (
        <div className="footer">
            <div class="container container-logo">
                <div class="row footer-res-mobile">
                    <div class="col-xl-4 col-md-6 col-sm-12 footer-res-tablet footer-icon">
                        <a href="/">
                            <h3 className="footer-logo" >MyMovie</h3>
                        </a>
                        <a href="https://www.facebook.com/khan.nguyen.184881/" target="_blank" rel="noreferrer">
                            <i className="footer-icon-item ti-facebook"></i>
                        </a>
                        <a href="https://github.com/DuyKhan45" target="_blank" rel="noreferrer">
                            <i className="footer-icon-item ti-github"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCy4Sq1uKFw1se-9ZDYAKaLw" target="_blank" rel="noreferrer">
                            <i className="footer-icon-item ti-youtube"></i>
                        </a>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12 footer-res-tablet">
                        <a href="/">    
                            <p className="title-footer">About Company</p>
                        </a>
                        <ul className="list-about">
                            <a href="/">
                                <li>About Us</li>
                            </a>
                            <a href="/">
                                <li>Feature</li>
                            </a>
                            <a href="/">
                                <li>New Movie</li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-xl-4 col-md-6 col-sm-12 footer-res-tablet">
                        <a href="/">
                            <p className="title-footer">Support</p>
                        </a>
                        <ul className="list-about">
                            <a href="/">
                                <li>Contact</li>
                            </a>
                            <a href="/">
                                <li>Support Center</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}